/* DealPilot — prototype application logic.
   Health scores, forecast categories and risk ranking are all derived here from
   the fixtures in data.js, so the numbers on screen stay consistent with the data. */
(function () {
  'use strict';

  /* ---------- helpers ---------- */
  const day = 864e5;
  const d = (s) => new Date(s + 'T00:00:00Z');
  const now = d(TODAY);
  const daysSince = (s) => Math.round((now - d(s)) / day);
  const daysUntil = (s) => Math.round((d(s) - now) / day);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const money = (n) => n >= 1e6 ? '$' + (n / 1e6).toFixed(2) + 'M' : '$' + Math.round(n / 1e3) + 'k';
  const exact = (n) => '$' + n.toLocaleString('en-US');
  const fmtDate = (s) => d(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  const fmtFull = (s) => d(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  const stageOf = (id) => STAGES.find((s) => s.id === id);
  const initials = (n) => n.replace(/^Dr\.\s*/, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join('');
  const inQuarter = (deal) => deal.close <= QUARTER.end;

  /* ---------- derived model ---------- */

  // Health: qualification 45, engagement recency 20, multithreading 20, stage velocity 15, slip penalty.
  function health(deal) {
    const parts = {};
    const mdpSum = PILLARS.reduce((t, [k]) => t + deal.mdp[k], 0);
    parts.qualification = Math.round((mdpSum / 16) * 45);

    const quiet = daysSince(deal.lastTouch);
    parts.engagement = quiet <= 7 ? 20 : quiet <= 14 ? 14 : quiet <= 21 ? 8 : 2;

    const active = deal.people.filter((p) => p.eng !== 'low').length;
    const eb = deal.people.find((p) => p.role === 'Economic buyer');
    parts.multithread = Math.round(Math.min(active, 4) / 4 * 12) + (eb && eb.eng !== 'low' ? 8 : 0);

    const ratio = daysSince(deal.stageSince) / stageOf(deal.stage).days;
    parts.velocity = ratio <= 1 ? 15 : ratio <= 1.5 ? 9 : ratio <= 2 ? 4 : 0;

    parts.slip = -6 * deal.slips;
    const score = Math.max(0, Math.min(100, Object.values(parts).reduce((a, b) => a + b, 0)));
    return { score, parts, quiet, stageDays: daysSince(deal.stageSince), active, eb };
  }

  const band = (score) => score >= 75 ? 'good' : score >= 50 ? 'warn' : 'crit';
  const bandWord = (score) => score >= 75 ? 'On track' : score >= 50 ? 'Watch' : 'At risk';

  // What the model would call, independent of what the rep called.
  function modelCall(deal, h) {
    if (!inQuarter(deal)) return 'out';
    const blocked = deal.risks.some((r) => r.sev === 'high');
    const ebAccess = h.eb && h.eb.eng !== 'low';
    const weight = stageOf(deal.stage).weight;
    // Commit requires a clean board: no blocking risk, and a buyer we can reach.
    if (!blocked && ebAccess && (weight >= 0.75 || deal.stage === 'contract') && h.score >= 70) return 'commit';
    // Upside still needs economic-buyer access; without it the deal is unforecastable.
    if (ebAccess && h.score >= 55 && weight >= 0.45) return 'best';
    return 'pipeline';
  }

  const MODEL = DEALS.map((deal) => {
    const h = health(deal);
    return { deal, h, model: modelCall(deal, h) };
  });
  const byId = (id) => MODEL.find((m) => m.deal.id === id);

  const openDeals = MODEL;
  const quarterDeals = MODEL.filter((m) => inQuarter(m.deal));
  const sum = (arr) => arr.reduce((t, m) => t + m.deal.acv, 0);

  const FC = {
    booked: QUARTER.booked,
    commit: sum(quarterDeals.filter((m) => m.deal.call === 'commit')),
    best: sum(quarterDeals.filter((m) => m.deal.call === 'best')),
    pipe: sum(quarterDeals.filter((m) => m.deal.call === 'pipeline')),
    weighted: Math.round(quarterDeals.reduce((t, m) => t + m.deal.acv * stageOf(m.deal.stage).weight, 0)),
    mCommit: sum(quarterDeals.filter((m) => m.model === 'commit')),
    mBest: sum(quarterDeals.filter((m) => m.model === 'best'))
  };
  FC.repCommit = FC.booked + FC.commit;
  FC.repBest = FC.repCommit + FC.best;
  FC.allIn = FC.repBest + FC.pipe;
  FC.modelCommit = FC.booked + FC.mCommit;
  FC.gap = QUARTER.quota - FC.repCommit;
  FC.coverage = (FC.allIn - FC.booked) / Math.max(1, QUARTER.quota - FC.booked);

  const DISAGREE = quarterDeals.filter((m) => m.deal.call !== m.model);

  const SIGNALS = MODEL.flatMap((m) => m.deal.risks.map((r) => ({ ...r, m })))
    .sort((a, b) => {
      const rank = { high: 0, med: 1, low: 2 };
      return rank[a.sev] - rank[b.sev] || b.m.deal.acv - a.m.deal.acv;
    });
  const highCount = SIGNALS.filter((s) => s.sev === 'high').length;

  /* ---------- components ---------- */

  function dial(score, big) {
    const r = big ? 27 : 16, c = 2 * Math.PI * r, w = big ? 5 : 3.5, size = big ? 64 : 38;
    return `<div class="dial${big ? ' dial-lg' : ''}" role="img" aria-label="Health ${score} of 100, ${bandWord(score)}">
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="${w}"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--${band(score)})" stroke-width="${w}"
          stroke-linecap="round" stroke-dasharray="${(c * score / 100).toFixed(1)} ${c.toFixed(1)}"/>
      </svg><div class="dial-num">${score}</div></div>`;
  }

  function dealCard(m, selected) {
    const { deal, h } = m;
    const sev = deal.risks.filter((r) => r.sev === 'high').length;
    const chips = [];
    if (sev) chips.push(`<span class="chip chip-crit">${sev} blocking risk${sev > 1 ? 's' : ''}</span>`);
    if (h.quiet > 14) chips.push(`<span class="chip chip-warn">${h.quiet}d quiet</span>`);
    if (deal.slips) chips.push(`<span class="chip chip-warn">slipped ${deal.slips}Q</span>`);
    if (!h.eb || h.eb.eng === 'low') chips.push(`<span class="chip chip-warn">no EB access</span>`);
    if (!chips.length) chips.push(`<span class="chip chip-good">clear</span>`);
    chips.length = Math.min(chips.length, 3);
    chips.push(`<span class="chip chip-flat">${esc(deal.owner)}</span>`);
    return `<button class="deal" style="--band: var(--${band(h.score)})" data-deal="${deal.id}"
      aria-selected="${selected ? 'true' : 'false'}">
      <div class="deal-top">
        <div style="min-width:0;flex:1">
          <div class="deal-co">${esc(deal.co)}</div>
          <div class="deal-meta">${esc(deal.seg)} &middot; ${esc(deal.industry)}</div>
        </div>${dial(h.score)}
      </div>
      <div class="deal-figs">
        <span class="deal-acv">${money(deal.acv)}</span>
        <span class="deal-close">${fmtDate(deal.close)}${inQuarter(deal) ? '' : ' &middot; next Q'}</span>
      </div>
      <div class="chips">${chips.join('')}</div></button>`;
  }

  function pillars(deal) {
    return PILLARS.map(([k, label]) => {
      const v = deal.mdp[k];
      const cls = v === 2 ? 'on' : v === 1 ? 'part' : '';
      const word = v === 2 ? 'Strong' : v === 1 ? 'Partial' : 'Gap';
      const color = v === 2 ? 'var(--good)' : v === 1 ? 'var(--warn)' : 'var(--crit)';
      return `<div class="pillar"><span class="pillar-name">${label}</span>
        <span style="display:flex;align-items:center;gap:9px">
          <span class="pips">${[0, 1].map((i) => `<i class="pip ${i < v ? cls : ''}"></i>`).join('')}</span>
          <span class="pillar-tag" style="color:${color}">${word}</span>
        </span></div>`;
    }).join('');
  }

  function signalBlock(r, withDeal) {
    return `<div class="signal">
      <div class="signal-top"><span class="sev sev-${r.sev}">${r.sev}</span><h4>${esc(r.t)}</h4></div>
      ${withDeal ? `<p><button class="rowlink" data-deal="${r.m.deal.id}">${esc(r.m.deal.co)}</button>
        <span style="color:var(--fg-dim)"> &middot; ${money(r.m.deal.acv)} &middot; ${esc(stageOf(r.m.deal.stage).name)} &middot; closes ${fmtDate(r.m.deal.close)}</span></p>` : ''}
      <p>${esc(r.d)}</p>
      <div class="play"><span>Recommended play</span><p>${esc(r.play)}</p></div></div>`;
  }

  /* ---------- views ---------- */

  function viewPipeline() {
    const cols = STAGES.map((s) => {
      const items = MODEL.filter((m) => m.deal.stage === s.id)
        .sort((a, b) => b.deal.acv - a.deal.acv);
      const total = sum(items);
      const share = total / Math.max(1, sum(MODEL));
      return `<div class="col"><div class="col-head">
          <div class="col-title"><h3>${s.name}</h3><span class="num">${items.length} &middot; ${money(total)}</span></div>
          <div class="col-bar"><i style="width:${Math.max(3, share * 100).toFixed(0)}%"></i></div>
          <div class="col-gate">Gate: ${esc(s.gate)}</div>
        </div>${items.map((m) => dealCard(m, false)).join('') || '<p class="empty">No deals</p>'}</div>`;
    }).join('');

    return `<div class="view-head"><h1>Pipeline</h1>
        <p>${MODEL.length} open deals, ${money(sum(MODEL))} total. Health is scored from qualification depth,
        contact recency, buying-group coverage and time in stage. Select a deal to open it.</p></div>
      <div class="board">${cols}</div>
      <div class="card"><div class="card-head"><h2>Where the forecast and the reps disagree</h2>
        <span class="eyebrow">${DISAGREE.length} of ${quarterDeals.length} in-quarter deals</span></div>
        <div class="card-body">${DISAGREE.length ? `<div class="table-wrap"><table class="grid">
          <tr><th>Deal</th><th>Stage</th><th>ACV</th><th>Rep call</th><th>Model call</th><th>Why</th></tr>
          ${DISAGREE.map((m) => `<tr>
            <td><button class="rowlink" data-deal="${m.deal.id}">${esc(m.deal.co)}</button></td>
            <td>${esc(stageOf(m.deal.stage).name)}</td>
            <td class="num">${money(m.deal.acv)}</td>
            <td style="text-transform:capitalize">${esc(m.deal.call)}</td>
            <td style="text-transform:capitalize;font-weight:600;color:var(--${m.model === 'commit' ? 'good' : m.model === 'best' ? 'accent' : 'warn'})">${esc(m.model)}</td>
            <td style="color:var(--fg-mid)">${esc(reason(m))}</td></tr>`).join('')}
        </table></div>` : '<p class="empty">Every in-quarter call matches the model.</p>'}</div></div>`;
  }

  function reason(m) {
    const h = m.h, bits = [];
    const blocking = m.deal.risks.filter((r) => r.sev === 'high').length;
    if (blocking) bits.push(blocking + ' blocking risk' + (blocking > 1 ? 's' : '') + ' open');
    if (!h.eb || h.eb.eng === 'low') bits.push('no economic-buyer access');
    if (h.quiet > 14) bits.push(h.quiet + ' days quiet');
    if (m.deal.mdp.paper === 0) bits.push('paper process undefined');
    if (h.parts.qualification < 28) bits.push('qualification thin');
    if (h.parts.velocity < 9) bits.push('stalled in stage');
    return bits.slice(0, 2).join(', ') || 'health ' + h.score;
  }

  function viewDeal(id) {
    const m = byId(id) || MODEL[0];
    const { deal, h } = m;
    const st = stageOf(deal.stage);
    const facts = [
      ['ACV', exact(deal.acv)],
      ['Stage', st.name + ' · day ' + h.stageDays + ', benchmark ' + st.days],
      ['Close', fmtFull(deal.close) + ' · ' + daysUntil(deal.close) + 'd'],
      ['Owner', deal.owner],
      ['Last touch', h.quiet + ' days ago'],
      ['Competitor', deal.competitor]
    ].map(([k, v]) => `<div class="fact"><span class="eyebrow">${k}</span><span class="fact-val">${esc(v)}</span></div>`).join('');

    const breakdown = [
      ['Qualification', h.parts.qualification, 45],
      ['Engagement', h.parts.engagement, 20],
      ['Buying group', h.parts.multithread, 20],
      ['Stage velocity', h.parts.velocity, 15]
    ].map(([k, v, max]) => `<div class="pillar"><span class="pillar-name">${k}</span>
        <span style="display:flex;align-items:center;gap:10px">
          <span class="gauge" style="width:72px;margin:0"><i style="width:${(v / max * 100).toFixed(0)}%;background:var(--${v / max >= .7 ? 'good' : v / max >= .45 ? 'warn' : 'crit'})"></i></span>
          <span class="num" style="font-size:12px;width:46px;text-align:right">${v} / ${max}</span></span></div>`).join('')
      + (deal.slips ? `<div class="pillar"><span class="pillar-name">Slip penalty</span>
        <span class="num" style="font-size:12px;color:var(--crit)">${h.parts.slip}</span></div>` : '');

    return `<div class="view-head" style="width:100%">
        <button class="rowlink" data-view="pipeline">&larr; Pipeline</button></div>
      <div class="detail">
        <div class="card detail-wide"><div class="card-body">
          <div class="dhead">
            ${dial(h.score, true)}
            <div class="dhead-id"><h1>${esc(deal.co)}</h1>
              <p>${esc(deal.seg)} &middot; ${esc(deal.industry)} &middot; ${bandWord(h.score)}
              ${deal.slips ? ' &middot; slipped ' + deal.slips + ' quarter' + (deal.slips > 1 ? 's' : '') : ''}</p></div>
            <div class="facts">${facts}</div>
          </div></div></div>

        <div class="card"><div class="card-head"><h2>Risk signals</h2>
          <span class="eyebrow">${deal.risks.length} open</span></div>
          <div class="card-body">${deal.risks.map((r) => signalBlock(r, false)).join('') || '<p class="empty">Nothing flagged.</p>'}</div></div>

        <div class="card"><div class="card-head"><h2>Qualification</h2>
          <span class="eyebrow">MEDDPICC</span></div>
          <div class="card-body">${pillars(deal)}</div></div>

        <div class="card"><div class="card-head"><h2>Activity</h2></div>
          <div class="card-body"><div class="tl">${deal.timeline.map((e) => `<div class="tl-item">
            <span class="tl-date">${fmtDate(e.d)}</span>
            <span class="tl-spine"><i class="tl-mark ${e.k}"></i></span>
            <div class="tl-body"><h4>${esc(e.t)}</h4><p>${esc(e.s)}</p></div></div>`).join('')}</div></div></div>

        <div class="card"><div class="card-head"><h2>Buying group</h2>
          <span class="eyebrow">${h.active} of ${deal.people.length} engaged</span></div>
          <div class="card-body"><div class="people">${deal.people.map((p) => {
            const n = p.eng === 'high' ? 3 : p.eng === 'medium' ? 2 : 1;
            return `<div class="person"><span class="avatar">${esc(initials(p.n))}</span>
              <span class="person-id"><b>${esc(p.n)}</b><span>${esc(p.t)} &middot; ${esc(p.role)}</span></span>
              <span class="eng" title="${p.eng} engagement">${[1, 2, 3].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span></div>`;
          }).join('')}</div></div></div>

        <div class="card detail-wide"><div class="card-head"><h2>How this score was built</h2>
          <span class="eyebrow">${h.score} of 100</span></div>
          <div class="card-body">${breakdown}</div></div>
      </div>`;
  }

  function viewForecast() {
    const max = Math.max(QUARTER.quota, FC.allIn) * 1.04;
    const pct = (n) => (n / max * 100).toFixed(1) + '%';
    const rows = [
      ['Booked', FC.booked, 'b-booked', 'Closed won to date'],
      ['Commit', FC.repCommit, 'b-commit', 'Booked + rep commit'],
      ['Best case', FC.repBest, 'b-best', 'Commit + upside'],
      ['All in', FC.allIn, 'b-pipeline', 'Every in-quarter deal']
    ].map(([label, val, cls, note]) => `<div class="catrow">
        <div><div style="font-size:13px;font-weight:600">${label}</div>
          <div style="font-size:11px;color:var(--fg-dim)">${note}</div></div>
        <div class="catbar"><i class="${cls}" style="width:${pct(val)}"></i></div>
        <div class="catval">${money(val)}</div></div>`).join('');

    const months = [['2026-11', 'Nov'], ['2026-12', 'Dec'], ['2027-01', 'Jan']].map(([k, name]) => {
      const items = quarterDeals.filter((m) => m.deal.close.startsWith(k));
      return { name, total: sum(items), n: items.length };
    });
    const mMax = Math.max(...months.map((x) => x.total), 1);

    return `<div class="view-head"><h1>${QUARTER.label} forecast</h1>
        <p>Quota ${money(QUARTER.quota)} for the quarter ending ${fmtFull(QUARTER.end)}.
        ${FC.gap > 0 ? `Commit is ${money(FC.gap)} short.` : 'Commit clears quota.'}</p></div>

      <div class="card"><div class="card-head"><h2>Roll-up against quota</h2>
        <span class="eyebrow">${quarterDeals.length} in-quarter deals</span></div>
        <div class="card-body stack">${rows}
          <div class="quota-mark"><i style="left:${(QUARTER.quota / max * 100).toFixed(1)}%"></i>
            <span style="left:${(QUARTER.quota / max * 100).toFixed(1)}%">Quota ${money(QUARTER.quota)}</span></div></div></div>

      <div class="card"><div class="kpis">
        <div class="kpi"><span class="eyebrow">Coverage</span><span class="kpi-val">${FC.coverage.toFixed(1)}&times;</span>
          <span class="kpi-note">Open pipeline over remaining quota</span></div>
        <div class="kpi"><span class="eyebrow">Stage-weighted</span><span class="kpi-val">${money(FC.weighted)}</span>
          <span class="kpi-note">Historical close rate by stage</span></div>
        <div class="kpi"><span class="eyebrow">Model commit</span><span class="kpi-val">${money(FC.modelCommit)}</span>
          <span class="kpi-note">${money(Math.abs(FC.modelCommit - FC.repCommit))} ${FC.modelCommit < FC.repCommit ? 'below' : 'above'} the rep call</span></div>
        <div class="kpi"><span class="eyebrow">Blocking risks</span><span class="kpi-val" style="color:var(--crit)">${highCount}</span>
          <span class="kpi-note">Across ${new Set(SIGNALS.filter((s) => s.sev === 'high').map((s) => s.m.deal.id)).size} deals</span></div>
      </div></div>

      <div class="card"><div class="card-head"><h2>In-quarter detail</h2></div>
        <div class="card-body"><div class="table-wrap"><table class="grid">
          <tr><th>Deal</th><th>Owner</th><th>Stage</th><th>Close</th><th>ACV</th><th>Health</th><th>Rep</th><th>Model</th></tr>
          ${quarterDeals.slice().sort((a, b) => a.deal.close.localeCompare(b.deal.close)).map((m) => `<tr>
            <td><button class="rowlink" data-deal="${m.deal.id}">${esc(m.deal.co)}</button></td>
            <td style="color:var(--fg-mid)">${esc(m.deal.owner)}</td>
            <td>${esc(stageOf(m.deal.stage).name)}</td>
            <td class="num">${fmtDate(m.deal.close)}</td>
            <td class="num">${money(m.deal.acv)}</td>
            <td class="num" style="color:var(--${band(m.h.score)});font-weight:600">${m.h.score}</td>
            <td style="text-transform:capitalize">${esc(m.deal.call)}</td>
            <td style="text-transform:capitalize;font-weight:600;color:var(--${m.model === 'commit' ? 'good' : m.model === 'best' ? 'accent' : 'warn'})">${esc(m.model)}</td></tr>`).join('')}
        </table></div></div></div>

      <div class="card"><div class="card-head"><h2>Close dates by month</h2></div>
        <div class="card-body stack">${months.map((x) => `<div class="catrow">
          <div><div style="font-size:13px;font-weight:600">${x.name}</div>
            <div style="font-size:11px;color:var(--fg-dim)">${x.n} deal${x.n === 1 ? '' : 's'}</div></div>
          <div class="catbar"><i class="b-best" style="width:${(x.total / mMax * 100).toFixed(1)}%"></i></div>
          <div class="catval">${money(x.total)}</div></div>`).join('')}</div></div>`;
  }

  function viewSignals() {
    const groups = [['high', 'Blocking'], ['med', 'Watch'], ['low', 'Noted']];
    return `<div class="view-head"><h1>Signals</h1>
        <p>Every open risk across the pipeline, ranked by severity then deal size.
        Each one carries the play DealPilot would run next.</p></div>
      ${groups.map(([sev, label]) => {
        const items = SIGNALS.filter((s) => s.sev === sev);
        if (!items.length) return '';
        return `<div class="card"><div class="card-head"><h2>${label}</h2>
          <span class="eyebrow">${items.length} signal${items.length === 1 ? '' : 's'} &middot; ${money(items.reduce((t, s) => t + s.m.deal.acv, 0))} exposed</span></div>
          <div class="card-body">${items.map((r) => signalBlock(r, true)).join('')}</div></div>`;
      }).join('')}`;
  }

  /* ---------- chrome ---------- */

  const VIEWS = [
    { id: 'pipeline', name: 'Pipeline', tally: () => MODEL.length, dot: 'var(--accent)' },
    { id: 'forecast', name: 'Forecast', tally: () => FC.coverage.toFixed(1) + '×', dot: FC.repCommit >= QUARTER.quota ? 'var(--good)' : 'var(--warn)' },
    { id: 'signals', name: 'Signals', tally: () => highCount, dot: highCount ? 'var(--crit)' : 'var(--good)' }
  ];

  let state = { view: 'pipeline', deal: null };

  function rail() {
    const atRisk = MODEL.filter((m) => m.h.score < 50).length;
    return `<aside class="rail">
      <div class="brand"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"
          stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h4l3-8 4 16 3-8h4"/></svg></span>
        <span><span class="brand-name">DealPilot</span><span class="brand-sub">Revenue copilot</span></span></div>
      <nav class="nav">${VIEWS.map((v) => `<button class="nav-item" data-view="${v.id}"
          aria-current="${state.view === v.id || (v.id === 'pipeline' && state.view === 'deal') ? 'true' : 'false'}">
          <span class="nav-dot" style="background:${v.dot}"></span>${v.name}
          <span class="tally">${v.tally()}</span></button>`).join('')}</nav>
      <div class="rail-block">
        <span class="eyebrow">${QUARTER.label}</span>
        <div class="rail-row"><span>Quota</span><span class="num">${money(QUARTER.quota)}</span></div>
        <div class="rail-row"><span>Commit</span><span class="num">${money(FC.repCommit)}</span></div>
        <div class="rail-row"><span>Gap</span><span class="num" style="color:var(--${FC.gap > 0 ? 'crit' : 'good'})">${FC.gap > 0 ? '-' : '+'}${money(Math.abs(FC.gap))}</span></div>
        <div class="rail-row"><span>At risk</span><span class="num">${atRisk} deal${atRisk === 1 ? '' : 's'}</span></div>
      </div>
      <div class="rail-foot">
        <button class="theme-btn" id="theme"><span aria-hidden="true">◑</span> Theme</button>
        <span>Prototype &middot; sample data</span></div></aside>`;
  }

  function strip() {
    const attain = FC.repCommit / QUARTER.quota;
    const quiet = MODEL.filter((m) => m.h.quiet > 14).length;
    const avgStage = Math.round(MODEL.reduce((t, m) => t + m.h.stageDays, 0) / MODEL.length);
    return `<div class="strip">
      <div class="reading"><span class="eyebrow">Commit vs quota</span>
        <span class="reading-val">${(attain * 100).toFixed(0)}%<small> of ${money(QUARTER.quota)}</small></span>
        <span class="gauge"><i style="width:${Math.min(100, attain * 100).toFixed(0)}%;background:var(--${attain >= 1 ? 'good' : attain >= .8 ? 'warn' : 'crit'})"></i></span></div>
      <div class="reading"><span class="eyebrow">Coverage</span>
        <span class="reading-val">${FC.coverage.toFixed(1)}&times;</span>
        <span class="reading-note">${money(FC.allIn - FC.booked)} open</span></div>
      <div class="reading"><span class="eyebrow">Blocking risks</span>
        <span class="reading-val" style="color:var(--crit)">${highCount}</span>
        <span class="reading-note">need action this week</span></div>
      <div class="reading"><span class="eyebrow">Gone quiet</span>
        <span class="reading-val">${quiet}</span>
        <span class="reading-note">no contact in 14+ days</span></div>
      <div class="reading"><span class="eyebrow">Avg time in stage</span>
        <span class="reading-val">${avgStage}<small> days</small></span>
        <span class="reading-note">across ${MODEL.length} open deals</span></div>
      <div class="strip-spacer"></div>
      <div class="reading"><span class="eyebrow">As of</span>
        <span class="reading-val" style="font-size:14px">${fmtFull(TODAY)}</span>
        <span class="reading-note">${QUARTER.label} &middot; ${daysUntil(QUARTER.end)} days left</span></div></div>`;
  }

  function body() {
    if (state.view === 'deal') return viewDeal(state.deal);
    if (state.view === 'forecast') return viewForecast();
    if (state.view === 'signals') return viewSignals();
    return viewPipeline();
  }

  const root = document.getElementById('root');

  function render() {
    root.innerHTML = `<div class="shell">${rail()}<div class="main">${strip()}
      <main class="view">${body()}</main></div></div>`;
  }

  function go(view, deal) {
    state = { view, deal: deal || null };
    const hash = view === 'deal' ? 'deal-' + deal : view;
    if (location.hash.slice(1) !== hash) location.hash = hash;
    render();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function fromHash() {
    const h = location.hash.slice(1);
    if (h.startsWith('deal-') && byId(h.slice(5))) return { view: 'deal', deal: h.slice(5) };
    if (VIEWS.some((v) => v.id === h)) return { view: h, deal: null };
    return { view: 'pipeline', deal: null };
  }

  root.addEventListener('click', (e) => {
    const dealBtn = e.target.closest('[data-deal]');
    if (dealBtn) return go('deal', dealBtn.dataset.deal);
    const viewBtn = e.target.closest('[data-view]');
    if (viewBtn) return go(viewBtn.dataset.view);
    if (e.target.closest('#theme')) {
      const r = document.documentElement;
      const dark = r.getAttribute('data-theme') === 'dark'
        || (!r.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
      r.setAttribute('data-theme', dark ? 'light' : 'dark');
      try { localStorage.setItem('dealpilot-theme', dark ? 'light' : 'dark'); } catch (err) { /* storage blocked */ }
    }
  });

  window.addEventListener('hashchange', () => { state = fromHash(); render(); });

  try {
    const saved = localStorage.getItem('dealpilot-theme');
    if (saved === 'dark' || saved === 'light') document.documentElement.setAttribute('data-theme', saved);
  } catch (err) { /* storage blocked */ }

  state = fromHash();
  render();
})();
