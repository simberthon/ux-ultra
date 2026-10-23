// The 30 laws as the README shows them. Names and order follow
// skills/ux-ultra/references/laws.md; the plain line, the scenes and the
// business effect come from the landing copy (LUN-9407, copy.md rev 1).
// "before" and "after" are small HTML mocks of the same screen, drawn with the
// .ui primitives in styles.css and rendered to PNG by render.mjs.
// Pins (<b class="pin">n</b>) sit inside a .pp element and match the notes.

export const families = [
  { id: 'decide-and-act', name: 'Decide and act', range: [1, 8] },
  { id: 'understand-at-a-glance', name: 'Understand at a glance', range: [9, 17] },
  { id: 'memory-and-load', name: 'Memory and load', range: [18, 21] },
  { id: 'progress-and-motivation', name: 'Progress and motivation', range: [22, 25] },
  { id: 'errors-and-complexity', name: 'Errors and complexity', range: [26, 30] },
];

const pin = (n) => `<b class="pin" aria-hidden="true">${n}</b>`;
const trash = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>';
const pen = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';

// ---------------------------------------------------------------- featured
export const featured = [
  {
    n: 1, title: 'Reduce choices per screen', law: "Hick's law",
    plain: 'the more buttons you show, the longer people freeze.',
    effect: 'people start doing the thing you sell instead of looking around.',
    before: `
      <div class="u-h">Welcome to Acme</div>
      <div class="u-t">What would you like to do?</div>
      <div class="u-grid3 pp">${pin(1)}
        <span class="u-tile">Create project</span><span class="u-tile">Import CSV</span><span class="u-tile">Connect Slack</span>
        <span class="u-tile">Invite team</span><span class="u-tile">Templates</span><span class="u-tile">Watch tutorial</span>
        <span class="u-tile">Read the docs</span><span class="u-tile">Set up billing</span><span class="u-tile">API keys</span>
      </div>
      <div class="u-row u-end pp">${pin(2)}<span class="u-btn">Skip</span><span class="u-btn">Later</span><span class="u-btn">Settings</span></div>`,
    beforeNotes: ['Nine tiles of equal weight. Nothing says where to start.', 'Three ways out compete with the way in.'],
    after: `
      <div class="u-h">Welcome to Acme</div>
      <div class="u-t">One thing to do first. It takes about 2 minutes.</div>
      <div class="u-card u-rec pp">${pin(1)}
        <span class="u-tag">Start here</span>
        <div class="u-b">Create your first project</div>
        <div class="u-t">A board with sample tasks you can edit or delete.</div>
        <span class="u-btn pri">Create your first project</span>
      </div>
      <div class="u-t pp" style="align-self:flex-start">Imports, integrations and billing are in the sidebar.${pin(2)}</div>`,
    afterNotes: ['One main task, clearly the place to start.', 'Everything else stays one level deeper, in the sidebar.'],
  },
  {
    n: 4, title: 'Make targets large and close', law: "Fitts's law",
    plain: 'big buttons near your thumb are easy to hit.',
    effect: 'fewer mis-taps, fewer angry support messages.',
    phone: true,
    before: `
      <div class="u-top"><span class="u-b">Invoices</span><span></span></div>
      <div class="u-line"><span>#1042 Northwind<small>1,200 EUR</small></span><span class="u-ico tiny pp"><i>${pen}</i><i>${trash}</i>${pin(1)}</span></div>
      <div class="u-line"><span>#1041 Globex<small>860 EUR</small></span><span class="u-ico tiny"><i>${pen}</i><i>${trash}</i></span></div>
      <div class="u-line"><span>#1040 Initech<small>2,400 EUR</small></span><span class="u-ico tiny pp"><i>${pen}</i><i>${trash}</i>${pin(2)}</span></div>
      <div class="u-line"><span>#1039 Umbrella<small>540 EUR</small></span><span class="u-ico tiny"><i>${pen}</i><i>${trash}</i></span></div>
      <div class="u-fill"></div>`,
    beforeNotes: ['16 px icons crammed at the edge of the row.', 'Edit and Delete touch: one slip deletes.'],
    after: `
      <div class="u-top"><span class="u-b">Invoices</span><span></span></div>
      <div class="u-line"><span>#1042 Northwind<small>1,200 EUR</small></span><span class="u-ico big pp"><i>${pen}</i><i class="d">${trash}</i>${pin(1)}</span></div>
      <div class="u-line"><span>#1041 Globex<small>860 EUR</small></span><span class="u-ico big"><i>${pen}</i><i class="d">${trash}</i></span></div>
      <div class="u-line"><span>#1040 Initech<small>2,400 EUR</small></span><span class="u-ico big pp"><i>${pen}</i><i class="d">${trash}</i>${pin(2)}</span></div>
      <div class="u-line"><span>#1039 Umbrella<small>540 EUR</small></span><span class="u-ico big"><i>${pen}</i><i class="d">${trash}</i></span></div>
      <div class="u-fill"></div>`,
    afterNotes: ['44 px tap areas, easy for a thumb.', 'Space between them, and Delete marked as destructive.'],
  },
  {
    n: 6, title: 'Highlight the primary action', law: 'Von Restorff effect',
    plain: 'the one thing that looks different gets clicked.',
    effect: 'more people hit the button that makes you money.',
    before: `
      <div class="u-h">Invite a teammate</div>
      <label class="u-lbl">Email</label><span class="u-in">jane@acme.com</span>
      <label class="u-lbl">Role</label><span class="u-in">Member</span>
      <div class="u-row pp" style="margin-top:6px;align-self:flex-start">${pin(1)}<span class="u-btn">Submit</span><span class="u-btn">Cancel</span><span class="u-btn pp">Reset${pin(2)}</span></div>`,
    beforeNotes: ['Three identical grey buttons. Which one sends?', 'Reset sits next to Submit and wipes the form.'],
    after: `
      <div class="u-h">Invite a teammate</div>
      <label class="u-lbl">Email</label><span class="u-in">jane@acme.com</span>
      <label class="u-lbl">Role</label><span class="u-in">Member</span>
      <div class="u-row" style="margin-top:6px"><span class="u-btn pri pp">Send invite${pin(1)}</span><span class="u-link pp">Cancel${pin(2)}</span></div>`,
    afterNotes: ['One solid button that says what it does.', 'Cancel is a quiet text link. Reset is gone.'],
  },
  {
    n: 7, title: 'Respond within 400 milliseconds', law: 'Doherty threshold',
    plain: 'if nothing moves when you click, you click again or you leave.',
    effect: 'the app feels fast, and fast apps get used daily.',
    before: `
      <div class="u-row u-between"><span class="u-h">Tasks</span><span class="u-btn pri pp">Save${pin(1)}</span></div>
      <div class="u-chk"><i></i>Draft the Q4 report</div>
      <div class="u-chk"><i></i>Review pricing page</div>
      <div class="u-chk"><i></i>Call Northwind</div>
      <div class="u-time pp">${pin(2)}<span>0 ms click</span><span class="u-gap">nothing moves</span><span>2,000 ms</span></div>`,
    beforeNotes: ['No pressed state, no spinner, no change.', 'Two seconds of silence: people click again.'],
    after: `
      <div class="u-row u-between"><span class="u-h">Tasks</span><span class="u-btn pri pp"><i class="u-spin"></i>Saving${pin(1)}</span></div>
      <div class="u-chk"><i></i>Draft the Q4 report</div>
      <div class="u-chk done pp"><i></i><span class="u-sp">Review pricing page</span>${pin(2)}</div>
      <div class="u-chk"><i></i>Call Northwind</div>
      <div class="u-time ok"><span>0 ms click</span><span>80 ms spinner</span><span>list already updated</span></div>`,
    afterNotes: ['The button answers at once, in about 80 ms.', 'The list updates right away, before the server replies.'],
  },
  {
    n: 19, title: 'Break content into chunks', law: "Miller's law and chunking",
    plain: 'small groups are easier to read than one long block.',
    effect: 'fewer copy errors, fewer "my key does not work" tickets.',
    before: `
      <div class="u-h">API keys</div>
      <div class="u-t">Use this key to call the API from your server.</div>
      <span class="u-in mono pp">sk9fQ2aX7mLp3RtV8cWn4KjH6bYd1EuZs0Qm5Pw2${pin(1)}</span>
      <div class="u-t pp" style="align-self:flex-start">Select the key and copy it.${pin(2)}</div>`,
    beforeNotes: ['One 40-character string, impossible to check by eye.', 'No copy button: select by hand and hope.'],
    after: `
      <div class="u-h">API keys</div>
      <div class="u-t">Use this key to call the API from your server.</div>
      <label class="u-lbl">Secret key</label>
      <span class="u-in mono pp">sk9f Q2aX 7mLp 3RtV 8cWn 4KjH 6bYd 1EuZ s0Qm 5Pw2${pin(1)}</span>
      <div class="u-row"><span class="u-btn pp">Copy key${pin(2)}</span><span class="u-t">Created 12 Oct by Maya. Last used 2 hours ago.</span></div>
`,
    afterNotes: ['The key in groups of 4, easy to compare.', 'One Copy button right next to it.'],
  },
  {
    n: 23, title: 'Make the goal feel close', law: 'Goal-gradient effect',
    plain: 'the closer the finish line looks, the faster people run.',
    effect: 'more users finish onboarding and activate.',
    before: `
      <div class="u-row u-between"><span class="u-h">Get started</span><span class="u-t pp">0 of 5${pin(1)}</span></div>
      <div class="u-prog" style="--p:0%"><i></i></div>
      <div class="u-chk"><i></i>Create your account</div>
      <div class="u-chk pp"><i></i>Import your contacts${pin(2)}</div>
      <div class="u-chk"><i></i>Send your first campaign</div>
      <div class="u-chk"><i></i>Invite a teammate</div>
      <div class="u-chk"><i></i>Connect your domain</div>`,
    beforeNotes: ['Starts at 0 of 5, even after signing up.', 'Every task looks equally far away.'],
    after: `
      <div class="u-row u-between"><span class="u-h">Get started</span><span class="u-t pp">1 of 5${pin(1)}</span></div>
      <div class="u-prog" style="--p:20%"><i></i></div>
      <div class="u-chk done"><i></i>Create your account</div>
      <div class="u-chk next pp">${pin(2)}<i></i><span>Import your contacts<small>About 2 min</small></span><span class="u-btn pri sm">Start</span></div>
      <div class="u-chk"><i></i>Send your first campaign</div>
      <div class="u-chk"><i></i>Invite a teammate</div>
      <div class="u-chk"><i></i>Connect your domain</div>`,
    afterNotes: ['An honest head start: "Account created" is ticked.', 'The next step is highlighted, small and timed.'],
  },
  {
    n: 24, title: 'Design the peak and the end', law: 'Peak-end rule',
    plain: 'people remember the best moment and the last moment.',
    effect: 'a good ending is what people tell their friends about.',
    before: `
      <div class="u-center"><div class="u-h pp">Success${pin(1)}</div></div>
      <div class="u-blank pp">${pin(2)}</div>`,
    beforeNotes: ['After payment, a blank page that says "Success".', 'No next step, so the session ends here.'],
    after: `
      <div class="u-center">
        <span class="u-okmark" aria-hidden="true"></span>
        <div class="u-h pp">You're in. Your workspace is ready.${pin(1)}</div>
        <div class="u-t">Pro plan, 5 seats. Receipt sent to maya@acme.com.</div>
        <span class="u-btn pri pp">Create your first project${pin(2)}</span>
        <span class="u-link">Invite your team</span>
      </div>`,
    afterNotes: ['Says what just happened, in plain words.', 'The next step is one button away.'],
  },
  {
    n: 28, title: 'Make errors recoverable', law: 'Error recovery',
    plain: 'mistakes happen, so make them cheap.',
    effect: 'nobody leaves because they lost 10 minutes of typing.',
    stat: 'Inline validation on blur, compared with none: 22% more successful completions, 42% less time to finish. Source: Luke Wroblewski, A List Apart, 2009.',
    before: `
      <div class="u-h">New invoice</div>
      <label class="u-lbl">Client</label><span class="u-in pp empty">.${pin(1)}</span>
      <label class="u-lbl">Amount</label><span class="u-in empty">.</span>
      <label class="u-lbl">Notes</label><span class="u-in empty tall">.</span>
      <div class="u-popup pp">${pin(2)}<b>Error</b>Something went wrong.<span class="u-btn sm">OK</span></div>`,
    beforeNotes: ['The form comes back empty after the error.', 'A popup that says nothing about what failed.'],
    after: `
      <div class="u-h">New invoice</div>
      <label class="u-lbl">Client</label><span class="u-in pp">Northwind Ltd${pin(1)}</span>
      <label class="u-lbl">Amount</label><span class="u-in">1,200.00 EUR</span>
      <label class="u-lbl">Notes</label><span class="u-in tall">Net 30. Thanks for the October order.</span>
      <div class="u-alert pp">${pin(2)}<b>Not sent: the connection dropped.</b>Your invoice is saved as a draft.<span class="u-btn pri sm">Try again</span></div>`,
    afterNotes: ['Everything typed stays in the form.', 'Says what failed, what was kept, and how to retry.'],
  },
];

// ---------------------------------------------------------------- compact
// b/a = mini mock HTML; before/after = the copy's scene lines.
export const compact = [
  { n: 2, title: 'Use sensible defaults', law: "Hick's law, applied",
    plain: 'pick the safe answer for them, and let them change it.',
    before: 'a signup form with empty Country, Currency and Timezone dropdowns.',
    after: 'the three fields prefilled from the browser (Thailand, THB, Bangkok), each with a "Change" link.',
    effect: 'fewer fields to fill means more finished signups.',
    b: `<span class="u-lbl">Country</span><span class="u-in ph">Select...</span><span class="u-lbl">Currency</span><span class="u-in ph">Select...</span><span class="u-lbl">Timezone</span><span class="u-in ph">Select...</span>`,
    a: `<span class="u-lbl">Country</span><span class="u-in sp">Thailand<span class="u-link">Change</span></span><span class="u-lbl">Currency</span><span class="u-in sp">THB<span class="u-link">Change</span></span><span class="u-lbl">Timezone</span><span class="u-in sp">Bangkok<span class="u-link">Change</span></span>` },
  { n: 3, title: 'Avoid choice overload', law: 'Choice overload',
    plain: 'too many options and people pick nothing.',
    before: 'a pricing page with 6 plans in identical columns.',
    after: '3 plans, the middle one tagged "Recommended".',
    effect: 'a visitor who can decide is a visitor who can pay.',
    b: `<span class="u-b">Pricing</span><div class="u-plans"><i>9<small class="g">/mo</small></i><i>15<small class="g">/mo</small></i><i>19<small class="g">/mo</small></i><i>29<small class="g">/mo</small></i><i>49<small class="g">/mo</small></i><i>99<small class="g">/mo</small></i></div>`,
    a: `<span class="u-b">Pricing</span><div class="u-plans"><i>9<small class="g">/mo</small></i><i class="rec"><small>Recommended</small>29<small class="g">/mo</small></i><i>99<small class="g">/mo</small></i></div>` },
  { n: 5, title: 'Place key actions nearby', law: "Fitts's law, applied",
    plain: 'put the button where the eyes already are.',
    before: 'a table where you tick a row, then scroll to the top toolbar to delete it.',
    after: 'Edit and Delete sit on the row itself.',
    effect: 'daily tasks take seconds, so people keep doing them in your app.',
    b: `<div class="u-row u-end"><span class="u-btn sm">Edit</span><span class="u-btn sm">Delete</span></div><div class="u-trow"><i class="cb"></i><span>Northwind</span></div><div class="u-trow"><i class="cb"></i><span>Globex</span></div><div class="u-trow"><i class="cb"></i><span>Initech</span></div><div class="u-trow sel"><i class="cb on"></i><span>Umbrella</span></div>`,
    a: `<div class="u-trow"><span>Northwind</span></div><div class="u-trow"><span>Globex</span></div><div class="u-trow"><span>Initech</span></div><div class="u-trow sel"><span class="u-sp">Umbrella</span><span class="u-link">Edit</span><span class="u-link danger">Delete</span></div>` },
  { n: 8, title: 'Cut task time', law: "Parkinson's law",
    plain: 'every extra step is a chance to quit.',
    before: 'a 5-screen onboarding with an "Are you sure?" between each screen.',
    after: '2 screens, prefilled, with "2 min setup" written at the top.',
    effect: 'more people reach the moment your product pays off.',
    b: `<span class="u-t">Step 2 of 5</span><div class="u-dots"><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div><div class="u-modal">Are you sure you want to continue?<span class="u-row"><span class="u-btn sm">No</span><span class="u-btn sm">Yes</span></span></div>`,
    a: `<span class="u-t">2 min setup. Step 1 of 2.</span><div class="u-dots"><i class="on"></i><i></i></div><span class="u-lbl">Company</span><span class="u-in">Acme Ltd</span><span class="u-lbl">Work email</span><span class="u-in">maya@acme.com</span>` },
  { n: 9, title: 'Follow familiar patterns', law: "Jakob's law",
    plain: 'people expect your app to work like the apps they already use.',
    before: 'navigation hidden in a custom floating bubble bottom left.',
    after: 'a left sidebar, search at the top, avatar menu top right.',
    effect: 'zero learning curve, so trials turn into habits.',
    b: `<div class="u-app odd"><span class="u-skel w60"></span><span class="u-skel w80"></span><span class="u-skel w70"></span><i class="bubble"></i></div>`,
    a: `<div class="u-app"><div class="u-side"><i></i><i></i><i></i><i></i></div><div class="u-main"><div class="u-row" style="flex-wrap:nowrap"><span class="u-search">Search</span><i class="av"></i></div><span class="u-skel w80"></span><span class="u-skel w70"></span></div></div>` },
  { n: 10, title: "Match the user's mental model", law: 'Mental model',
    plain: "use the user's words, not the database's.",
    before: 'a menu item called "Entities" and a status "sync_job_pending".',
    after: '"Clients" and "Updating, back in a minute".',
    effect: 'people understand your product without a call to support.',
    b: `<ul class="u-nav"><li>Dashboard</li><li class="on">Entities</li><li>Reports</li></ul><span class="u-chip mono">sync_job_pending</span>`,
    a: `<ul class="u-nav"><li>Dashboard</li><li class="on">Clients</li><li>Reports</li></ul><span class="u-chip">Updating, back in a minute</span>` },
  { n: 11, title: 'Group related things', law: 'Law of proximity',
    plain: 'things close together look like they belong together.',
    before: 'a form where each label floats halfway between two fields.',
    after: 'each label sits right on top of its own field, with more space between groups.',
    effect: 'forms get filled in right the first time.',
    b: `<span class="gapx"></span><span class="u-lbl">First name</span><span class="gapx"></span><span class="u-in"></span><span class="gapx"></span><span class="u-lbl">Last name</span><span class="gapx"></span><span class="u-in"></span>`,
    a: `<span class="u-lbl">First name</span><span class="u-in"></span><span class="gapl"></span><span class="u-lbl">Last name</span><span class="u-in"></span>` },
  { n: 12, title: 'Use shared regions', law: 'Law of common region',
    plain: 'a box around things says "these go together".',
    before: 'billing details and team settings mixed in one long list.',
    after: 'two cards, "Billing" and "Team", each with its own Save.',
    effect: 'less hunting, fewer wrong changes.',
    b: `<span class="u-t">Card: Visa 4242</span><span class="u-t">Team name: Acme</span><span class="u-t">Billing email: ap@acme.com</span><span class="u-t">Default role: Member</span><span class="u-btn sm" style="align-self:flex-start">Save</span>`,
    a: `<div class="u-card tight"><div class="u-row u-between"><span class="u-b">Billing</span><span class="u-btn sm">Save</span></div><span class="u-t">Visa 4242, ap@acme.com</span></div><div class="u-card tight"><div class="u-row u-between"><span class="u-b">Team</span><span class="u-btn sm">Save</span></div><span class="u-t">Acme, default role Member</span></div>` },
  { n: 13, title: 'Connect related elements', law: 'Law of uniform connectedness',
    plain: 'a line between things shows they are linked.',
    before: 'a 4-step setup shown as 4 loose words at the top.',
    after: 'a stepper with circles joined by a line, done steps filled in.',
    effect: 'people see the path and walk it to the end.',
    b: `<div class="u-row u-between u-t"><span>Account</span><span>Team</span><span>Data</span><span>Launch</span></div><span class="u-skel w80" style="margin-top:12px"></span><span class="u-skel w60"></span>`,
    a: `<div class="u-stepper line"><i class="on"></i><i class="on"></i><i></i><i></i></div><div class="u-row u-between u-t"><span>Account</span><span>Team</span><span>Data</span><span>Launch</span></div><span class="u-skel w80"></span>` },
  { n: 14, title: 'Keep patterns consistent', law: 'Law of similarity',
    plain: 'if it looks the same, it should act the same.',
    before: '"Archive" and "Delete forever" both styled as red buttons.',
    after: 'red only for "Delete forever"; Archive is a normal button.',
    effect: 'no accidental deletes, no lost trust.',
    b: `<span class="u-b">Project Atlas</span><span class="u-t">Created 3 Mar, 42 tasks</span><div class="u-row"><span class="u-btn red sm">Archive</span><span class="u-btn red sm">Delete forever</span></div>`,
    a: `<span class="u-b">Project Atlas</span><span class="u-t">Created 3 Mar, 42 tasks</span><div class="u-row"><span class="u-btn sm">Archive</span><span class="u-btn red sm">Delete forever</span></div>` },
  { n: 15, title: 'Simplify what people see', law: 'Law of Pragnanz',
    plain: 'if it takes more than 5 seconds to get the screen, it is too busy.',
    before: 'a dashboard with gradients, 3 banners and 12 badges.',
    after: 'one headline number, one chart, one action.',
    effect: 'users find the value in the first visit.',
    b: `<div class="u-promo">New: AI reports</div><div class="u-promo b2">Upgrade to Pro</div><div class="u-promo b3">Webinar on Thursday</div><div class="u-busy"><span>NEW</span><span>HOT</span><span>BETA</span><span>-20%</span><span>PRO</span><span>3</span><span>LIVE</span><span>1</span><span>TOP</span><span>VIP</span><span>+5</span><span>!</span></div>`,
    a: `<span class="u-t">Revenue this month</span><span class="u-big">12,480 EUR</span><svg class="u-chart" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><path d="M0 26 L14 22 L28 24 L42 16 L56 18 L70 10 L84 12 L100 4" fill="none" stroke="#4F46E5" stroke-width="2.4" vector-effect="non-scaling-stroke"/></svg><span class="u-btn pri sm" style="align-self:flex-start">See invoices</span>` },
  { n: 16, title: 'Choose the simplest design that works', law: "Occam's razor",
    plain: 'fewer parts, fewer ways to get lost.',
    before: '"New project" reachable from 4 different buttons with 4 different names.',
    after: 'one "New project" button in one place.',
    effect: 'less to build, less to support, less to explain.',
    b: `<span class="u-b">Projects</span><div class="u-row"><span class="u-btn sm">+ New</span><span class="u-btn sm">Create</span></div><div class="u-row"><span class="u-btn sm">Add project</span><span class="u-btn sm">Start something</span></div>`,
    a: `<div class="u-row u-between"><span class="u-b">Projects</span><span class="u-btn pri sm">New project</span></div><span class="u-skel w80"></span><span class="u-skel w60"></span>` },
  { n: 17, title: 'Control attention', law: 'Selective attention',
    plain: 'people only see what is about their current goal.',
    before: '"Payment failed" shown in a colorful banner that looks like a promo.',
    after: 'the error sits inline, next to the card field, in plain text.',
    effect: 'failed payments get fixed instead of ignored.',
    b: `<div class="u-promo">Payment failed! Act now</div><span class="u-lbl">Card</span><span class="u-in">Visa 4242</span>`,
    a: `<span class="u-lbl">Card</span><span class="u-in bad">Visa 4242</span><span class="u-err">This card expired on 30 Sep. Add a new card.</span>` },
  { n: 18, title: 'Lower cognitive load', law: 'Cognitive load',
    plain: 'every thing on screen costs a bit of brain power.',
    before: 'a create form showing all 20 options at once.',
    after: '4 fields, and "Advanced options" folded underneath.',
    effect: 'more people finish creating their first item.',
    b: `<span class="u-b">New project</span><div class="u-many">${'<i></i>'.repeat(20)}</div>`,
    a: `<span class="u-b">New project</span><div class="u-many four"><i></i><i></i><i></i><i></i></div><span class="u-link">Advanced options</span>` },
  { n: 20, title: 'Do not make people remember', law: 'Working memory',
    plain: 'show it again instead of asking them to recall it.',
    before: 'step 3 of checkout asks "Confirm your plan" with no plan shown.',
    after: 'a summary box on every step: "Pro plan, 12 seats, 144 USD per month".',
    effect: 'people buy with confidence instead of going back to check.',
    b: `<span class="u-t">Step 3 of 3</span><span class="u-b">Confirm your plan</span><span class="u-btn pri sm" style="align-self:flex-start">Confirm</span>`,
    a: `<span class="u-t">Step 3 of 3</span><div class="u-card tight"><span class="u-b">Pro plan, 12 seats</span><span class="u-t">144 USD per month. <span class="u-link">Edit</span></span></div><span class="u-btn pri sm" style="align-self:flex-start">Confirm</span>` },
  { n: 21, title: 'Put essentials first and last', law: 'Serial position effect',
    plain: 'people remember the start and the end of a list.',
    before: 'settings menu sorted A to Z, with "Billing" lost in the middle.',
    after: 'the most used items first, "Log out" last.',
    effect: 'key pages get found, key tasks get done.',
    b: `<ul class="u-nav"><li>API</li><li>Appearance</li><li>Audit log</li><li>Billing</li><li>Integrations</li><li>Log out</li><li>Profile</li></ul>`,
    a: `<ul class="u-nav"><li class="on">Profile</li><li>Billing</li><li>Team</li><li>Integrations</li><li>API</li><li>Log out</li></ul>` },
  { n: 22, title: 'Show visible progress', law: 'Zeigarnik effect',
    plain: 'an unfinished task keeps calling you back.',
    before: 'a half-done setup that is lost when the tab closes.',
    after: '"Continue where you left off: 2 of 4 steps done" on the home screen.',
    effect: 'people come back to finish, which is retention you did not have to buy.',
    b: `<span class="u-b">Home</span><span class="u-t">Set up your workspace</span><div class="u-dots"><i></i><i></i><i></i><i></i></div><span class="u-btn sm" style="align-self:flex-start">Start setup again</span>`,
    a: `<span class="u-b">Continue where you left off</span><span class="u-t">2 of 4 steps done</span><div class="u-dots"><i class="ok"></i><i class="ok"></i><i></i><i></i></div><span class="u-btn pri sm" style="align-self:flex-start">Continue</span>` },
  { n: 25, title: 'Protect flow', law: 'Flow',
    plain: 'do not interrupt someone who is busy working.',
    before: 'a "Rate us" modal that pops up in the middle of writing.',
    after: 'no modal; a small, quiet note after the task is saved.',
    effect: 'users stay longer and get more done, so they stay subscribed.',
    b: `<span class="u-skel w80"></span><span class="u-skel w90"></span><div class="u-modal">Enjoying Acme? Rate us 5 stars<span class="u-row"><span class="u-btn sm">Later</span><span class="u-btn sm">Rate</span></span></div>`,
    a: `<span class="u-skel w80"></span><span class="u-skel w90"></span><span class="u-skel w70"></span><span class="u-ok" style="margin-top:auto">Saved</span>` },
  { n: 26, title: 'Accept messy input', law: "Postel's law",
    plain: 'take what people type, and clean it up yourself.',
    before: '"Invalid card number" because the user typed spaces.',
    after: 'spaces accepted and the number shown in groups of 4.',
    effect: 'fewer failed payments for silly reasons.',
    b: `<span class="u-lbl">Card number</span><span class="u-in bad mono">4242 4242 4242 4242</span><span class="u-err">Invalid card number</span>`,
    a: `<span class="u-lbl">Card number</span><span class="u-in mono">4242 4242 4242 4242</span><span class="u-ok">Visa, looks good</span>` },
  { n: 27, title: 'Prevent errors', law: 'Error prevention',
    plain: 'the best error message is the one nobody ever sees.',
    before: 'a free text date field that rejects "12/03".',
    after: 'a date picker that only allows valid dates.',
    effect: 'fewer failed forms, fewer support tickets.',
    b: `<span class="u-lbl">Start date</span><span class="u-in bad">12/03</span><span class="u-err">Invalid date</span>`,
    a: `<span class="u-lbl">Start date</span><div class="u-cal"><i class="x"></i><i class="x"></i><i class="x"></i><i></i><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="u-t">Past days can't be picked.</span>` },
  { n: 29, title: 'Move complexity into the system', law: "Tesler's law",
    plain: 'let the code do the hard part, not the user.',
    before: 'a setup screen asking for "SMTP host, port and TLS mode".',
    after: '"Connect Gmail" button, settings detected automatically.',
    effect: 'non-technical buyers can set it up alone.',
    b: `<span class="u-lbl">SMTP host</span><span class="u-in"></span><div class="u-row2"><div><span class="u-lbl">Port</span><span class="u-in"></span></div><div><span class="u-lbl">TLS mode</span><span class="u-in"></span></div></div>`,
    a: `<span class="u-b">Send email from your address</span><span class="u-btn pri sm" style="align-self:flex-start">Connect Gmail</span><span class="u-t">Settings are detected for you. <span class="u-link">Other provider</span></span>` },
  { n: 30, title: 'Teach in context', law: 'Paradox of the active user',
    plain: 'nobody reads the manual, so put the help where they click.',
    before: 'a 7-step product tour on first login.',
    after: 'an empty state that says what goes here, with one button to add it.',
    effect: 'users learn by doing and reach value on day one.',
    stat: 'Chameleon measured 72% completion for 3-step tours against 16% for 7-step ones (vendor data, directional).',
    b: `<div class="u-modal full"><span class="u-t">Tour, step 1 of 7</span><span class="u-b">Welcome to Acme!</span><span class="u-btn sm">Next</span></div>`,
    a: `<span class="u-b">No contacts yet</span><span class="u-t">Your contacts live here. Import them from a CSV or from Stripe.</span><span class="u-btn pri sm" style="align-self:flex-start">Import contacts</span>` },
];

export const allLaws = [...featured, ...compact].sort((x, y) => x.n - y.n);
