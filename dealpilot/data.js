/* DealPilot — prototype fixtures.
   Illustrative sample data for the prototype. Not real customer records. */

const TODAY = '2026-11-10';
const QUARTER = { label: 'FY27 Q1', start: '2026-11-01', end: '2027-01-31', quota: 3200000, booked: 410000 };

const STAGES = [
  { id: 'qualify',  name: 'Qualify',   gate: 'Pain + budget owner named',      days: 21, weight: 0.10 },
  { id: 'discover', name: 'Discover',  gate: 'Metrics agreed in writing',      days: 28, weight: 0.25 },
  { id: 'validate', name: 'Validate',  gate: 'Security + technical sign-off',  days: 35, weight: 0.45 },
  { id: 'propose',  name: 'Propose',   gate: 'Business case with EB',          days: 21, weight: 0.65 },
  { id: 'negotiate',name: 'Negotiate', gate: 'Redlines returned',              days: 18, weight: 0.80 },
  { id: 'contract', name: 'Contract',  gate: 'Signature routed',               days: 10, weight: 0.92 }
];

/* MEDDPICC pillars, in the order a deal review walks them */
const PILLARS = [
  ['metrics',       'Metrics'],
  ['econBuyer',     'Economic buyer'],
  ['criteria',      'Decision criteria'],
  ['process',       'Decision process'],
  ['paper',         'Paper process'],
  ['pain',          'Identified pain'],
  ['champion',      'Champion'],
  ['competition',   'Competition']
];

const DEALS = [
  {
    id: 'northwind', co: 'Northwind Logistics', seg: 'Enterprise', industry: 'Freight & 3PL',
    acv: 420000, stage: 'negotiate', close: '2027-01-28', owner: 'R. Okafor',
    created: '2026-06-12', stageSince: '2026-10-14', lastTouch: '2026-11-06', slips: 1,
    competitor: 'In-house build', call: 'commit',
    mdp: { metrics:2, econBuyer:2, criteria:2, process:1, paper:0, pain:2, champion:2, competition:1 },
    people: [
      { n: 'Dana Whitfield', t: 'VP Operations', role: 'Champion', eng: 'high' },
      { n: 'Ezra Baptiste',  t: 'CFO',           role: 'Economic buyer', eng: 'medium' },
      { n: 'Priya Raval',    t: 'Dir. IT Security', role: 'Technical', eng: 'high' },
      { n: 'Tom Hallbeck',   t: 'Dir. Network Eng.', role: 'Blocker', eng: 'low' }
    ],
    timeline: [
      { d: '2026-11-06', k: 'win',  t: 'Security review passed', s: 'Priya signed off on SOC 2 and the data-residency addendum.' },
      { d: '2026-10-31', k: 'risk', t: 'Legal has not confirmed paper process', s: 'Procurement named no counsel. Third ask unanswered.' },
      { d: '2026-10-22', k: 'note', t: 'Pricing walked with CFO', s: 'Ezra pushed for 3-year term at 2-year pricing.' },
      { d: '2026-10-14', k: 'note', t: 'Moved to Negotiate', s: 'Redlines requested on MSA §7 and §11.' }
    ],
    risks: [
      { sev: 'high', t: 'Paper process undefined 11 weeks from close', d: 'No counsel named, no signature path, no procurement SLA on file. Two of our last three slipped quarters started here.', play: 'Ask Dana for the signatory name and counsel contact on tomorrow’s call. Offer our MSA as the base paper to skip their intake queue.' },
      { sev: 'med',  t: 'Network engineering is dissenting', d: 'Tom has not attended the last four calls and raised latency objections in writing on 10/18.', play: 'Run a 30-minute latency benchmark session with Tom before the business case is final.' }
    ]
  },
  {
    id: 'corvid', co: 'Corvid Financial', seg: 'Enterprise', industry: 'Commercial banking',
    acv: 880000, stage: 'propose', close: '2027-01-15', owner: 'M. Ferreira',
    created: '2026-05-04', stageSince: '2026-10-02', lastTouch: '2026-10-21', slips: 2,
    competitor: 'Fenwick Systems', call: 'best',
    mdp: { metrics:2, econBuyer:1, criteria:2, process:1, paper:1, pain:2, champion:0, competition:1 },
    people: [
      { n: 'Alan Qureshi',  t: 'Head of Risk Ops', role: 'Sponsor', eng: 'medium' },
      { n: 'Renata Sol',    t: 'COO',              role: 'Economic buyer', eng: 'low' },
      { n: 'Devon Marsh',   t: 'Enterprise Architect', role: 'Technical', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-10-21', k: 'risk', t: 'Champion left the company', s: 'Marcy Pell (VP Risk) departed. Alan inherited the evaluation.' },
      { d: '2026-10-02', k: 'note', t: 'Business case drafted', s: 'Built on Marcy’s numbers; unratified by Alan.' },
      { d: '2026-09-18', k: 'win',  t: 'Beat Fenwick on data lineage', s: 'Architecture review scored us 4 of 5 criteria.' }
    ],
    risks: [
      { sev: 'high', t: 'Champion departed 20 days ago; no replacement earned', d: 'The business case rests on a sponsor who has not restated the metrics himself. Deal has already slipped two quarters.', play: 'Re-run discovery with Alan from scratch this week. Do not re-present the old deck — have him state the cost of the status quo in his own numbers first.' },
      { sev: 'high', t: 'Economic buyer has never been in a room with us', d: 'Renata has declined two invitations. Every figure reaching her is filtered through two layers.', play: 'Trade the January close date for a 20-minute COO session. A deal this size does not sign without her voice on it.' },
      { sev: 'med',  t: '21 days since last contact', d: 'Longest silence of any open Enterprise deal in the quarter.', play: 'Send the lineage benchmark Devon asked for as a reason to re-open the thread.' }
    ]
  },
  {
    id: 'halden', co: 'Halden Biosciences', seg: 'Enterprise', industry: 'Life sciences',
    acv: 615000, stage: 'validate', close: '2027-01-29', owner: 'S. Lindqvist',
    created: '2026-07-30', stageSince: '2026-09-25', lastTouch: '2026-11-08', slips: 0,
    competitor: 'Fenwick Systems', call: 'best',
    mdp: { metrics:2, econBuyer:2, criteria:1, process:2, paper:1, pain:2, champion:2, competition:1 },
    people: [
      { n: 'Ingrid Møller', t: 'Head of Lab Informatics', role: 'Champion', eng: 'high' },
      { n: 'Charles Ogun',  t: 'CIO',                     role: 'Economic buyer', eng: 'medium' },
      { n: 'Lena Park',     t: 'QA Director',             role: 'Technical', eng: 'high' },
      { n: 'Hugo Blanc',    t: 'Validation Lead',         role: 'Technical', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-11-08', k: 'note', t: 'GxP validation plan received', s: 'Hugo scoped IQ/OQ/PQ at six weeks.' },
      { d: '2026-11-02', k: 'win',  t: 'CIO endorsed the architecture', s: 'Charles asked for a 3-year roadmap, not a pilot.' },
      { d: '2026-10-19', k: 'risk', t: 'Criteria still unwritten', s: 'Scoring rubric promised twice, never sent.' }
    ],
    risks: [
      { sev: 'med', t: 'Six-week validation plan lands after the close date', d: 'IQ/OQ/PQ starting in December finishes mid-February. The January 29 date assumes validation runs in parallel with contracting.', play: 'Split the order: licence signature in January, validation as a separate SOW. Confirm with Charles that his CIO budget allows the split.' },
      { sev: 'med', t: 'Decision criteria never put in writing', d: 'We are selling against Fenwick on criteria we inferred rather than criteria Halden published.', play: 'Send our own written rubric and ask Ingrid to correct it. A correction is easier to get than a document.' }
    ]
  },
  {
    id: 'castellan', co: 'Castellan Insurance', seg: 'Enterprise', industry: 'P&C insurance',
    acv: 730000, stage: 'contract', close: '2026-11-28', owner: 'R. Okafor',
    created: '2026-04-18', stageSince: '2026-11-04', lastTouch: '2026-11-09', slips: 0,
    competitor: 'None named', call: 'commit',
    mdp: { metrics:2, econBuyer:2, criteria:2, process:2, paper:2, pain:2, champion:2, competition:2 },
    people: [
      { n: 'Beatrix Lowe', t: 'Chief Claims Officer', role: 'Economic buyer', eng: 'high' },
      { n: 'Samir Haidar', t: 'Dir. Claims Platform', role: 'Champion', eng: 'high' },
      { n: 'Nora Tveit',   t: 'Deputy GC',            role: 'Legal', eng: 'high' }
    ],
    timeline: [
      { d: '2026-11-09', k: 'win',  t: 'Signature routed to Beatrix', s: 'DocuSign envelope out; two of three signatures in.' },
      { d: '2026-11-04', k: 'win',  t: 'Redlines closed', s: 'Nora accepted our indemnity cap at 2x fees.' },
      { d: '2026-10-20', k: 'note', t: 'Order form final', s: '730k ACV, 3-year term, Q1 start.' }
    ],
    risks: [
      { sev: 'low', t: 'Single-signature dependency', d: 'Beatrix travels 11/18–11/25. One unavailable week sits inside the close window.', play: 'Get the envelope signed before 11/17 or pre-authorise a delegate.' }
    ]
  },
  {
    id: 'tessellate', co: 'Tessellate Retail Group', seg: 'Mid-market', industry: 'Specialty retail',
    acv: 185000, stage: 'negotiate', close: '2026-12-18', owner: 'J. Adeyemi',
    created: '2026-08-21', stageSince: '2026-10-28', lastTouch: '2026-11-07', slips: 0,
    competitor: 'Fenwick Systems', call: 'commit',
    mdp: { metrics:2, econBuyer:2, criteria:2, process:2, paper:1, pain:1, champion:2, competition:0 },
    people: [
      { n: 'Camille Rhodes', t: 'VP Merchandising', role: 'Champion', eng: 'high' },
      { n: 'Peter Vance',    t: 'CFO',              role: 'Economic buyer', eng: 'medium' },
      { n: 'Ash Delacroix',  t: 'Procurement Mgr',  role: 'Procurement', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-11-07', k: 'risk', t: 'Fenwick re-entered with 30% discount', s: 'Ash disclosed a competing quote at 129k.' },
      { d: '2026-10-28', k: 'note', t: 'Redlines returned', s: 'Only change requested: 30-day termination for convenience.' },
      { d: '2026-10-09', k: 'win',  t: 'Pilot hit the agreed metric', s: 'Markdown accuracy up 14% against a 10% target.' }
    ],
    risks: [
      { sev: 'high', t: 'Undercut by 30% with no differentiation on file', d: 'Competition is our weakest pillar here and procurement is now running a price comparison we have not framed.', play: 'Convert the pilot result into a per-store margin figure and put it in front of Peter before procurement normalises the two quotes on price alone.' },
      { sev: 'low',  t: 'Termination-for-convenience clause open', d: 'A 30-day out at this ACV makes the booking fragile but not unacceptable.', play: 'Trade the 30-day out for annual prepay.' }
    ]
  },
  {
    id: 'pike', co: 'Pike & Marlow', seg: 'Mid-market', industry: 'Legal services',
    acv: 96000, stage: 'propose', close: '2026-12-05', owner: 'J. Adeyemi',
    created: '2026-09-02', stageSince: '2026-10-25', lastTouch: '2026-11-05', slips: 0,
    competitor: 'Status quo', call: 'best',
    mdp: { metrics:1, econBuyer:2, criteria:2, process:1, paper:2, pain:2, champion:1, competition:2 },
    people: [
      { n: 'Harriet Nkemo', t: 'Managing Partner', role: 'Economic buyer', eng: 'high' },
      { n: 'Felix Dorn',    t: 'Practice Manager', role: 'Champion', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-11-05', k: 'note', t: 'Proposal sent', s: '96k, 2-year, 40 seats.' },
      { d: '2026-10-25', k: 'win',  t: 'Managing partner took the meeting', s: 'Harriet controls the budget directly — no committee.' }
    ],
    risks: [
      { sev: 'med', t: 'No quantified metric behind the proposal', d: 'Partners agreed the pain but never a number. Renewal conversations without a baseline tend to reopen pricing.', play: 'Set a billable-hour recovery baseline with Felix this week so the proposal has something to be measured against.' }
    ]
  },
  {
    id: 'sundial', co: 'Sundial Hospitality', seg: 'Mid-market', industry: 'Hotels & resorts',
    acv: 140000, stage: 'validate', close: '2027-01-22', owner: 'M. Ferreira',
    created: '2026-09-15', stageSince: '2026-10-30', lastTouch: '2026-11-03', slips: 0,
    competitor: 'Fenwick Systems', call: 'pipeline',
    mdp: { metrics:1, econBuyer:0, criteria:1, process:0, paper:0, pain:2, champion:1, competition:1 },
    people: [
      { n: 'Ruth Okonjo', t: 'Dir. Revenue Mgmt', role: 'Sponsor', eng: 'medium' },
      { n: 'Luca Benetti', t: 'IT Manager',       role: 'Technical', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-11-03', k: 'note', t: 'Sandbox provisioned', s: 'Luca connected two properties.' },
      { d: '2026-10-30', k: 'risk', t: 'Budget owner still unknown', s: 'Ruth says "corporate decides" — no name given.' }
    ],
    risks: [
      { sev: 'high', t: 'No economic buyer identified at any point', d: 'Four pillars sit at zero. A January close is not supportable on a sponsor who cannot name the budget holder.', play: 'Stop technical work until Ruth introduces the corporate budget owner. Re-date to FY27 Q2 in the forecast.' }
    ]
  },
  {
    id: 'orbit', co: 'Orbit Health Partners', seg: 'Enterprise', industry: 'Provider network',
    acv: 540000, stage: 'discover', close: '2027-03-31', owner: 'S. Lindqvist',
    created: '2026-10-06', stageSince: '2026-10-20', lastTouch: '2026-11-07', slips: 0,
    competitor: 'Unknown', call: 'pipeline',
    mdp: { metrics:1, econBuyer:1, criteria:0, process:0, paper:0, pain:2, champion:1, competition:0 },
    people: [
      { n: 'Dr. Aisha Bello', t: 'Chief Medical Informatics Officer', role: 'Sponsor', eng: 'high' },
      { n: 'Grant Wylie',     t: 'VP Finance', role: 'Economic buyer', eng: 'low' }
    ],
    timeline: [
      { d: '2026-11-07', k: 'win', t: 'CMIO framed the clinical pain', s: 'Aisha quantified 9 minutes per encounter lost to reconciliation.' },
      { d: '2026-10-20', k: 'note', t: 'Moved to Discover', s: 'Scoping two of eleven sites.' }
    ],
    risks: [
      { sev: 'med', t: 'Out-of-quarter deal being worked at in-quarter pace', d: 'March close, healthy sponsor, but three pillars at zero. The risk is effort allocation, not loss.', play: 'Hold it in Discover. Spend the hours on Corvid and Tessellate this quarter.' }
    ]
  },
  {
    id: 'verrill', co: 'Verrill Energy', seg: 'Enterprise', industry: 'Regulated utility',
    acv: 1250000, stage: 'qualify', close: '2027-04-30', owner: 'R. Okafor',
    created: '2026-10-28', stageSince: '2026-10-28', lastTouch: '2026-11-04', slips: 0,
    competitor: 'Unknown', call: 'pipeline',
    mdp: { metrics:0, econBuyer:1, criteria:0, process:0, paper:0, pain:1, champion:0, competition:0 },
    people: [
      { n: 'Oliver Trask', t: 'Dir. Grid Analytics', role: 'Contact', eng: 'medium' }
    ],
    timeline: [
      { d: '2026-11-04', k: 'note', t: 'Discovery call held', s: 'Oliver described a 2028 regulatory filing deadline.' },
      { d: '2026-10-28', k: 'note', t: 'Inbound from the FERC webinar', s: 'Requested pricing for 14 substations.' }
    ],
    risks: [
      { sev: 'low', t: 'Largest open ACV, thinnest qualification', d: 'A 1.25M figure built from a seat count on a first call. Treat the number as unvalidated.', play: 'Do not forecast it. Qualify the 2028 filing deadline as the real buying event before building any case.' }
    ]
  }
];
