// Renders every README image from the HTML mocks in laws.mjs.
//
//   PLAYWRIGHT=/path/to/node_modules/playwright CHROME="/path/to/chrome" node assets/src/render.mjs
//
// Output: assets/banner.png (2560x1280; assets/social-preview.png is the same at 1280x640), assets/invite.png,
// assets/proof.png and assets/laws/law-NN.png. Images are 2x, with transparent
// rounded corners so they sit on GitHub's light and dark themes.
import { mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { featured, compact } from './laws.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const assets = join(here, '..');
mkdirSync(join(assets, 'laws'), { recursive: true });
// Fonts are inlined as data URIs: setContent pages cannot fetch file:// fonts.
const css = readFileSync(join(here, 'styles.css'), 'utf8').replace(/url\(\.\.\/fonts\/([\w-]+\.woff2)\)/g,
  (_, f) => `url(data:font/woff2;base64,${readFileSync(join(here, '..', 'fonts', f)).toString('base64')})`);
const pad = (n) => String(n).padStart(2, '0');

const icoX = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M7 7l10 10M17 7L7 17"/></svg>';
const icoOk = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
const tagB = (t = 'Before') => `<span class="tag-b">${icoX}${t}</span>`;
const tagA = (t = 'After') => `<span class="tag-a">${icoOk}${t}</span>`;
const pinN = (n, g) => `<b class="pin${g ? ' g' : ''}">${n}</b>`;
const logo = `<svg viewBox="0 0 32 32"><rect x="3" y="3" width="17" height="17" rx="5" fill="none" stroke="#F2F3F5" stroke-width="2.4"/><rect x="12" y="12" width="17" height="17" rx="5" fill="#F2F3F5"/><path d="M16.5 20.5l2.6 2.6 5-5.6" fill="none" stroke="#0A0B0E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const brand = `<span class="brand">${logo}UX Ultra</span>`;

// ------------------------------------------------------------- shots
const shots = [];
const add = (file, width, body, cls = '') => shots.push({ file, width, html: `<div class="${cls}"><div class="shot" style="width:${width}px">${body}</div></div>` });

// Banner and social preview
const vr = featured.find((l) => l.n === 6);
shots.push({ file: 'banner.png', width: 1280, html: `
<div class="shot banner">
  <div>
    ${brand}
    <div class="eyebrow"><i></i>A free skill for Claude Code</div>
    <h1>Your AI builds the screen. <em class="s">UX Ultra makes people use it.</em></h1>
    <p class="sub">30 laws of UX your coding agent follows on every screen it builds.</p>
    <div class="cmd"><span>&gt;</span>/plugin marketplace add simberthon/ux-ultra</div>
  </div>
  <div class="stack">
    <div class="card b">${tagB('Before: what the AI ships')}<div class="ui">${vr.before}</div></div>
    <div class="card a">${tagA('After: with UX Ultra')}<div class="ui after">${vr.after}</div></div>
  </div>
</div>` });

// The invite page, before and after (problem section)
const side = (active) => `<div class="inv-side"><div class="ws"><i></i>Acme</div><span class="it">Dashboard</span><span class="it">Projects</span><span class="it">Reports</span><span class="it${active ? ' on' : ''}">${active ? 'Members' : 'Settings'}</span></div>`;
const inviteBefore = `<div class="ui big"><div class="inv">${side(false)}<div class="inv-main">
  <h4>Settings</h4>
  <div class="inv-tabs"><span>General</span><span>Billing</span><span>Members</span><span>Integrations</span></div>
  <span class="u-in ph pp">Email${pinN(1)}</span>
  <span class="u-in bad pp">j${pinN(2)}</span><span class="u-err">Invalid email</span>
  <span class="u-in ph">Select...</span>
  <div class="u-row pp" style="align-self:flex-start"><span class="u-btn" style="opacity:.55">Submit</span><span class="u-btn">Cancel</span><span class="u-btn">Reset</span>${pinN(3)}</div>
  <div class="nodata pp">No data${pinN(4)}</div>
</div></div></div>`;
const inviteAfter = `<div class="ui big after"><div class="inv">${side(true)}<div class="inv-main">
  <h4>Members</h4>
  <p class="help">Invite teammates to work on projects together.</p>
  <div class="grid2">
    <div><span class="u-lbl pp" style="display:inline-block">Emails${pinN(1, 1)}</span><span class="u-in chips"><span class="chip2">jane@acme.com</span><span class="chip2">leo@acme.com</span></span></div>
    <div><span class="u-lbl">Role</span><span class="u-in pp">Member${pinN(2, 1)}</span></div>
    <span class="u-btn pri pp">Send invites${pinN(3, 1)}</span>
  </div>
  <p class="help">Members can edit projects. Only admins manage billing.</p>
  <div class="mrow"><span class="av2">MC</span><span class="nm">Maya Chen<small>Owner</small></span></div>
  <div class="mrow pp"><span class="av2">J</span><span class="nm">jane@acme.com<small>Member</small></span><span class="pill">Invite sent</span><span class="u-link">Resend</span>${pinN(4, 1)}</div>
  <div class="mrow"><span class="av2">L</span><span class="nm">leo@acme.com<small>Member</small></span><span class="pill">Invite sent</span><span class="u-link">Resend</span></div>
</div></div></div>`;
add('invite.png', 1280, `
  <div class="shot-head"><div><div class="lawno">SAME REQUEST, SAME DESIGN SYSTEM<span class="chip">"Build a team page where admins invite members"</span></div></div>${brand}</div>
  <div class="cmp">
    <div class="side">${tagB('Before: what the AI ships')}<div class="frame b">${inviteBefore}</div></div>
    <div class="side after">${tagA('After: with UX Ultra')}<div class="frame a">${inviteAfter}</div></div>
  </div>`);

// Eight large law cards
for (const l of featured) {
  add(`laws/law-${pad(l.n)}.png`, 1040, `
  <div class="shot-head"><div><div class="lawno">LAW ${pad(l.n)}<span class="chip">${l.law}</span></div><h2>${l.title}</h2></div>${brand}</div>
  <div class="cmp">
    <div class="side">${tagB('Before: what the AI ships')}<div class="frame b"><div class="ui${l.phone ? ' phone' : ''}">${l.before}</div></div></div>
    <div class="side after">${tagA('After: with UX Ultra')}<div class="frame a"><div class="ui${l.phone ? ' phone' : ''}">${l.after}</div></div></div>
  </div>`);
}

// Twenty-two compact law cards
for (const l of compact) {
  add(`laws/law-${pad(l.n)}.png`, 720, `
  <div class="shot-head"><div class="lawno">LAW ${pad(l.n)}<span class="chip">${l.law}</span></div></div>
  <div class="cmp">
    <div class="side">${tagB()}<div class="frame b"><div class="ui mini">${l.b}</div></div></div>
    <div class="side after">${tagA()}<div class="frame a"><div class="ui mini">${l.a}</div></div></div>
  </div>`, 'compact');
}

// Proof: the real /ux-review run on examples/invite-before.html
const rows = [
  ['One dominant primary action', 0, 'Three identical buttons, and the main one starts disabled'],
  ['Empty state (first use)', 0, 'Just says "No data"'],
  ['Visible labels', 0, 'A placeholder is used as the label; Role has no label'],
  ['Input survives errors', 0, 'Runs <code>email.value=\'\'</code> when the request fails'],
  ['Plain, specific errors', 0, '"Invalid email" and "Something went wrong" as alerts'],
  ['Contrast', 2, 'Browser default, black on white'],
];
shots.push({ file: 'proof.png', width: 1280, html: `
<div class="shot" style="width:1280px">
  <div class="shot-head"><div><div class="lawno">/ux-review examples/invite-before.html<span class="chip">Claude Code, 23 October 2026, unedited</span></div></div>${brand}</div>
  <div class="proof" style="width:auto">
    <div class="score">
      <div class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="#1D2029" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="#FF7A6B" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(15 / 88 * 326.7).toFixed(1)} 326.7" transform="rotate(-90 60 60)"/></svg><div class="big">15<small> / 88</small></div></div>
      <div class="verdict">Verdict: rework</div>
      <p>13 blockers at zero. 13 fixes, worst first.</p>
    </div>
    <div class="tbl"><table>
      <thead><tr><th>Item</th><th>Score</th><th>What it found</th></tr></thead>
      <tbody>${rows.map(([i, s, e]) => `<tr><td>${i}<span class="blk">BLOCKER</span></td><td><span class="sc sc${s}">${s}</span></td><td>${e}</td></tr>`).join('')}</tbody>
    </table><div class="foot"><span>Excerpt of the scored table.</span><span>0 missing, 1 partly, 2 done well</span></div></div>
  </div>
</div>` });

// ------------------------------------------------------------- render
const pw = await import(process.env.PLAYWRIGHT || 'playwright');
const { chromium } = pw.default || pw;
const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined, args: ['--headless=new'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
const base = pathToFileURL(here + '/').href;
for (const s of shots) {
  await page.setViewportSize({ width: s.width + 40, height: 900 });
  await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><base href="${base}"><style>${css}</style></head><body>${s.html}</body></html>`, { waitUntil: 'load' });
  await page.evaluate(async () => { await Promise.all(['600 16px "JetBrains Mono"', '600 16px "Inter Tight"', 'italic 400 16px "Instrument Serif"'].map((f) => document.fonts.load(f))); await document.fonts.ready; });
  await page.locator('.shot').first().screenshot({ path: join(assets, s.file), omitBackground: true });
  console.log('rendered', s.file);
}
await browser.close();
