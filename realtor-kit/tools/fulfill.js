// Done-for-you fulfillment: turns one buyer's details into a ready-to-send zip of
// branded posts (every size) plus their captions.
// Usage: node realtor-kit/tools/fulfill.js path/to/order.json [outDir]
// See realtor-kit/tools/order-example.json for the fields. Photo paths are relative to the order file.
const { chromium } = require("playwright");
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const orderPath = path.resolve(process.argv[2] || "");
if (!process.argv[2] || !fs.existsSync(orderPath)) {
  console.error("Usage: node fulfill.js path/to/order.json [outDir]");
  process.exit(1);
}
const order = JSON.parse(fs.readFileSync(orderPath, "utf8"));
const orderDir = path.dirname(orderPath);
const slug = (order.agentName || "agent").toLowerCase().replace(/[^a-z0-9]+/g, "-");
const outDir = path.resolve(process.argv[3] || path.join(root, "orders", slug));

const FIELDS = ["agentName", "brokerage", "phone", "handle", "city", "license", "address", "price",
  "openHouse", "beds", "baths", "sqft", "mMedian", "mDays", "mActive", "mMonth", "fontPair"];
const STUDIOS = [
  { file: "realtor-post-studio.html", folder: "30-day-posts" },
  ...(order.includeHoliday ? [{ file: "realtor-holiday-studio.html", folder: "holiday-posts" }] : []),
];
const FORMATS = { portrait: "instagram-feed-1080x1350", square: "square-1080x1080", story: "story-tiktok-1080x1920" };

(async () => {
  fs.rmSync(outDir, { recursive: true, force: true });
  const browser = await chromium.launch();
  const errors = [];
  for (const studio of STUDIOS) {
    const page = await browser.newPage();
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("file://" + path.join(root, "product", studio.file));

    for (const [id, key] of [["headshot", "headshot"], ["listing", "listingPhoto"]]) {
      if (!order[key]) continue;
      await page.setInputFiles(`#${id}`, path.resolve(orderDir, order[key]));
      await page.waitForFunction((k) => !!window.__rps.imgs[k], id);
    }

    await page.evaluate(([o, fields]) => {
      if (Number.isInteger(o.theme)) document.querySelectorAll("#themes button")[o.theme]?.click();
      for (const [k, v] of Object.entries(o.colors || {})) document.getElementById(k).value = v;
      for (const f of fields) if (o[f] != null) document.getElementById(f).value = String(o[f]);
    }, [order, FIELDS]);

    for (const [format, label] of Object.entries(FORMATS)) {
      const shots = await page.evaluate((f) => {
        document.getElementById("format").value = f;
        window.__rps.drawAll();
        return window.__rps.canvases.map((c, i) => ({
          name: `day-${String(window.__rps.POSTS[i].day).padStart(2, "0")}-${window.__rps.POSTS[i].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          data: c.toDataURL("image/png"),
        }));
      }, format);
      const dir = path.join(outDir, studio.folder, label);
      fs.mkdirSync(dir, { recursive: true });
      for (const s of shots) fs.writeFileSync(path.join(dir, `${s.name}.png`), Buffer.from(s.data.split(",")[1], "base64"));
    }

    const captions = await page.evaluate(() => {
      const s = window.__rps.S();
      return window.__rps.POSTS.map((p) => `DAY ${p.day} — ${p.title.toUpperCase()}\n${window.__rps.caption(p, s)}\n`)
        .join("\n------------------------------\n\n");
    });
    fs.writeFileSync(path.join(outDir, studio.folder, "captions.txt"), captions);
    await page.close();
  }
  await browser.close();
  if (errors.length) {
    console.error("Page errors:\n" + errors.join("\n"));
    process.exit(1);
  }

  const zip = `${outDir}.zip`;
  fs.rmSync(zip, { force: true });
  execFileSync("python3", ["-c",
    "import shutil,sys; shutil.make_archive(sys.argv[1][:-4], 'zip', sys.argv[2])", zip, outDir]);
  console.log(`Done: ${zip}`);
})();
