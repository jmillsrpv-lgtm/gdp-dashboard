/**
 * Free lead inbox: every form submission from both sites becomes a row in a Google Sheet,
 * and you get an email alert for each new lead.
 *
 * Setup (5 minutes):
 *  1. Create a new Google Sheet. Extensions → Apps Script. Paste this file in, then Save.
 *  2. Set ALERT_EMAIL below.
 *  3. Deploy → New deployment → type "Web app". Execute as: Me. Who has access: Anyone.
 *  4. Copy the Web app URL into CONFIG.leadEndpoint in both index.html files.
 */
const ALERT_EMAIL = "you@example.com";
const COMPANY_NAME = "Central MS House Buyers";
const COMPANY_PHONE = "(601) 555-0100";

const COLUMNS = [
  "submitted_at", "lead_type", "name", "phone", "email",
  "property_address", "city", "zip", "property_location",
  "condition", "timeline", "relationship", "will_status", "probate_status", "heirs", "goal",
  "contact_consent", "source_site", "landing_page", "referrer",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "plan"
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = e.parameter || {};
    const sheet = getSheet_(p.lead_type === "inherited" ? "Inherited" : "Sellers");
    sheet.appendRow(COLUMNS.map(c => p[c] || ""));
    if (ALERT_EMAIL && ALERT_EMAIL !== "you@example.com") {
      const subject = `New ${p.lead_type || "seller"} lead: ${p.name || "(no name)"} – ${p.property_address || p.property_location || p.city || ""}`;
      const body = COLUMNS.filter(c => p[c]).map(c => `${c}: ${p[c]}`).join("\n");
      MailApp.sendEmail(ALERT_EMAIL, subject, body);
    }
    if (p.lead_type === "inherited" && p.email && p.plan) sendPlan_(p);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function getSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Emails the inherited-house lead the personalized plan the quiz promised them.
function sendPlan_(p) {
  const body = [
    `Hi ${p.name || "there"},`,
    "",
    "Thanks for using the Mississippi Inherited Home Guide. Based on your answers, here are your next steps:",
    "",
    p.plan,
    "",
    "Every estate is different, so it's worth a consultation with a Mississippi probate attorney and a CPA.",
    `If you'd like help understanding what the house is worth or what your options are, call or text us at ${COMPANY_PHONE}.`,
    "",
    COMPANY_NAME,
    "",
    "This guide is operated by a real estate investment company. It is not legal, tax, or financial advice.",
    "Reply STOP to stop receiving emails from us."
  ].join("\n");
  MailApp.sendEmail(p.email, "Your inherited house: next-steps plan", body, { name: COMPANY_NAME, replyTo: ALERT_EMAIL });
}
