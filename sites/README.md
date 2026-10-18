# Central Mississippi lead-gen sites

| Folder | What it is | Lead type |
|---|---|---|
| `sell-house/` | Seller-facing "we buy houses" site with a cash-offer form | `seller` |
| `inherited-house/` | Educational guide for people who inherited a house, with a 7-question "free plan" quiz | `inherited` |
| `lead-capture/Code.gs` | Free Google Sheet + email alert that receives leads from both sites | — |

Each site is a single static `index.html` (plus `privacy.html`), so it can be hosted for free on
Netlify, Cloudflare Pages, or GitHub Pages and pointed at its own domain.

## Before going live

1. **Edit the `CONFIG` block** at the bottom of each `index.html`: company name, phone, email.
   The defaults ("Central MS House Buyers", 601-555-0100) are placeholders. Check the name isn't
   already used by another Mississippi business before you adopt it.
2. **Set up lead capture**: follow the steps at the top of `lead-capture/Code.gs`, then paste the
   web-app URL into `CONFIG.leadEndpoint` in both sites. Until then the forms run in demo mode
   and send nothing.
3. **Fill in `privacy.html`** (both copies) with your legal name, address and contact info.
4. **Check the promises in the copy are true for you**: "we pay normal closing costs", "close in as
   little as 14 days", "offer within 24–48 hours".
5. **Legal review**: have a Mississippi real estate attorney review how you buy and assign contracts
   (wholesaling rules vary by state and change often), the text-message consent language (TCPA),
   and the inherited-site guidance.
6. **Tracking**: add Google Analytics / Google Ads tags to `<head>` and set `CONFIG.adsConversion`
   so form submissions count as conversions. Every lead row already records UTM parameters and
   `gclid`, so you can see which ad or site produced it.

## Deploy (Netlify, simplest)

Drag the `sell-house` folder onto app.netlify.com/drop, then add your domain under
Domain settings. Repeat with `inherited-house` for its own domain.
