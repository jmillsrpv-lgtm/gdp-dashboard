# Add-on products: more money from every buyer

## The product line (list all of these on Payhip, Gumroad and Etsy)

| Product | Price | File to upload | Cover image |
|---|---|---|---|
| 30-Day Realtor Post Studio | $19 | `product/realtor-post-studio.zip` | `01-cover.jpg` (+ 02–04) |
| Holiday & Year-End Pack (15 posts) | $12 | `product/realtor-holiday-studio.zip` | `05-holiday-cover.jpg` |
| **Complete Bundle** (both, 45 posts) | **$27** (save 30%) | `product/realtor-complete-bundle.zip` | `06-bundle-cover.jpg` |
| **Done-For-You** (we brand all 45 posts) | **$47** | none: you deliver a zip per order | `07-done-for-you-cover.jpg` |

**Why this makes more money:** most buyers stop at one product. Offering the bundle next to the $19 kit gets a share of buyers to choose $27 instead. The $47 service pays you about $45 for roughly 2 minutes of work. The holiday pack is time-sensitive, so list it **now** (Nov–Dec is its season).

### Where the upsells go on each platform
- **Payhip:** Products → the $19 kit → **Upsells** → offer the Bundle upgrade for +$8. Also **Coupons** → `AGENT10` for 10% off (use it in DMs).
- **Gumroad:** on each product, **Checkout → Upsells** → offer the Holiday Pack for $9 at checkout. Add the Bundle as its own product.
- **Etsy:** list all 4 as separate listings. In each description, add one line: "Want everything? See the Complete Bundle in my shop and save 30%." Etsy shows your other listings under each one.

---

## Holiday & Year-End Pack ($12)

**Title (Etsy):** `Realtor Holiday Instagram Posts | Thanksgiving Christmas New Year Real Estate Social Media | Auto-Branded, No Canva | 15 Posts + Captions`

**Tags:** `realtor holiday post, real estate christmas, realtor thanksgiving, realtor new year, holiday realtor, real estate social, realtor instagram, realtor templates, winter real estate, realtor marketing, realtor captions, holiday social media, broker gift`

**Description:**
Show up all holiday season without thinking about it. These 15 polished, on-brand posts cover Thanksgiving, Black Friday, winter home tips, Christmas, year-in-review and New Year. They brand themselves with YOUR name, colors and headshot in about 5 minutes.

WHAT YOU GET
• 15 holiday and year-end post designs: gratitude, hosting tips, winterizing checklist, holiday safety, Black Friday home-value offer, client story, season's greetings, market year-in-review, New Year goals and more
• 15 ready-to-post captions with hashtags for your city
• 3 sizes: feed (1080×1350), square (1080×1080), Story/Reel/TikTok cover (1080×1920)
• 6 color themes or your exact brand colors
• Works on any computer. No Canva, no account

Pairs with the 30-Day Realtor Post Studio. Get both in the Complete Bundle and save 30%.
Personal license: 1 agent or team. Instant digital download. Created with the help of AI-assisted tools and reviewed by hand.

---

## Complete Bundle ($27)

**Title (Etsy):** `Realtor Social Media Bundle | 45 Instagram Posts + Captions | 30 Day + Holiday Real Estate Templates | Auto-Branded, No Canva`

**Tags:** `realtor bundle, realtor instagram, real estate posts, realtor templates, realtor holiday post, just listed post, open house template, realtor marketing, real estate agent, realtor captions, realtor branding, real estate social, broker gift`

**Description:**
Everything in one download: the 30-Day Realtor Post Studio plus the Holiday & Year-End Pack. That's 45 branded posts and 45 captions, ready in minutes with your name, colors, headshot and listings.

• 30 everyday posts: Just Listed, Open House, Under Contract, Just Sold, Price Improved, Coming Soon, market updates, buyer and seller tips, myth vs fact, testimonials and more
• 15 holiday posts: Thanksgiving through New Year
• 45 captions with hashtags · 3 sizes · 6 themes or custom colors
• Save 30% vs. buying separately

Personal license: 1 agent or team. Instant digital download. Created with the help of AI-assisted tools and reviewed by hand.

---

## Done-For-You Branding ($47)

**Title (Etsy):** `Done For You Realtor Instagram Posts | 45 Custom Branded Real Estate Social Media Posts | Your Name Logo Colors | Delivered in 48 Hours`

**Tags:** `custom realtor posts, done for you social, realtor branding, real estate social, realtor instagram, personalized realtor, realtor marketing, real estate agent, just listed post, realtor templates, realtor holiday post, broker gift, realtor content`

**Description:**
Too busy to set anything up? We do it for you. Send your details and we deliver all 45 posts (30 everyday + 15 holiday), fully branded, in every size, within 48 hours.

YOU SEND (after checkout)
• Name, brokerage, phone, Instagram/TikTok handle, city
• Your headshot (and a listing photo if you have one)
• Brand colors, or pick one of our 6 themes

YOU GET
• 45 finished PNG posts in 3 sizes (feed, square, Story/TikTok) = 135 images
• 45 captions with your city's hashtags
• The editable studio files too, so you can reuse them for every new listing

Delivered by email within 48 hours. Personal license: 1 agent or team. Created with the help of AI-assisted tools and reviewed by hand.

**Etsy setting:** turn on **Personalization**. Prompt: `Your name, brokerage, phone, @handle and city. We'll message you for your headshot.` For Payhip/Gumroad, put the intake message below in the product's thank-you/receipt note.

### Intake message (send right after a $47 order)
> Thanks for your order! Reply with these and I'll have your 45 posts back to you within 48 hours:
> 1. Name (as it should appear)
> 2. Brokerage (and license line, if required)
> 3. Phone and @handle
> 4. City/market
> 5. Your headshot (attach a photo)
> 6. Brand colors, or pick a theme 1–6 (see the last listing photo)
> 7. Optional: a current listing's address, price, beds/baths/sq ft and photo
> 8. Optional: your local median price, days on market and active listings

### Fulfilling an order (about 2 minutes)
1. Copy `tools/order-example.json` to a new folder. Fill in the buyer's details and save their photos next to it (set `"headshot": "headshot.jpg"`).
2. Run `node realtor-kit/tools/fulfill.js path/to/order.json`.
3. It creates a zip with all posts in every size and both caption files.
4. The zip is about 18 MB. Upload it to Google Drive and email the buyer the link, plus `realtor-complete-bundle.zip` so they can make more later.

(If running the command is a hassle, ask Claude to run it. Just send the buyer's details and photos.)
