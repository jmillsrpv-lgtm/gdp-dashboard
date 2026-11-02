# HANDOFF: Realtor Post Studio (read this first)

## Instructions for the AI reading this
You're helping a husband-and-wife team launch their first digital product. Another AI assistant (Claude Code) built everything described below. Please:
1. Explain in plain, simple language what was built, how it works, and how they'll make money with it. Assume no technical or marketing background.
2. Walk them through the action plan step by step, and answer their questions.
3. Coach the wife, who is the on-camera marketer, on videos, DMs and staying consistent.
4. Be honest. The sales numbers are targets, not guarantees.
5. The full source code is in the Appendix at the end. You don't need to explain it unless they ask, but you can edit it if they want changes (new posts, wording, colors).

## Who's who
- **Owner (husband):** sets up the store accounts (Payhip and Etsy) and handles the business side.
- **Wife:** the face of the brand. She makes short videos and sends personal DMs to real estate agents.

---

# Realtor Post Studio: everything we built + the plan

*Paste or upload this document into any Claude chat to pick up where we left off.*

## The short version
- **Product:** Realtor Post Studio, a **$19** digital download for real estate agents.
- **What it does:** it's a single file the agent opens in any web browser. They type in their name, brokerage, phone and city, choose brand colors, and add a headshot and a listing photo. One click gives them **30 branded social media posts plus 30 ready-to-post captions with hashtags**. No Canva, no designer, no internet needed.
- **Sizes:** Instagram/Facebook feed (1080×1350), square (1080×1080), Story/Reel/TikTok cover (1080×1920).
- **Post types:** Just Listed, Open House, Under Contract, Just Sold, Price Improved, Coming Soon, Market Update, Buyer Tips, Seller Tips, Myth vs Fact, Testimonials, Meet the Agent, and engagement questions.
- **Extras:** 6 color themes or fully custom colors, "download all 30" in one click, and the agent's settings are saved so they can reuse it for every new listing.
- **Pricing:** $19 kit · $47 done-for-you (we enter their details and send the PNGs, about 10 minutes of work) · later a $9/month subscription for 30 new posts each month.
- **Why it can win:** realtor templates are proven sellers on Etsy, but nearly all of them are Canva templates that look alike. Ours brands itself, so we can DM an agent a **free sample post with their own name on it**. Template shops can't do that.
- **Marketer:** the owner's wife is the face of the brand: short videos plus personal DMs to agents.
- **Budget:** about $0–40/month.

## Files we created (GitHub repo `jmillsrpv-lgtm/gdp-dashboard`, branch `claude/realtor-social-kit`)

| File | What it is |
|---|---|
| `realtor-kit/product/realtor-post-studio.zip` | **The file customers buy** (the studio + a Start Here guide) |
| `realtor-kit/product/realtor-post-studio.html` | The studio itself |
| `realtor-kit/product/START-HERE.txt` | Instructions for buyers |
| `realtor-kit/marketing/listing-images/` | 4 store images (cover, two post previews, "What's included") |
| `realtor-kit/marketing/samples/` | All 30 sample posts as PNGs |
| `realtor-kit/marketing/LISTINGS-AND-SCRIPTS.md` | Etsy and Payhip copy, 10 video scripts, DM script |
| `realtor-kit/marketing/MARKETER-PLAYBOOK.md` | The wife's daily routine, rules and tracker |
| `realtor-kit/PLAN.md` | Launch plan and budget |
| `realtor-kit/tools/` | Scripts that regenerate the images if the designs change |

## Status and next steps
- Done: product, listing images, store copy, video scripts, launch plan, marketer playbook.
- **Not done yet. A person has to do these:** create the Payhip and Etsy accounts (they need ID and bank details), publish the listings, set up social accounts, and send DMs.
- Ideas for later: a holiday post pack for Q4, swapping in our own brand name and colors, and a $9/month web-app version once there are about 20 sales.

<div class="pb"></div>

## What the product looks like

![cover](marketing/listing-images/01-cover.jpg)

![posts](marketing/listing-images/02-all-posts-1.jpg)

<div class="pb"></div>

# Part 1: Realtor Post Studio: launch plan (under $40/month)

## What we're selling and why
**Product:** a one-file tool that turns an agent's name, colors, headshot and listing into 30 branded Instagram/Facebook/TikTok posts plus 30 captions. Price: **$19**. Upsell: **$47 done-for-you**.

**Why this product:**
- Real estate agents are a large group of buyers who already spend money on marketing and are told to post daily.
- Realtor social templates are proven sellers on Etsy. The catch is that the category is crowded with near-identical Canva template shops.
- **Our edge:** no Canva. It brands itself automatically, so you can show a *personalized free sample* in a DM, which template shops can't do. That one move is our main sales channel.
- It costs nothing to deliver, so every sale is close to 100% margin minus platform fees.

**Honest expectations:** nothing digital is a sure thing. A brand-new Etsy shop with no reviews usually gets few organic views for the first few weeks. Early sales will come from **direct outreach and short videos**, not from Etsy search. A realistic target is the first sale within 1–2 weeks of daily outreach and 20–50 sales in month one. That depends entirely on doing the daily outreach.

## Monthly budget

| Item | Cost | Needed? |
|---|---|---|
| Etsy listing fee | $0.20 per listing, then 6.5% + ~3% + $0.25 per sale | Yes |
| Payhip (free plan) or Gumroad as your own checkout | $0 upfront, 5% (Payhip) or 10% + $0.50 (Gumroad) per sale | Yes, pick one |
| TikTok, Instagram, Facebook, Pinterest | $0 | Yes |
| Free scheduler (Metricool free plan or Meta Business Suite) | $0 | Yes |
| Domain (.com ≈ $12/yr; .io ≈ $40–60/yr) | $1–5/mo | Later |
| Etsy Ads, only after 3+ reviews | $1–3/day, capped | Optional |
| **Total** | **≈ $0–40/mo** | |

Skip these for now: Stan Store ($29/mo), Canva Pro, paid schedulers, any course or "AI agent" subscription.

## 14-day launch

**Day 1 (about 1 hour, you do this):**
1. Create a Payhip (or Gumroad) account. Upload `product/realtor-post-studio.zip` and listing images 01–04 from `marketing/listing-images/`. Paste the copy from `marketing/LISTINGS-AND-SCRIPTS.md`. You get a live $19 link.
2. Open an Etsy shop and create the same listing. Etsy needs ID and bank verification, so start today because approval can take a day or two.
3. Put the Payhip link in your TikTok, Instagram and Facebook bios.

**Days 2–14 (about 45–60 min/day):**
- **20 personalized DMs per day** to agents who posted a listing this week. Search Instagram for `#justlisted + your city` and other cities. Use the DM script, and send each agent their Day 1 post with their own name on it. This is the money channel.
- **1–2 short videos per day** from the 10 scripts (screen-record the studio). Post the same video to TikTok, Reels, Shorts and Pinterest Idea Pins.
- **Join 5 realtor Facebook groups.** Help people first. Where the rules allow, share a free sample post ("comment your city and I'll make you one").
- After each sale, ask for a review. Etsy ranking depends on reviews.

**After 10 sales:** add the $47 done-for-you option and a holiday pack (Thanksgiving / Christmas / New Year posts). Seasonal packs sell well in Q4.

## Phase 2: web app with a paywall (after about 20 sales)
The studio is already the core of a web app. Once buyers prove demand:
- Host it as a subscription site (Floot or Lovable; both are connected to this workspace), with Stripe at **$9/month for 30 fresh posts every month**. Recurring revenue beats one-time $19 sales.
- Buy the domain then, not before. A .com is cheaper and more trusted than .io for realtor buyers.
- Build this only after paying customers ask for "more posts next month." That's the signal.

## What's automated vs. what you do
- **Automated, already built:** the product, post rendering, captions, listing images, and marketing copy. `tools/render-samples.js` and `tools/make-listing-images.py` rebuild every image if we change a design.
- **You do (platforms require a real person):** account sign-ups and ID/bank verification, publishing the listings, and sending DMs. Auto-DM bots get accounts banned, so DMs stay manual.
- **I can do next, with your go-ahead:** schedule the 10 videos' captions through Metricool, set up the Payhip/Stripe products, build a holiday pack, or start the Phase 2 web app.

<div class="pb"></div>

# Part 2: Marketer Playbook: the face of Realtor Post Studio

You're the face and the voice of the brand. Realtor social media is a relationship business: agents buy from someone they like and trust on camera. Your job is to be the helpful "social media friend for realtors." It takes about 60–75 minutes a day.

## Who you're selling to
Real estate agents, mostly newer and solo agents, who know they should post every day but don't have the time or design skills. The biggest groups are women aged 28–55 and teams that want a consistent look.

**Your one-line pitch:** "I'll give you a month of branded posts with your name on them in 5 minutes. No Canva."

## Setup (first weekend, about 2 hours)
1. **Handle:** pick one name and use it everywhere: TikTok, Instagram, Facebook page, Pinterest. Something like `@postsforrealtors`, `@realtorpoststudio` or `@[yourname]forrealtors`.
2. **Bio:** "Done-for-you Instagram posts for realtors 🏡 30 days in 5 min · No Canva ↓" plus the Payhip link.
3. **Profile photo:** a friendly, well-lit photo of your face. Faces beat logos for trust.
4. Make **3 sample posts with your own name** in the studio and pin them to your Instagram grid.
5. Join 5–10 realtor Facebook groups (search "real estate agents [your state]", "new real estate agents", "realtor marketing"). Read each group's promo rules.

## Daily routine (Mon–Fri)

| Time | Task | Goal |
|---|---|---|
| 20 min | **1 short video** (TikTok, then repost the same file to Reels, Shorts and Pinterest) | Get seen |
| 30 min | **20 DMs** to agents who posted a listing this week (`#justlisted` + city). Offer a free sample post with their name on it | **Sales** |
| 10 min | Make and send the samples people said yes to, then send the $19 link | Close |
| 10 min | Comment helpfully on 10 realtor posts or group threads | Get noticed |
| 5 min | Log everything in the tracker below | Know what works |

**Weekends:** batch-film 5 videos for the week. Do one "comment your city and I'll make your post" video and reply to the comments with video responses.

## Videos where you're the face (talk to the camera, 7–20 seconds)
1. "Realtors, I'm going to save you $300 a month." → screen-record typing a name → all 30 posts change.
2. "If you're a new agent with an empty Instagram, watch this." → scroll the grid.
3. "Comment your city and I'll make your market update post for free." → reply-video for each commenter. **This is your best one for reach.**
4. "Rating realtor Instagram posts 1–10." → react to generic posts, then show yours. Be nice, never mean.
5. "Which color theme are you: 1, 2, 3, 4, 5 or 6?" → this drives comments.
6. "Day in my life running a little business for realtors." → behind the scenes builds trust.
7. "Broker gift idea your agents will actually use." → aimed at team leads, which leads to bulk sales.
8. "Things new agents waste money on (and what to do instead)." → helpful first, product last.

**Every video:** hook in the first 2 seconds, captions on screen, end with "link in my bio."

## DM script (send by hand, never with a bot)
> Hi {name}! Saw your listing on {street}, gorgeous! 😍 I make done-for-you Instagram posts for realtors. Can I send you a free Just Listed post with your branding on it? No strings.

If they say yes: make it in the studio, send the PNG, then:
> Here you go! If you like it, the full kit is 30 days of posts like this + captions for $19: {link}. Happy to set it up for you for $47 if you'd rather not touch it.

If they don't reply, follow up once 3 days later. Then let it go.

## Rules that keep us safe
- **Always be upfront that it's your product.** Say "I made this" or "my shop." Never post as if you're an unrelated happy customer. The FTC treats fake testimonials and undisclosed self-promotion as deceptive.
- Only use real reviews from real buyers. Screenshots need their permission.
- Follow each Facebook group's promo rules, or you'll get removed.
- Keep it to 20–30 DMs a day per account. More than that looks like spam and gets accounts restricted.

## Tracker (copy into a Google Sheet)
| Date | Videos posted | Best video views | DMs sent | Replies | Samples sent | Sales $19 | Sales $47 | Revenue |
|---|---|---|---|---|---|---|---|---|

**Check every Sunday:** double down on whichever video type or DM opener got the most replies.

## The numbers we're aiming for
- 20 DMs/day × 5 days = 100 DMs a week
- About 15–25% reply, so about 15–25 free samples a week
- About 20–30% of those buy, so **about 4–7 sales a week from DMs alone** (≈ $75–150+), plus whatever the videos bring in
- These are targets, not promises. Track your real numbers and adjust after week 2.

<div class="pb"></div>

# Part 3: Store listings + TikTok/Reels scripts (copy-paste ready)

## Etsy listing

**Title (140 chars max):**
Realtor Instagram Posts | 30 Day Real Estate Social Media Templates | Auto-Branded, No Canva | Just Listed Open House Captions Bundle

**Price:** $19 (shows as a sale: $38 → $19 at 50% off for the first 30 days)

**13 tags:**
realtor instagram, real estate posts, realtor templates, real estate social, just listed post, open house template, realtor marketing, real estate agent, realtor captions, realtor branding, realtor gift, real estate canva, broker social media

**Category:** Digital Prints → or "Templates → Social Media Templates" (pick whichever Etsy suggests)
**Who made it:** I did · **What is it:** A finished product · **Production partner:** none
**AI disclosure:** In the description, say the designs and captions were created with AI-assisted tools. Etsy expects this.

**Description:**
Stop staring at a blank Instagram feed. This is 30 days of polished, on-brand real estate posts, plus the captions, that brand themselves with YOUR name, colors, headshot and listings in about 5 minutes.

No Canva account. No design skills. Open the file, type your details, and click "Download all 30."

WHAT YOU GET
• 30 professionally designed posts: Just Listed, Open House, Under Contract, Just Sold, Price Improved, Coming Soon, Market Update, Buyer & Seller Tips, Myth vs Fact, Testimonials, Meet the Agent, and engagement posts
• 30 ready-to-post captions with hashtags for your city
• 3 sizes: Instagram/Facebook feed (1080×1350), square (1080×1080), Story/Reel/TikTok cover (1080×1920)
• 6 luxury color themes, or match your exact brand colors
• Reuse it forever. Swap in each new listing in seconds

HOW IT WORKS
1. Download and open the file in any web browser (Mac or PC)
2. Type your name, brokerage, phone and city, then upload your headshot
3. Download all 30 posts as PNGs and post one a day

Perfect for new agents, solo agents, teams, and as a closing gift from brokers and lenders.

Personal license: 1 agent or team. Instant digital download. No physical item ships.
Designs and captions were created with the help of AI-assisted tools and reviewed by hand.

## Gumroad / Payhip / Stan Store (your own checkout, lower fees)

**Name:** The 30-Day Realtor Post Studio
**Price:** $19 (main) · $47 "Done-For-You" (we brand it and send the files within 48h) · pay-what-you-want minimum $19 on Gumroad works well for tips
**Short pitch:** 30 days of branded Instagram posts + captions for real estate agents. Your name, colors and listings in about 5 minutes. No Canva.
Use the same description as Etsy. Upload `realtor-post-studio.zip` and listing images 01–04.

**Order bump / upsell ideas** (sell these after you get your first 10 sales):
- "Done-For-You" branding: $47. You enter their details and email them the 30 PNGs (about 10 min of work).
- Monthly refill: $9/mo for 30 new posts each month. Add it once there's demand.

## 10 short videos for TikTok / Reels / Shorts
Film each one as a screen recording of the studio, 7–20 seconds, with on-screen text and a trending sound. Post 1–2 per day.

1. **Hook:** "Realtors, stop paying $300/month for social media." → show typing your name → all 30 posts change → "$19. Link in bio."
2. **Hook:** "I made 30 days of Instagram posts in 4 minutes." → timer overlay → download all.
3. **Hook:** "POV: you just got a listing and need a Just Listed post NOW." → upload photo → post appears.
4. **Hook:** "Which theme fits your brand? 1–6" → click through the 6 themes. (This drives comments.)
5. **Hook:** "New agent? Here's your first month of content, done." → scroll the grid.
6. **Hook:** "No Canva. No designer. No excuses." → fast cuts of posts.
7. **Hook:** "Things realtors post vs. what actually gets clients." → Myth vs Fact posts.
8. **Hook:** "Broker gift idea your agents will actually use." → aim this at team leads.
9. **Hook:** "Your listing photos deserve better than a phone screenshot." → before/after.
10. **Hook:** "Comment your city and I'll make your market update post." → do it in a reply video. This is the best one for engagement.

**Pinned comment on every video:** "Link in bio: 30 posts + captions, $19. Works on any computer."

## Direct outreach DM (Instagram/Facebook). Send 20 per day, by hand.
> Hey {first name}! Loved your recent listing on {street}. I made a tool that turns your name + brand colors into 30 days of ready-to-post Instagram content in about 5 minutes (no Canva). Want me to send you a free sample post with your branding on it?

When they reply yes: make their Day 1 post in the studio, send the PNG, then send the $19 link. Free personalized samples convert far better than links.

---

# Appendix: the code (everything that was built)

How it works in one sentence: the product is a single HTML file that runs in any web browser. It uses JavaScript to draw each post onto a <canvas> using the agent's details, then saves it as a PNG. Nothing is uploaded anywhere and no server is needed.

## `product/START-HERE.txt`

```text
REALTOR POST STUDIO: START HERE
================================

Thanks for your purchase! You'll have 30 branded posts in about 5 minutes.

1. Double-click "realtor-post-studio.html". It opens in Chrome, Safari, Edge or Firefox.
   No account, no Canva, and no internet needed. Your photos never leave your computer.
2. On the left, type your name, brokerage, phone, handle and city.
3. Pick a color theme, or set your own brand colors.
4. Upload your headshot, and a listing photo if you have one.
5. Fill in the listing details and your local market numbers (from your MLS).
6. Choose a size at the top: Instagram portrait, square, or Story/Reel/TikTok cover.
7. Click "Download all 30", or download them one at a time.
8. Click "Caption" on any post to copy a ready-to-post caption with hashtags.
   "Download captions" saves all 30 captions in one text file.

TIPS
- Got a new listing? Change the address, price and photo, then download the
  Just Listed / Open House / Sold posts again. You can reuse them forever.
- Your settings save automatically in your browser.
- Post once a day and you'll have a full month of content.
- Market numbers are placeholders. Always use your own MLS data.

Need help? Message us through the store you bought from.
Personal use license: one agent or team. Please don't resell or share the file.
```

## `product/realtor-post-studio.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Realtor Post Studio</title>
<style>
  :root {
    --bg: #f6f4f0; --panel: #ffffff; --ink: #1d1d1f; --muted: #6b6b70; --line: #e4e1db; --accent: #1f3a5f;
  }
  * { box-sizing: border-box; }
  body { margin: 0; font: 15px/1.45 -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif; background: var(--bg); color: var(--ink); }
  header { padding: 20px 24px; border-bottom: 1px solid var(--line); background: var(--panel); display: flex; gap: 16px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
  header h1 { margin: 0; font-size: 20px; }
  header p { margin: 2px 0 0; color: var(--muted); font-size: 13px; }
  .wrap { display: grid; grid-template-columns: 340px 1fr; gap: 0; min-height: calc(100vh - 80px); }
  aside { background: var(--panel); border-right: 1px solid var(--line); padding: 20px; overflow-y: auto; }
  aside h2 { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin: 22px 0 8px; }
  aside h2:first-child { margin-top: 0; }
  label { display: block; font-size: 13px; margin: 8px 0 3px; color: var(--muted); }
  input[type=text], select { width: 100%; padding: 8px 10px; border: 1px solid var(--line); border-radius: 8px; font: inherit; background: #fff; }
  .row { display: flex; gap: 8px; }
  .row > div { flex: 1; }
  input[type=color] { width: 100%; height: 36px; border: 1px solid var(--line); border-radius: 8px; padding: 2px; background: #fff; }
  .themes { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px; }
  .themes button { width: 34px; height: 34px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px var(--line); cursor: pointer; }
  .btn { display: inline-block; padding: 10px 14px; border-radius: 8px; border: 0; background: var(--accent); color: #fff; font: inherit; font-weight: 600; cursor: pointer; }
  .btn.ghost { background: #fff; color: var(--ink); border: 1px solid var(--line); }
  main { padding: 20px 24px; }
  .toolbar { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 16px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
  .card canvas { width: 100%; height: auto; display: block; background: #ddd; }
  .card .meta { padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; }
  .card .meta strong { font-size: 13px; }
  .card .meta span { font-size: 12px; color: var(--muted); }
  .card .actions { display: flex; gap: 6px; padding: 0 12px 12px; }
  .card .actions button { flex: 1; padding: 7px; font-size: 12px; }
  .hint { font-size: 12px; color: var(--muted); }
  .toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: #fff; padding: 10px 16px; border-radius: 8px; font-size: 13px; opacity: 0; transition: opacity .2s; pointer-events: none; }
  .toast.show { opacity: 1; }
  @media (max-width: 820px) { .wrap { grid-template-columns: 1fr; } aside { border-right: 0; border-bottom: 1px solid var(--line); } }
</style>
</head>
<body>
<header>
  <div>
    <h1>Realtor Post Studio</h1>
    <p>30 days of branded Instagram, Facebook &amp; TikTok-cover posts. Type your details once, then download everything.</p>
  </div>
  <div class="toolbar" style="margin:0">
    <button class="btn" id="dlAll">Download all 30 (PNG)</button>
    <button class="btn ghost" id="dlCaptions">Download captions (.txt)</button>
  </div>
</header>
<div class="wrap">
  <aside>
    <h2>Your details</h2>
    <label>Agent name</label><input type="text" id="agentName" value="Jordan Avery">
    <label>Brokerage</label><input type="text" id="brokerage" value="Avery Home Group">
    <div class="row">
      <div><label>Phone</label><input type="text" id="phone" value="(555) 123-4567"></div>
      <div><label>Instagram / TikTok</label><input type="text" id="handle" value="@averyhomes"></div>
    </div>
    <label>City / market</label><input type="text" id="city" value="Austin">
    <label>License line (optional)</label><input type="text" id="license" value="">

    <h2>Brand</h2>
    <div class="themes" id="themes"></div>
    <div class="row">
      <div><label>Primary</label><input type="color" id="c1" value="#1f3a5f"></div>
      <div><label>Accent</label><input type="color" id="c2" value="#c9a227"></div>
      <div><label>Background</label><input type="color" id="c3" value="#f6f1e9"></div>
    </div>
    <label>Headline style</label>
    <select id="fontPair">
      <option value="serif">Classic serif (luxury)</option>
      <option value="sans">Modern sans (clean)</option>
    </select>

    <h2>Photos</h2>
    <label>Headshot</label><input type="file" id="headshot" accept="image/*">
    <label>Listing / lifestyle photo</label><input type="file" id="listing" accept="image/*">
    <p class="hint">Photos never leave your computer. Without a photo, a tasteful brand-color background is used.</p>

    <h2>Listing details (for listing posts)</h2>
    <label>Address</label><input type="text" id="address" value="1428 Maple Ridge Dr">
    <div class="row">
      <div><label>Price</label><input type="text" id="price" value="$649,000"></div>
      <div><label>Open house</label><input type="text" id="openHouse" value="Sat 1–4 PM"></div>
    </div>
    <div class="row">
      <div><label>Beds</label><input type="text" id="beds" value="4"></div>
      <div><label>Baths</label><input type="text" id="baths" value="3"></div>
      <div><label>Sq ft</label><input type="text" id="sqft" value="2,450"></div>
    </div>

    <h2>Market numbers (for market update)</h2>
    <div class="row">
      <div><label>Median price</label><input type="text" id="mMedian" value="$512K"></div>
      <div><label>Days on market</label><input type="text" id="mDays" value="34"></div>
    </div>
    <div class="row">
      <div><label>Active listings</label><input type="text" id="mActive" value="2,140"></div>
      <div><label>Month</label><input type="text" id="mMonth" value="October"></div>
    </div>
    <p class="hint">Use your MLS numbers. Settings are saved in this browser.</p>
  </aside>
  <main>
    <div class="toolbar">
      <label style="margin:0">Format</label>
      <select id="format" style="width:auto">
        <option value="portrait">Instagram portrait 1080×1350</option>
        <option value="square">Square 1080×1080</option>
        <option value="story">Story / Reel / TikTok cover 1080×1920</option>
      </select>
      <span class="hint">Click “Caption” to copy the matching ready-to-post caption.</span>
    </div>
    <div class="grid" id="grid"></div>
  </main>
</div>
<div class="toast" id="toast"></div>

<script>
// ---------- Content: 30 days ----------
const POSTS = [
  { day: 1, layout: "agent", title: "Meet your agent", kicker: "HELLO, NEIGHBOR",
    head: "Your {city} real estate guide", body: "Buying, selling, or just curious what your home is worth? I'm here to make it simple.",
    caption: "Hi, I'm {name} 👋 I help families in {city} buy and sell with less stress and more confidence. Whether you're 6 months out or ready now, my DMs are open. Save this so you know who to call. 🏡" },
  { day: 2, layout: "tip", title: "Buyer tip: pre-approval", kicker: "BUYER TIP",
    head: "Get pre-approved before you tour", list: ["Know your real budget", "Sellers take you seriously", "Move fast on the right home"],
    caption: "Touring homes before you're pre-approved is like shopping without knowing your bank balance. 🔑 Pre-approval = real budget, stronger offers, faster closings. Want my list of trusted local lenders? Comment LENDER and I'll send it." },
  { day: 3, layout: "photo", badge: "JUST LISTED", title: "Just listed",
    caption: "✨ JUST LISTED ✨ {address} — {beds} bd | {baths} ba | {sqft} sq ft. Listed at {price}. This one won't last in {city}. DM me for a private showing or the full photo tour!" },
  { day: 4, layout: "myth", title: "Myth vs fact: 20% down", head: "Myth vs. Fact",
    myth: "You need 20% down to buy a home.", fact: "Many loan programs allow 3–5% down, and some even less.",
    caption: "Let's bust this one. 🚫 You do NOT always need 20% down. Plenty of buyers in {city} get in with 3–5% (or less with the right program). Ask your lender — or ask me who to call. Share this with someone who's been waiting." },
  { day: 5, layout: "bold", title: "Engagement: dream feature", kicker: "YOUR TURN",
    head: "Pool, big kitchen, or huge backyard?", body: "You can only pick one. Tell me in the comments.",
    caption: "Okay {city}, be honest… if you could only pick ONE: pool 🏊, chef's kitchen 🍳, or a huge backyard 🌳? Drop it in the comments!" },
  { day: 6, layout: "stat", title: "Market update", kicker: "MARKET UPDATE",
    caption: "📊 {month} {city} market snapshot: median price {median}, average {days} days on market, {active} active listings. What does this mean for YOU? Buyers have more choices; sellers need smart pricing. DM me MARKET for your neighborhood's numbers." },
  { day: 7, layout: "quote", title: "Client testimonial",
    quote: "We were nervous first-time buyers. {name} explained every step and we got our dream home under budget.", who: "The Martinez Family",
    caption: "Nothing makes my week like this. 🥹 Thank you for trusting me with such a huge milestone! If you're a first-time buyer in {city}, you don't have to figure it out alone." },
  { day: 8, layout: "tip", title: "Seller tip: first impressions", kicker: "SELLER TIP",
    head: "3 quick wins before you list", list: ["Paint the front door", "Swap old light fixtures", "Deep clean + declutter"],
    caption: "Selling soon? 🏠 You don't need a full remodel. These three low-cost updates make buyers fall in love online AND in person. Want my full pre-listing checklist? Comment CHECKLIST." },
  { day: 9, layout: "bold", title: "Home value CTA", kicker: "FREE · NO PRESSURE",
    head: "What's your home worth today?", body: "Get a custom valuation from a local expert, not an algorithm.",
    caption: "Online estimates can be off by tens of thousands. 😬 I'll send you a real, local home value report for free — no pressure, no obligation. DM me VALUE or tap the link in my bio." },
  { day: 10, layout: "photo", badge: "OPEN HOUSE", title: "Open house",
    caption: "🚪 OPEN HOUSE {openhouse} at {address}! {beds} bd | {baths} ba | {sqft} sq ft, listed at {price}. Come say hi, grab a cookie, and see it in person. Tag someone who's house hunting!" },
  { day: 11, layout: "tip", title: "First-time buyer costs", kicker: "FIRST-TIME BUYERS",
    head: "Costs nobody warns you about", list: ["Inspection & appraisal", "Closing costs (2–5%)", "Moving + first repairs"],
    caption: "Budgeting for a home is more than the down payment. 💸 Plan for inspection, appraisal, closing costs and move-in expenses so there are zero surprises. Save this for later!" },
  { day: 12, layout: "myth", title: "Myth vs fact: spring only", head: "Myth vs. Fact",
    myth: "Spring is the only good time to sell.", fact: "Serious buyers shop year-round, and there's less competition in the off-season.",
    caption: "Think you have to wait for spring? 🌷 Off-season buyers are often MORE serious, and you'll face fewer competing listings. Let's look at your timing together. DM me TIMING." },
  { day: 13, layout: "bold", title: "Neighborhood spotlight", kicker: "LOCAL LOVE",
    head: "My favorite coffee spot in {city}", body: "Supporting local is part of the job. Where should I go next?",
    caption: "☕ Local spotlight! Part of knowing a market is knowing the neighborhoods: the coffee, the parks, the Friday night spots. Drop your favorite local business below and I'll feature it!" },
  { day: 14, layout: "photo", badge: "UNDER CONTRACT", title: "Under contract",
    caption: "🎉 UNDER CONTRACT! {address} is officially spoken for. Proud of this team effort. Thinking about selling? Let's talk about what your home could do in today's market." },
  { day: 15, layout: "tip", title: "Offer-winning tips", kicker: "BUYER TIP",
    head: "How to win in a multiple-offer situation", list: ["Lead with a strong pre-approval", "Be flexible on closing date", "Keep contingencies clean"],
    caption: "Multiple offers? Here's how my buyers stand out without overpaying. 🏆 Price matters, but terms win deals. Want help building your offer strategy? Let's chat." },
  { day: 16, layout: "quote", title: "Seller testimonial",
    quote: "Sold in 6 days over asking. {name}'s marketing plan was next level.", who: "Sarah K., Seller",
    caption: "6 days. Over asking. Happy sellers. 🙌 Every home deserves a real marketing plan, not just a sign in the yard. Curious what I'd do for yours? DM me." },
  { day: 17, layout: "bold", title: "Behind the scenes", kicker: "A DAY IN THE LIFE",
    head: "What a realtor actually does all day", body: "Spoiler: it's not just showing pretty houses.",
    caption: "Showings are maybe 10% of the job. The rest? Negotiating, paperwork, problem-solving, inspections, and LOTS of phone calls. 😅 Want a full day-in-the-life? Comment YES." },
  { day: 18, layout: "tip", title: "Home maintenance", kicker: "HOMEOWNER TIP",
    head: "Fall maintenance checklist", list: ["Clean gutters & downspouts", "Service your HVAC", "Test smoke + CO detectors"],
    caption: "Protect your biggest investment. 🍂 These three quick tasks prevent expensive surprises later. Save this and share it with a new homeowner!" },
  { day: 19, layout: "myth", title: "Myth vs fact: FSBO", head: "Myth vs. Fact",
    myth: "Selling on your own saves you money.", fact: "Agent-assisted homes typically sell for more, and with far fewer legal headaches.",
    caption: "FSBO sounds like savings, until pricing, negotiating, and contracts get tricky. 📑 A good agent should earn their fee and then some. Ask me how I do that for my sellers." },
  { day: 20, layout: "photo", badge: "PRICE IMPROVED", title: "Price improvement",
    caption: "💥 PRICE IMPROVED! {address} is now {price}. {beds} bd | {baths} ba | {sqft} sq ft. This is your sign to book a showing. DM me today!" },
  { day: 21, layout: "stat", title: "Market update #2", kicker: "BY THE NUMBERS",
    caption: "Numbers don't lie. 📈 Here's where {city} stands this {month}. Rates and prices change fast, so if you've been on the fence, let's map out your best move. Comment MARKET." },
  { day: 22, layout: "bold", title: "Rent vs buy", kicker: "THINK ABOUT IT",
    head: "Rent pays a mortgage. Just not yours.", body: "Let's see if owning makes sense for you this year.",
    caption: "Every rent check builds equity… for your landlord. 🏦 Buying isn't right for everyone, but you should know your options. I'll run the numbers with you for free. DM me RENT." },
  { day: 23, layout: "tip", title: "Moving checklist", kicker: "MOVING SOON?",
    head: "Do these 2 weeks before moving day", list: ["Transfer utilities + internet", "Update your address", "Pack a first-night box"],
    caption: "Moving day stress is real. 📦 Knock these out two weeks early and thank yourself later. What's the ONE thing you always forget when moving?" },
  { day: 24, layout: "photo", badge: "JUST SOLD", title: "Just sold",
    caption: "🔑 SOLD! Congratulations to my clients on closing {address}! Another happy chapter starts in {city}. Want to be my next success story? Let's talk." },
  { day: 25, layout: "bold", title: "Referral thank-you", kicker: "THANK YOU",
    head: "My business runs on your referrals", body: "Know someone thinking about moving? I'd be honored to help.",
    caption: "The biggest compliment you can give me is introducing me to a friend. 🙏 If you know anyone thinking of buying or selling in {city}, I promise to take great care of them." },
  { day: 26, layout: "myth", title: "Myth vs fact: list high", head: "Myth vs. Fact",
    myth: "Listing high leaves room to negotiate.", fact: "Overpriced homes sit, then sell for less. Pricing right attracts more buyers.",
    caption: "The fastest way to lose money as a seller? Overpricing. ⏳ The right price creates urgency and competition. Let me show you the data for your street." },
  { day: 27, layout: "tip", title: "Credit tips", kicker: "BUYER TIP",
    head: "Protect your credit while buying", list: ["Don't open new credit cards", "Don't finance big purchases", "Pay every bill on time"],
    caption: "Under contract? Hands OFF the new car and furniture financing! 🚗🛋️ Big credit changes can derail your loan at the finish line. Share this with someone buying soon." },
  { day: 28, layout: "photo", badge: "COMING SOON", title: "Coming soon",
    caption: "👀 COMING SOON in {city}! {beds} bd | {baths} ba | {sqft} sq ft. Want early access before it hits the market? DM me SOON and you'll be first to know." },
  { day: 29, layout: "bold", title: "Q&A prompt", kicker: "ASK ME ANYTHING",
    head: "What's your #1 real estate question?", body: "Drop it below. I'll answer the best ones in a video this week.",
    caption: "No question is too basic. 🙋 Drop your real estate question in the comments and I'll answer the top ones in a video this week!" },
  { day: 30, layout: "agent", title: "Why work with me", kicker: "WHY ME",
    head: "Local. Responsive. On your side.", body: "Clear communication, smart marketing, and a strategy built around your goals.",
    caption: "30 days of tips later… let's make your move happen. 🏡 If you're buying or selling in {city} in the next 12 months, I'd love to help. Call {phone} or DM me anytime." }
];
const HASHTAGS = "#realestate #realtor #{cityTag}realestate #{cityTag}realtor #homesforsale #justlisted #firsttimehomebuyer #househunting #realestateagent #dreamhome";

const THEMES = [
  ["#1f3a5f", "#c9a227", "#f6f1e9"], // navy & gold
  ["#1d1d1f", "#d4af7a", "#f4f1ec"], // black & champagne
  ["#2f4a3a", "#d8b48a", "#f3efe6"], // forest & sand
  ["#7a3e3e", "#e2c2a2", "#f8f2ec"], // terracotta
  ["#3b4a6b", "#e8a87c", "#f5f3f0"], // slate & peach
  ["#0f5257", "#f2c14e", "#f2f7f5"], // teal & sun
];

// ---------- State ----------
const ids = ["agentName","brokerage","phone","handle","city","license","c1","c2","c3","fontPair","address","price","openHouse","beds","baths","sqft","mMedian","mDays","mActive","mMonth","format"];
const $ = id => document.getElementById(id);
const imgs = { headshot: null, listing: null };
try {
  const saved = JSON.parse(localStorage.getItem("rps-settings") || "{}");
  ids.forEach(k => { if (saved[k] != null && $(k)) $(k).value = saved[k]; });
} catch (e) {}
function S() { const o = {}; ids.forEach(k => o[k] = $(k).value); return o; }
function save() { try { localStorage.setItem("rps-settings", JSON.stringify(S())); } catch (e) {} }
function fill(t, s) {
  return String(t || "")
    .replaceAll("{name}", s.agentName).replaceAll("{city}", s.city).replaceAll("{address}", s.address)
    .replaceAll("{price}", s.price).replaceAll("{beds}", s.beds).replaceAll("{baths}", s.baths).replaceAll("{sqft}", s.sqft)
    .replaceAll("{openhouse}", s.openHouse).replaceAll("{phone}", s.phone).replaceAll("{month}", s.mMonth)
    .replaceAll("{median}", s.mMedian).replaceAll("{days}", s.mDays).replaceAll("{active}", s.mActive);
}
function caption(p, s) {
  const tag = s.city.toLowerCase().replace(/[^a-z0-9]/g, "");
  return fill(p.caption, s) + "\n\n" + HASHTAGS.replaceAll("{cityTag}", tag);
}

// ---------- Drawing helpers ----------
const SIZES = { portrait: [1080, 1350], square: [1080, 1080], story: [1080, 1920] };
function fonts(s) {
  return s.fontPair === "serif"
    ? { head: 'Georgia, "Times New Roman", "DejaVu Serif", serif', body: 'Inter, "Helvetica Neue", Arial, sans-serif' }
    : { head: 'Inter, "Helvetica Neue", Arial, sans-serif', body: 'Inter, "Helvetica Neue", Arial, sans-serif' };
}
function wrap(ctx, text, maxW) {
  const words = text.split(/\s+/); const lines = []; let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}
// Draws text that shrinks until it fits within maxLines; returns the bottom y.
function textBlock(ctx, text, x, y, maxW, size, opts = {}) {
  const { font, weight = "700", color = "#000", lh = 1.15, maxLines = 4, align = "left", minSize = 28 } = opts;
  let lines;
  for (;;) {
    ctx.font = `${weight} ${size}px ${font}`;
    lines = wrap(ctx, text, maxW);
    if (lines.length <= maxLines || size <= minSize) break;
    size -= 4;
  }
  ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = "top";
  const ax = align === "center" ? x + maxW / 2 : x;
  lines.forEach((l, i) => ctx.fillText(l, ax, y + i * size * lh));
  ctx.textAlign = "left";
  return y + lines.length * size * lh;
}
function cover(ctx, img, x, y, w, h) {
  const r = Math.max(w / img.width, h / img.height);
  const iw = img.width * r, ih = img.height * r;
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.drawImage(img, x + (w - iw) / 2, y + (h - ih) / 2, iw, ih); ctx.restore();
}
function placeholderPhoto(ctx, x, y, w, h, s) {
  const g = ctx.createLinearGradient(x, y, x + w, y + h);
  g.addColorStop(0, s.c1); g.addColorStop(1, shade(s.c1, 0.35));
  ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  // simple house line-art
  ctx.save(); ctx.strokeStyle = hexA(s.c2, 0.85); ctx.lineWidth = 10; ctx.lineJoin = "round";
  const cx = x + w / 2, cy = y + h / 2 + 20, u = Math.min(w, h) / 6;
  ctx.beginPath(); ctx.moveTo(cx - u * 1.4, cy - u * 0.1); ctx.lineTo(cx, cy - u * 1.4); ctx.lineTo(cx + u * 1.4, cy - u * 0.1); ctx.stroke();
  ctx.strokeRect(cx - u, cy - u * 0.3, u * 2, u * 1.5);
  ctx.strokeRect(cx - u * 0.25, cy + u * 0.4, u * 0.5, u * 0.8);
  ctx.restore();
}
function rrect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * (1 - amt))));
  return "#" + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map(v => v.toString(16).padStart(2, "0")).join("");
}
function lum(hex) { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; }
function onColor(hex) { return lum(hex) > 0.6 ? "#1d1d1f" : "#ffffff"; }

function footer(ctx, W, H, s, F, dark) {
  const fh = 130, y = H - fh;
  ctx.fillStyle = dark ? s.c1 : "#ffffff"; ctx.fillRect(0, y, W, fh);
  ctx.fillStyle = s.c2; ctx.fillRect(0, y, W, 8);
  const ink = dark ? onColor(s.c1) : "#1d1d1f";
  let x = 60;
  if (imgs.headshot) {
    ctx.save(); ctx.beginPath(); ctx.arc(x + 40, y + 69, 40, 0, Math.PI * 2); ctx.clip();
    cover(ctx, imgs.headshot, x, y + 29, 80, 80); ctx.restore(); x += 104;
  }
  ctx.fillStyle = ink; ctx.textBaseline = "top";
  ctx.font = `700 34px ${F.body}`; ctx.fillText(s.agentName, x, y + 30);
  ctx.font = `400 24px ${F.body}`; ctx.globalAlpha = 0.8;
  ctx.fillText([s.brokerage, s.license].filter(Boolean).join(" · "), x, y + 74); ctx.globalAlpha = 1;
  ctx.textAlign = "right";
  ctx.font = `700 28px ${F.body}`; ctx.fillText(s.phone, W - 60, y + 32);
  ctx.font = `400 24px ${F.body}`; ctx.globalAlpha = 0.8; ctx.fillText(s.handle, W - 60, y + 74);
  ctx.globalAlpha = 1; ctx.textAlign = "left";
  return y;
}
function kicker(ctx, text, x, y, s, F, color) {
  ctx.font = `700 26px ${F.body}`;
  ctx.fillStyle = color || s.c2; ctx.textBaseline = "top";
  ctx.letterSpacing = "4px"; ctx.fillText(text, x, y); ctx.letterSpacing = "0px";
  return y + 48;
}

// ---------- Layouts ----------
const LAYOUTS = {
  photo(ctx, W, H, p, s, F) {
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, H);
    const ph = Math.round(H * 0.56);
    imgs.listing ? cover(ctx, imgs.listing, 0, 0, W, ph) : placeholderPhoto(ctx, 0, 0, W, ph, s);
    // badge
    ctx.font = `800 44px ${F.body}`; ctx.letterSpacing = "6px";
    const bw = ctx.measureText(p.badge).width + 80;
    ctx.fillStyle = s.c2; rrect(ctx, 60, ph - 50, bw, 100, 12); ctx.fill();
    ctx.fillStyle = onColor(s.c2); ctx.textBaseline = "middle"; ctx.fillText(p.badge, 100, ph); ctx.letterSpacing = "0px";
    const fy = footer(ctx, W, H, s, F, true);
    const room = fy - (ph + 50);
    let y = ph + 50 + Math.max(30, (room - 260) / 2);
    y = textBlock(ctx, s.address, 60, y, W - 120, 64, { font: F.head, color: s.c1, maxLines: 2 });
    ctx.font = `500 34px ${F.body}`; ctx.fillStyle = "#55555a"; ctx.textBaseline = "top";
    const det = `${s.beds} Beds   •   ${s.baths} Baths   •   ${s.sqft} Sq Ft`;
    ctx.fillText(p.badge === "OPEN HOUSE" ? `${s.openHouse}   •   ${s.beds} bd / ${s.baths} ba` : det, 60, y + 16);
    if (p.badge !== "JUST SOLD" && p.badge !== "UNDER CONTRACT") {
      ctx.font = `800 64px ${F.body}`; ctx.fillStyle = s.c1; ctx.fillText(s.price, 60, y + 76);
    } else {
      ctx.font = `700 44px ${F.head}`; ctx.fillStyle = s.c1; ctx.fillText(p.badge === "JUST SOLD" ? "Congratulations to my clients!" : "Another one, off the market.", 60, y + 82);
    }
  },
  bold(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c1; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = hexA(s.c2, 0.5); ctx.lineWidth = 3; ctx.strokeRect(40, 40, W - 80, H - 210);
    const fy = footer(ctx, W, H, s, F, false);
    const ink = onColor(s.c1);
    const top = (fy - 40) * 0.26;
    let y = kicker(ctx, p.kicker, 100, top, s, F);
    ctx.fillStyle = s.c2; ctx.fillRect(100, y, 90, 6); y += 50;
    y = textBlock(ctx, fill(p.head, s), 100, y, W - 200, 104, { font: F.head, color: ink, maxLines: 4 });
    textBlock(ctx, fill(p.body, s), 100, y + 40, W - 220, 40, { font: F.body, weight: "400", color: hexA(ink === "#ffffff" ? "#ffffff" : "#1d1d1f", 0.85), lh: 1.4, maxLines: 4 });
  },
  tip(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c3; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = s.c1; ctx.fillRect(0, 0, 24, H);
    const fy = footer(ctx, W, H, s, F, true);
    let y = Math.max(90, (fy - 860) / 2);
    y = kicker(ctx, p.kicker, 100, y, s, F, s.c1);
    y = textBlock(ctx, fill(p.head, s), 100, y + 10, W - 200, 84, { font: F.head, color: s.c1, maxLines: 3 }) + 50;
    p.list.forEach((item, i) => {
      ctx.fillStyle = "#fff"; rrect(ctx, 100, y, W - 200, 130, 18); ctx.fill();
      ctx.fillStyle = s.c2; ctx.beginPath(); ctx.arc(170, y + 65, 38, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = onColor(s.c2); ctx.font = `800 40px ${F.body}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(String(i + 1), 170, y + 67); ctx.textAlign = "left";
      ctx.fillStyle = "#1d1d1f"; ctx.font = `600 38px ${F.body}`; ctx.fillText(item, 236, y + 67);
      y += 154;
    });
    ctx.font = `600 26px ${F.body}`; ctx.fillStyle = s.c1; ctx.textBaseline = "top";
    ctx.fillText("SAVE THIS FOR LATER  →", 100, y + 20);
  },
  stat(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c3; ctx.fillRect(0, 0, W, H);
    const fy = footer(ctx, W, H, s, F, true);
    let y = Math.max(80, (fy - 900) / 2);
    y = kicker(ctx, p.kicker, 80, y, s, F, s.c1);
    y = textBlock(ctx, `${s.city} · ${s.mMonth}`, 80, y, W - 160, 72, { font: F.head, color: s.c1, maxLines: 2 }) + 40;
    ctx.fillStyle = s.c1; rrect(ctx, 80, y, W - 160, 320, 24); ctx.fill();
    ctx.fillStyle = hexA(onColor(s.c1), 0.75); ctx.font = `600 30px ${F.body}`; ctx.textBaseline = "top";
    ctx.fillText("MEDIAN SALE PRICE", 130, y + 50);
    ctx.fillStyle = s.c2; ctx.font = `800 150px ${F.body}`; ctx.fillText(s.mMedian, 124, y + 100);
    y += 360;
    const cw = (W - 160 - 30) / 2;
    [["AVG DAYS ON MARKET", s.mDays], ["ACTIVE LISTINGS", s.mActive]].forEach(([l, v], i) => {
      const x = 80 + i * (cw + 30);
      ctx.fillStyle = "#fff"; rrect(ctx, x, y, cw, 220, 24); ctx.fill();
      ctx.fillStyle = "#6b6b70"; ctx.font = `600 24px ${F.body}`; ctx.fillText(l, x + 40, y + 44);
      ctx.fillStyle = s.c1; ctx.font = `800 88px ${F.body}`; ctx.fillText(v, x + 36, y + 90);
    });
    ctx.fillStyle = "#6b6b70"; ctx.font = `400 22px ${F.body}`;
    ctx.fillText("Source: local MLS data. DM me for your neighborhood’s numbers.", 80, y + 250);
  },
  quote(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c3; ctx.fillRect(0, 0, W, H);
    const fy = footer(ctx, W, H, s, F, true);
    let y = Math.max(90, (fy - 760) / 2);
    ctx.fillStyle = s.c2; ctx.font = `700 260px Georgia, serif`; ctx.textBaseline = "top"; ctx.fillText("“", 80, y - 40);
    y += 170;
    y = textBlock(ctx, fill(p.quote, s), 100, y, W - 200, 62, { font: F.head, weight: "400", color: s.c1, lh: 1.3, maxLines: 6 }) + 40;
    ctx.fillStyle = s.c2; ctx.font = `400 52px ${F.body}`; ctx.fillText("★★★★★", 100, y);
    ctx.fillStyle = "#1d1d1f"; ctx.font = `700 34px ${F.body}`; ctx.fillText("— " + p.who, 100, y + 80);
  },
  myth(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c3; ctx.fillRect(0, 0, W, H);
    const fy = footer(ctx, W, H, s, F, true);
    let y = Math.max(70, (fy - 980) / 2);
    y = textBlock(ctx, p.head, 80, y, W - 160, 92, { font: F.head, color: s.c1, maxLines: 1 }) + 40;
    const box = (label, text, bg, ink, by) => {
      ctx.fillStyle = bg; rrect(ctx, 80, by, W - 160, 380, 24); ctx.fill();
      ctx.font = `800 30px ${F.body}`; ctx.fillStyle = ink === "#ffffff" ? s.c2 : s.c1; ctx.letterSpacing = "5px";
      ctx.textBaseline = "top"; ctx.fillText(label, 130, by + 50); ctx.letterSpacing = "0px";
      textBlock(ctx, fill(text, s), 130, by + 110, W - 260, 52, { font: F.head, weight: "600", color: ink, lh: 1.25, maxLines: 4 });
    };
    box("✕  MYTH", p.myth, "#ffffff", "#1d1d1f", y);
    box("✓  FACT", p.fact, s.c1, onColor(s.c1), y + 410);
  },
  agent(ctx, W, H, p, s, F) {
    ctx.fillStyle = s.c1; ctx.fillRect(0, 0, W, H);
    const fy = footer(ctx, W, H, s, F, false);
    const ink = onColor(s.c1);
    let y = Math.max(80, (fy - 900) / 2);
    const r = 170, cx = W / 2;
    ctx.fillStyle = s.c2; ctx.beginPath(); ctx.arc(cx, y + r, r + 10, 0, Math.PI * 2); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(cx, y + r, r, 0, Math.PI * 2); ctx.clip();
    if (imgs.headshot) cover(ctx, imgs.headshot, cx - r, y, r * 2, r * 2);
    else { ctx.fillStyle = shade(s.c1, -0.25); ctx.fillRect(cx - r, y, r * 2, r * 2);
      ctx.fillStyle = hexA(ink, 0.9); ctx.font = `700 120px ${F.head}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(s.agentName.split(" ").map(w => w[0]).join("").slice(0, 2), cx, y + r + 6); ctx.textAlign = "left"; }
    ctx.restore();
    y += r * 2 + 60;
    ctx.font = `700 26px ${F.body}`; ctx.fillStyle = s.c2; ctx.textAlign = "center"; ctx.textBaseline = "top";
    ctx.letterSpacing = "4px"; ctx.fillText(p.kicker, cx, y); ctx.letterSpacing = "0px"; ctx.textAlign = "left";
    y = textBlock(ctx, fill(p.head, s), 90, y + 56, W - 180, 76, { font: F.head, color: ink, maxLines: 3, align: "center" });
    textBlock(ctx, fill(p.body, s), 120, y + 30, W - 240, 36, { font: F.body, weight: "400", color: hexA(ink, 0.85), lh: 1.4, maxLines: 4, align: "center" });
  }
};

function render(canvas, p, s) {
  const [W, H] = SIZES[s.format];
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  LAYOUTS[p.layout](ctx, W, H, p, s, fonts(s));
}

// ---------- UI ----------
const grid = $("grid"); const canvases = [];
POSTS.forEach((p, i) => {
  const card = document.createElement("div"); card.className = "card";
  const c = document.createElement("canvas"); canvases.push(c);
  card.innerHTML = `<div class="meta"><strong>Day ${p.day} · ${p.title}</strong><span>${p.layout === "photo" ? "Uses listing photo" : "Brand post"}</span></div>`;
  card.prepend(c);
  const actions = document.createElement("div"); actions.className = "actions";
  const dl = document.createElement("button"); dl.className = "btn"; dl.textContent = "Download";
  dl.onclick = () => download(c, p);
  const cp = document.createElement("button"); cp.className = "btn ghost"; cp.textContent = "Caption";
  cp.onclick = () => copyText(caption(p, S()));
  actions.append(dl, cp); card.append(actions); grid.append(card);
});
function drawAll() { const s = S(); POSTS.forEach((p, i) => render(canvases[i], p, s)); save(); }
function fileName(p) { return `day-${String(p.day).padStart(2, "0")}-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`; }
function download(c, p) {
  return new Promise(res => c.toBlob(b => {
    const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = fileName(p); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); res(); }, 300);
  }, "image/png"));
}
async function copyText(t) {
  try { await navigator.clipboard.writeText(t); toast("Caption copied"); }
  catch (e) { prompt("Copy your caption:", t); }
}
function toast(m) { const t = $("toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1600); }
$("dlAll").onclick = async () => { for (let i = 0; i < POSTS.length; i++) await download(canvases[i], POSTS[i]); toast("30 posts downloaded"); };
$("dlCaptions").onclick = () => {
  const s = S();
  const txt = POSTS.map(p => `DAY ${p.day} — ${p.title.toUpperCase()}\n${caption(p, s)}\n`).join("\n------------------------------\n\n");
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
  a.download = "30-day-captions.txt"; a.click();
};
THEMES.forEach(t => {
  const b = document.createElement("button"); b.style.background = `linear-gradient(135deg, ${t[0]} 55%, ${t[1]} 55%)`;
  b.title = "Apply theme"; b.onclick = () => { $("c1").value = t[0]; $("c2").value = t[1]; $("c3").value = t[2]; drawAll(); };
  $("themes").append(b);
});
function loadImg(input, key) {
  input.onchange = () => {
    const f = input.files[0]; if (!f) return;
    const img = new Image(); img.onload = () => { imgs[key] = img; drawAll(); }; img.src = URL.createObjectURL(f);
  };
}
loadImg($("headshot"), "headshot"); loadImg($("listing"), "listing");
ids.forEach(k => $(k).addEventListener("input", drawAll));
document.fonts && document.fonts.ready ? document.fonts.ready.then(drawAll) : drawAll();
drawAll();
// Hooks for automated preview rendering
window.__rps = { POSTS, canvases, drawAll, imgs, S, caption };
</script>
</body>
</html>
```

## `tools/render-samples.js`

```javascript
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
```

## `tools/make-listing-images.py`

```python
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
```

