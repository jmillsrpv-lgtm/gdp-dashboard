# Builds 4:3 marketplace listing images (Etsy/Gumroad/Payhip) from rendered samples.
# Usage: python3 realtor-kit/tools/make-listing-images.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
samples, out = root / "marketing" / "samples", root / "marketing" / "listing-images"
out.mkdir(parents=True, exist_ok=True)
W, H = 2400, 1800
NAVY, GOLD, CREAM = (31, 58, 95), (201, 162, 39), (246, 241, 233)
def font(size, bold=True):
    name = "Inter-Bold.otf" if bold else "Inter-Regular.otf"
    try: return ImageFont.truetype(f"/usr/share/fonts/opentype/inter/{name}", size)
    except OSError: return ImageFont.load_default()
def post(day, w):
    im = Image.open(samples / f"day-{day:02d}.png").convert("RGB")
    return im.resize((w, int(w * im.height / im.width)))
def shadowed(canvas, im, x, y):
    ImageDraw.Draw(canvas).rectangle([x - 2, y - 2, x + im.width + 1, y + im.height + 1], fill=(214, 208, 198))
    canvas.paste(im, (x, y))

def cover():
    c = Image.new("RGB", (W, H), CREAM); d = ImageDraw.Draw(c)
    d.rectangle([0, 0, 900, H], fill=NAVY)
    d.text((90, 260), "30 DAYS OF", font=font(54), fill=GOLD)
    for i, line in enumerate(["Realtor", "Instagram", "Posts"]):
        d.text((90, 340 + i * 150), line, font=font(140), fill="white")
    d.rectangle([90, 820, 230, 830], fill=GOLD)
    for i, line in enumerate(["Auto-branded with your name,", "colors, headshot & listings", "+ 30 ready-to-post captions"]):
        d.text((90, 880 + i * 64), line, font=font(44, False), fill=(225, 230, 238))
    d.rounded_rectangle([90, 1150, 760, 1260], 18, fill=GOLD)
    d.text((130, 1178), "NO CANVA NEEDED", font=font(50), fill=NAVY)
    d.text((90, 1600), "Instant download · Works on any computer", font=font(36, False), fill=(190, 200, 215))
    w = 440
    for i, day in enumerate([3, 6, 2, 7, 4, 10]):
        x = 990 + (i % 3) * (w + 30); y = 110 + (i // 3) * 830
        shadowed(c, post(day, w), x, y)
    c.save(out / "01-cover.jpg", quality=92)

def grid(name, days, title):
    c = Image.new("RGB", (W, H), CREAM); d = ImageDraw.Draw(c)
    d.text((W // 2, 90), title, font=font(84), fill=NAVY, anchor="mm")
    w = 380
    for i, day in enumerate(days):
        x = 110 + (i % 5) * (w + 75); y = 200 + (i // 5) * 800
        shadowed(c, post(day, w), x, y)
    c.save(out / name, quality=92)

def features():
    c = Image.new("RGB", (W, H), NAVY); d = ImageDraw.Draw(c)
    d.text((W // 2, 170), "What's included", font=font(110), fill="white", anchor="mm")
    items = [("30", "branded post designs"), ("30", "done-for-you captions + hashtags"),
             ("3", "sizes: feed, square, story/TikTok"), ("6", "luxury color themes + custom colors"),
             ("1", "click to download all 30"), ("∞", "reuse for every new listing")]
    for i, (n, t) in enumerate(items):
        x = 520; y = 360 + i * 220
        d.text((x + 180, y + 90), n, font=font(130), fill=GOLD, anchor="rm")
        d.text((x + 260, y + 90), t, font=font(60, False), fill="white", anchor="lm")
    c.save(out / "04-whats-included.jpg", quality=92)

cover()
grid("02-all-posts-1.jpg", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Days 1–10: listings, tips, market updates")
grid("03-all-posts-2.jpg", [14, 15, 16, 19, 20, 21, 22, 24, 28, 30], "Every post type a realtor needs")
features()
print("ok", sorted(p.name for p in out.iterdir()))

# ---- Add-on products: Holiday Pack, Bundle, Done-For-You ----
holiday_samples = root / "marketing" / "holiday-samples"
WINE, SAND = (122, 62, 62), (226, 194, 162)

def hpost(day, w):
    im = Image.open(holiday_samples / f"day-{day:02d}.png").convert("RGB")
    return im.resize((w, int(w * im.height / im.width)))

def side_cover(name, bg, accent, kicker, lines, sub, badge, picks):
    c = Image.new("RGB", (W, H), CREAM); d = ImageDraw.Draw(c)
    d.rectangle([0, 0, 900, H], fill=bg)
    d.text((90, 260), kicker, font=font(54), fill=accent)
    for i, line in enumerate(lines):
        d.text((90, 340 + i * 150), line, font=font(140), fill="white")
    y = 340 + len(lines) * 150 + 30
    d.rectangle([90, y, 230, y + 10], fill=accent)
    for i, line in enumerate(sub):
        d.text((90, y + 60 + i * 64), line, font=font(44, False), fill=(235, 228, 222))
    by = y + 80 + len(sub) * 64
    bw = int(d.textlength(badge, font=font(50))) + 80
    d.rounded_rectangle([90, by, 90 + bw, by + 110], 18, fill=accent)
    d.text((130, by + 28), badge, font=font(50), fill=bg)
    w = 440
    for i, (src, day) in enumerate(picks):
        x = 990 + (i % 3) * (w + 30); yy = 110 + (i // 3) * 830
        shadowed(c, (hpost if src == "h" else post)(day, w), x, yy)
    c.save(out / name, quality=92)

side_cover("05-holiday-cover.jpg", WINE, SAND, "HOLIDAY & YEAR-END", ["15 Realtor", "Holiday", "Posts"],
           ["Thanksgiving, winter, Christmas", "and New Year, auto-branded", "+ 15 ready-to-post captions"],
           "NO CANVA NEEDED", [("h", 1), ("h", 4), ("h", 5), ("h", 7), ("h", 9), ("h", 15)])
side_cover("06-bundle-cover.jpg", NAVY, GOLD, "THE COMPLETE BUNDLE", ["45 Realtor", "Social", "Posts"],
           ["30-Day Studio + Holiday Pack", "Your name, colors & listings", "+ 45 captions · save 30%"],
           "BEST VALUE", [("m", 3), ("h", 1), ("m", 6), ("h", 9), ("m", 7), ("h", 15)])
side_cover("07-done-for-you-cover.jpg", (29, 29, 31), (212, 175, 122), "DONE FOR YOU", ["We Brand", "Your 45", "Posts"],
           ["Send your name, colors & headshot", "Get every post in 3 sizes", "delivered within 48 hours"],
           "ZERO WORK FOR YOU", [("m", 1), ("m", 3), ("h", 1), ("m", 10), ("h", 9), ("m", 24)])
print("ok add-ons")
