// Renders every post in the studio to PNG (for QA and for marketplace listing images).
// Usage: node realtor-kit/tools/render-samples.js [outDir] [themeIndex] [format]
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.resolve(process.argv[2] || path.join(root, "marketing", "samples"));
const theme = Number(process.argv[3] || 0);
const format = process.argv[4] || "portrait";

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => m.type() === "error" && errors.push(m.text()));
  await page.goto("file://" + path.join(root, "product", "realtor-post-studio.html"));
  await page.evaluate(([t, f]) => {
    document.querySelectorAll("#themes button")[t].click();
    document.getElementById("format").value = f;
    window.__rps.drawAll();
  }, [theme, format]);
  const shots = await page.evaluate(() =>
    window.__rps.canvases.map((c, i) => ({ day: window.__rps.POSTS[i].day, data: c.toDataURL("image/png") })));
  for (const s of shots) {
    const file = path.join(outDir, `day-${String(s.day).padStart(2, "0")}.png`);
    fs.writeFileSync(file, Buffer.from(s.data.split(",")[1], "base64"));
  }
  await browser.close();
  if (errors.length) { console.error("Page errors:\n" + errors.join("\n")); process.exit(1); }
  console.log(`Rendered ${shots.length} posts to ${outDir}`);
})();
