// Builds the Holiday & Year-End Pack studio from the main studio with a different post list.
// Usage: node realtor-kit/tools/build-holiday.js
const fs = require("fs");
const path = require("path");
const { POSTS } = require("./holiday-posts");

const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "product", "realtor-post-studio.html"), "utf8");
const start = src.indexOf("const POSTS = [");
const end = src.indexOf("\n];\n", start) + 4;
if (start < 0 || end < 4) throw new Error("POSTS block not found");

let out = src.slice(0, start) + `const POSTS = ${JSON.stringify(POSTS, null, 2)};\n` + src.slice(end);
out = out
  .replace("<title>Realtor Post Studio</title>", "<title>Realtor Holiday Post Studio</title>")
  .replace("<h1>Realtor Post Studio</h1>", "<h1>Realtor Holiday Post Studio</h1>")
  .replace(
    /<p>30 days of branded[^<]*<\/p>/,
    "<p>15 branded Thanksgiving, holiday, winter and New Year posts. Type your details once, then download everything.</p>",
  )
  .replace("// ---------- Content: 30 days ----------", "// ---------- Content: Holiday & Year-End Pack ----------");

const dest = path.join(root, "product", "realtor-holiday-studio.html");
fs.writeFileSync(dest, out);
console.log("Wrote", dest);
