# SaaS playbook

Rules for the surfaces every SaaS product has. Each section ends with the mistake AI coding tools make by default, so you can check for it on purpose. Sources are listed per section and in `sources.md`.

Benchmarks from vendors (onboarding completion rates) are directional, not laws. Legal notes on cancellation and email were current in October 2026; check them again before you rely on them for compliance.

## 1. Onboarding and time-to-value

1. Define one **activation milestone** before you build onboarding: the first action that delivers core value (for example "first invoice sent" or "first teammate invited"). It must predict retention (activated users retain at least 2x better) and the team must be able to influence it. Do not use "signed up" or "completed profile" as the milestone. (Lenny's Newsletter: median activation is 25%, average 34%.)
2. Never ship a blank canvas. Seed each new workspace with a template, realistic sample data or a suggested first project, and label sample data so users can delete it in one click. Never use "lorem ipsum".
3. Every empty state needs three parts: (a) a status line saying why it is empty ("No invoices yet" or "No results for 'acme' in the last 30 days"), (b) a one-line learning cue about what will appear here, and (c) a primary button that fills it ("Create invoice", "Import CSV"). (NN/g)
4. Make the checklist short: 3 to 5 items, each tied to an outcome ("Send your first campaign", not "Visit the Campaigns tab"). Show progress, let users dismiss it, and pre-check items the user has already done. Chameleon reports 72% completion for 3-step tours versus 16% for 7-step tours, and the median checklist completion across 188 SaaS products is about 10%.
5. Ask at most 1 or 2 personalization questions at signup (role or goal) and only if the answer visibly changes what the user sees next. Trello saw a 36% activation lift from personalization (growth.design).
6. Put value before asks. Do not show a paywall, a credit-card request or an "invite your team" prompt before the user has had the first "aha" moment (growth.design, Headspace and Blinkist case studies).
7. Prefer interactive, in-context guidance (a single nudge on the real UI) over passive multi-step tours or videos. Interactive tours drive about 42% more feature adoption (Chameleon).
8. Use progressive disclosure. Reveal advanced settings only once the user has shown they need them (the Stripe dashboard is the usual reference). (NN/g progressive disclosure)
9. Instrument the funnel: signup, each checklist step, the activation event and day-7 return. Track time-to-first-value as a first-class metric.
10. For high-value or complex products, consider concierge onboarding (Superhuman ran 30-minute 1:1 calls) and use those sessions as a research channel.

**Common AI-generated mistake:** a 6-step modal carousel of feature marketing ("Welcome! Here's the sidebar...") that sits in front of an empty dashboard with "No data" and no call to action.

Sources: https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate · https://www.nngroup.com/articles/empty-state-interface-design/ · https://userpilot.medium.com/customer-onboarding-checklist-completion-rate-2024-benchmark-report-8ebabebefb1f · https://www.chameleon.io/blog/user-onboarding-best-practices · https://www.appcues.com/blog/user-onboarding-best-practices · https://growth.design/case-studies/trello-user-onboarding · https://growth.design/case-studies/headspace-user-onboarding · https://review.firstround.com/superhuman-onboarding-playbook/ · https://www.nngroup.com/articles/progressive-disclosure/

---

## 2. Navigation and information architecture

1. On desktop, use a persistent left vertical sidebar for primary navigation. Keep it visible (do not put it behind a hamburger menu), use specific labels that start with the keyword, and limit top-level items to about 7 core destinations. Group the rest under clear section headings. (NN/g vertical nav)
2. Always show where the user is: highlight the active nav item, set an accurate `<title>` per view, and show breadcrumbs for anything nested more than 2 levels deep.
3. Breadcrumbs reflect the hierarchy, not the browsing history. Make every crumb except the current page a link, put them above the page title, and truncate the middle on mobile instead of wrapping. (NN/g breadcrumbs)
4. Ship a command palette on Cmd+K (macOS) and Ctrl+K (elsewhere). It must:
   - open from every screen, including from inside text fields;
   - be the single hub for all actions, not a mix of K and P palettes;
   - use fuzzy, case-insensitive matching that understands synonyms;
   - show a "Recent" group when the input is empty;
   - rank results by the current context and hide actions that do not apply;
   - show each command's keyboard shortcut next to it.
   (Superhuman)
5. Detect the platform and show the matching shortcut hint (`⌘K` or `Ctrl K`). Never hard-code Apple symbols for Windows users.
6. Make the URL the state. Filters, tabs, sort, pagination, open panels and selected records must all be deep-linkable and survive refresh and Back/Forward. Restore scroll position on Back. (Vercel)
7. Use `<a>`/`<Link>` for navigation and `<button>` for actions, never the other way round. Middle-click and Cmd-click must open a new tab.
8. Global search must cover entities (records, people, docs) as well as pages. Show the type of each result, highlight the match, and give zero-result searches a recovery path (suggestions, "create X", broaden filters).
9. No dead ends. Every screen, including 404s, errors and empty states, offers a next step. (Vercel)
10. Keep nouns consistent across nav, headings and buttons. If the sidebar says "Projects", do not call them "Workspaces" on the page.

**Common AI-generated mistake:** nav items built as `<div onClick>` or `<button>` with `router.push`, so links cannot be opened in a new tab. A related one: filter and tab state kept only in `useState`, so it is lost on refresh and cannot be shared.

Sources: https://www.nngroup.com/articles/vertical-nav/ · https://www.nngroup.com/articles/breadcrumbs/ · https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/ · https://www.setproduct.com/blog/command-palette-ui-design-guide · https://vercel.com/design/guidelines · https://mobbin.com (pattern reference library for real nav and search screens)

---

## 3. Forms and inputs

1. Every control gets a persistent, visible `<label>` above the field. Placeholders are only examples (`+1 (123) 456-7890`), never the label. In Baymard testing, inline-label fields made users delete their input just to see what the field was. (Baymard, Vercel)
2. Validate on blur, not on keystroke. Never show an error on an empty field the user has just entered. After a field has been flagged, re-validate on every keystroke so the error clears as soon as the input is fixed ("reward early, punish late"). (Smashing, Baymard)
3. On submit, show every error next to its field, focus the first invalid field, and announce errors with `aria-live="polite"`. Keep all user input. Never clear the form.
4. Do not pre-disable the submit button. Keep it enabled so that clicking it reveals what is missing. Disable it only while the request is in flight, and show a spinner while keeping the button label. (Vercel)
5. Cut fields hard. Baymard found most checkouts need about 8 fields, against an average of 11.3. Use a single "Full name" field, put "Address line 2" behind a link, and default "billing = shipping". Mark both required and optional fields explicitly.
6. Set the correct `type`, `inputmode` and `autocomplete` attributes and a meaningful `name`. Disable `spellcheck` on emails, codes and usernames. Never block paste. Let pasted one-time codes fill all the code boxes.
7. Do not block typing with hard input masks. Accept any input, normalize it (trim, strip spaces from card numbers) and show formatting as feedback. Use masks only for fixed-format values, and let paste work with them.
8. Use smart defaults: preselect the most common option, infer timezone, currency and locale, and prefill anything you already know.
9. Autosave long or settings-style forms, with a visible "Saved" or "Saving…" status. Use an explicit Save button for transactional forms (payments, invites). Warn before navigation when unsaved changes would be lost.
10. Enter submits single-field forms. In textareas, Cmd/Ctrl+Enter submits and Enter adds a new line. Use `font-size` of at least 16px on mobile inputs so iOS does not zoom. Autofocus the single primary input on desktop, and rarely on mobile.

**Common AI-generated mistake:** floating or placeholder-only labels, plus a Submit button that stays `disabled` until every field passes regex validation that runs on each keystroke. The user sees "Invalid email" after typing one character and never learns why the button is dead.

Sources: https://baymard.com/blog/mobile-forms-avoid-inline-labels · https://baymard.com/blog/required-optional-form-fields · https://baymard.com/blog/checkout-flow-ux-optimization · https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/ · https://vercel.com/design/guidelines

---

## 4. Tables and dashboards

1. Design each table for the four table tasks: find records that match criteria, compare data, view/edit/add a single row, and take actions on records. (NN/g)
2. Offer a density toggle (compact, default, comfortable). Make the header row sticky and freeze the first (identifier) column on horizontal scroll. Right-align numbers and use `font-variant-numeric: tabular-nums`.
3. Make column headers sortable, with a visible sort indicator and `aria-sort`. Filters live in the URL, show as removable chips, and include a "Clear all". Show the result count ("128 of 2,431").
4. Bulk actions: a checkbox column, a header checkbox for "select page", and a "Select all 2,431" escalation link. Show a sticky action bar with the count ("3 selected"). Destructive bulk actions name the count in the button ("Delete 3 projects").
5. Design all states for every table and widget: loading, empty (first use), empty (no results for filters, with a "Clear filters" action), partial error (one widget failed and the rest still render) and dense or long content. (Vercel: "All states designed")
6. Use skeletons for full-page or region loads that take about 1 to 10 s. A skeleton must match the final layout exactly to avoid layout shift. Use a spinner only for small modules. Show nothing for loads under about 1 s. Use a progress bar with an estimate for anything over 10 s. Never put a skeleton on uploads or conversions. (NN/g skeleton screens)
7. Add a show-delay of about 150 to 300 ms and a minimum visible time of about 300 to 500 ms to loaders so they do not flash. (Vercel)
8. Virtualize long lists (`content-visibility: auto` or a virtualizer). Paginate or use cursor loading for server data, and keep the page number in the URL.
9. Dashboards open on the 3 to 5 numbers that drive decisions, each with a comparison (vs. last period or vs. target) and a timestamp ("Updated 2 min ago"). Every chart must click through to the underlying rows.
10. Never use color as the only status signal. Pair it with a text label or icon ("Failed", "Active").

**Common AI-generated mistake:** a dashboard full of decorative KPI cards and charts with no comparison baseline or drill-down, a generic centered spinner instead of a layout-matching skeleton, and "No data" with no action when filters return nothing.

Sources: https://www.nngroup.com/articles/data-tables/ · https://www.nngroup.com/articles/skeleton-screens/ · https://vercel.com/design/guidelines · https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/ · https://stephaniewalter.design/blog/essential-resources-design-complex-data-tables/

---

## 5. Feedback, loading and perceived performance

1. Respect the response-time limits. Under 0.1 s feels instant, so no indicator is needed. Up to 1 s keeps flow but may need subtle feedback. Over 1 s, show an indicator. Over 10 s, show percent-done and a Cancel button. (NN/g)
2. Use optimistic updates for likely-to-succeed mutations (toggle, rename, reorder, like, archive). Update the UI immediately, reconcile on response, and roll back with an inline error if it fails. (Vercel)
3. Budget mutations: POST, PATCH and DELETE should complete in under 500 ms. Move work off the request path when they cannot. (Vercel)
4. Prefer undo over confirm for reversible actions. Do it, show a toast saying "Project archived · Undo", and keep the undo window open for about 5 to 10 s. (NN/g, Vercel)
5. Toasts are for low-urgency, non-blocking confirmations only. Show them for about 4 to 6 s, pause the timer on hover and focus, announce them through `aria-live="polite"`, and never put the only copy of important information or the only path to an action in a toast.
6. Use the right channel. An indicator sits on the element that changed (a badge or a "Saved" check next to the field). A validation message sits next to the input. Notifications are reserved for system events the user was not watching. (NN/g)
7. Loading buttons keep their label and add a spinner, and they cannot be double-submitted. Add an ellipsis to in-progress labels ("Saving…").
8. Preload above-the-fold content only. Set explicit image dimensions (no CLS), preconnect to CDN origins, and subset and preload critical fonts.
9. Never animate frequent, keyboard-driven actions (palette open, list navigation). They must feel instant. (Kowalski, Freiberg)

**Common AI-generated mistake:** every mutation shows a full-screen spinner, waits for the server, and then fires a green "Success!" toast. That makes the app feel slow and the toast says nothing ("Success" at what?).

Sources: https://www.nngroup.com/articles/response-times-3-important-limits/ · https://www.nngroup.com/articles/indicators-validations-notifications/ · https://vercel.com/design/guidelines · https://rauno.me/craft/interaction-design

---

## 6. Errors and destructive actions

1. Error message formula: **what happened + why (if known) + how to fix it**, in plain language, at the point of failure. "Card declined by your bank. Try a different card or contact your bank." not "Error 402". (NN/g error guidelines, heuristic #9)
2. Do not blame the user ("You entered an invalid…"), do not use humor on serious failures, and do not show raw codes or stack traces. Put the technical ID behind "Details" so support can use it.
3. Make errors visible through redundant cues: an icon, text and a border or color. Do not rely on color alone. Use a modal only for critical, blocking errors.
4. Preserve user input on every error, including server 500s, timeouts and expired sessions. Re-authenticate in place and replay the action.
5. Prevent errors before reporting them: constrain inputs, use pickers for dates, warn about likely slips ("You mentioned an attachment but none is attached"). (NN/g heuristic #5)
6. Confirm only actions that are both serious and irreversible (deleting data, spending money). Routine confirms train users to click through without reading. (NN/g confirmation dialogs)
7. Confirmation dialogs are specific: the title names the object and consequence ("Delete 'Q3 Report' and its 14 comments?"), the buttons are verbs ("Delete report" / "Keep report"), and the default focus is on the safe option. Never use "Are you sure?" with Yes/No.
8. For catastrophic actions (deleting a workspace, the production DB or an account), require typing the resource name. Also offer a soft-delete grace period ("Restorable for 30 days") where you can.
9. Style destructive buttons as destructive (red or danger variant), separate them from primary actions, and put them in a clearly labelled "Danger zone".
10. Every error screen, including 404, 403 and 500 pages, has a recovery path: retry, go back, contact support, or switch account or workspace for 403s.

**Common AI-generated mistake:** `catch (e) { toast.error("Something went wrong") }` everywhere, combined with a `window.confirm("Are you sure?")` on harmless actions and no undo on the actually destructive ones.

Sources: https://www.nngroup.com/articles/error-message-guidelines/ · https://www.nngroup.com/articles/error-messages-scoring-rubric/ · https://www.nngroup.com/articles/confirmation-dialog/ · https://www.nngroup.com/articles/ten-usability-heuristics/

---

## 7. Settings, permissions, billing, pricing and paywalls

1. Organize settings into account (personal), workspace/org, and billing, each with a searchable left sub-nav and deep links to individual settings. Toggles take effect immediately with an inline "Saved". Text fields autosave on blur or have a section-level Save button.
2. Permissions: show disabled controls along with the reason ("Only admins can change billing · Ask an admin"), so the feature is not silently hidden. On a 403 page, name the required role and say who to ask.
3. Use a small number of named roles (Owner, Admin, Member, Viewer) with a visible permission matrix. Show who has access next to every share action.
4. Pricing page: 3 or 4 plans, highlight one recommended plan, use a monthly/annual toggle with the saving shown in money terms, and show a feature comparison table. Show the price in the user's currency with consistent decimals (0 or 2, never mixed). (Vercel copy rules)
5. Design paywalls as contextual upgrade prompts at the moment of need. State what the user just tried, what the plan unlocks, and the exact price. Always offer a way to dismiss and keep working on the current plan. Do not paywall before the user has experienced value (see §1).
6. Before the user commits, show trial end dates, the renewal price, and what happens to their data when they downgrade. Send a reminder before a trial converts to paid.
7. Cancellation must be as easy as signup: a self-serve "Cancel subscription" in billing settings, at most one optional retention offer or survey, and a clear end-of-access date. Do not require a phone call or chat. Context: the FTC "click-to-cancel" rule was vacated by the 8th Circuit in July 2025 and the FTC restarted rulemaking in 2026. ROSCA enforcement continues. Germany has required a cancellation button since 2022 (§312k BGB), and the EU withdrawal button has been mandatory since 19 June 2026. Treat easy cancel as a legal requirement in practice.
8. Anti-dark-patterns: no pre-checked add-ons, no confirmshaming ("No thanks, I hate saving money"), no fake countdown timers, no hidden fees revealed at the last step, and no extra cancel steps hidden in a maze (growth.design's Temu teardown shows these tactics).
9. Show usage against limits before users hit them ("8 of 10 seats used"), with an inline upgrade link. When a limit is reached, degrade gracefully (read-only), never through data loss.
10. Invoices and receipts must be downloadable from billing settings, with editable billing details (VAT ID, address).

**Common AI-generated mistake:** a "Contact us to cancel" link, an upgrade modal that cannot be closed and fires on login, and admin-only buttons that simply disappear for members, who then think the feature does not exist.

Sources: https://vercel.com/design/guidelines · https://www.cooley.com/news/insight/2025/2025-07-11-click-to-cancel-just-got-cancelled-eighth-circuit-vacates-entirety-of-ftcs-negative-option-rule · https://www.gibsondunn.com/ftc-restarts-negative-option-rulemaking-after-eighth-circuit-vacatur-enforcement-under-rosca-continues/ · https://www.twobirds.com/en/insights/2026/germany/mandatory-withdrawal-button-upcoming-in-germany-key-implications-for-online-sellers · https://www.insideprivacy.com/consumer-protection/digital-fairness-act-series-topic-4-digital-subscriptions/ · https://growth.design/case-studies/temu-onboarding-psychology

---

## 8. Notifications and email

1. Every notification must be actionable or about something the user explicitly follows. If it is neither, log it to an activity feed instead.
2. Choose the channel by urgency. In-app indicators and inbox for normal events. Email for things the user must act on while away. Push or SMS only for time-critical, user-opted-in events.
3. Give users per-category and per-channel preferences (in-app, email, push), plus mute, snooze, digest/batching and quiet hours. Link to these preferences from every notification email.
4. In-app inbox: grouped by object, honest unread counts, "Mark all as read", and each item deep-links to the exact object and state.
5. Batch noisy events ("12 new comments on 'Launch plan'") instead of sending one email per event. Default new users to sensible, low-volume settings.
6. Bulk email requirements (Gmail and Yahoo since 2024, still in force): SPF + DKIM + DMARC, a one-click unsubscribe header (`List-Unsubscribe` + `List-Unsubscribe-Post`, RFC 8058) on marketing mail, unsubscribes honored within 2 days, and a spam rate under 0.3% (aim under 0.1%).
7. Transactional emails (receipts, password reset, security) are separate from marketing streams and are never blocked by marketing opt-outs. Still let users manage non-critical transactional categories.
8. Email content: the subject says what happened and to what ("Maya commented on 'Q3 plan'"), there is one primary CTA, a plain-text fallback, and nothing the user needs is available only as an image.
9. Use Intercom-style subscription types so users can opt out of one stream without opting out of everything.

**Common AI-generated mistake:** one email per event with a generic subject ("You have a new notification"), no preferences link, and marketing and transactional mail sent from the same stream, so unsubscribing also kills password resets.

Sources: https://postmarkapp.com/guides/transactional-email-best-practices · https://www.saasui.design/blog/saas-notification-toast-ux-patterns · https://resend.com/blog/gmail-and-yahoo-bulk-sending-requirements-for-2024 · https://www.intercom.com/help/en/articles/5537581-include-unsubscribed-contacts-in-your-email-audience · https://www.nngroup.com/articles/indicators-validations-notifications/

---

## 9. Microcopy and UX writing

1. Buttons are specific verbs plus an object: "Save API key", "Send invoice", "Delete project". Never use "OK", "Submit", "Continue" or "Yes" where a verb fits. (Vercel: "Save API Key" not "Continue")
2. Use the active voice and the second person ("You", "Your projects"). Write in the imperative for instructions ("Install the CLI").
3. Error formula: what happened + how to fix it, with positive framing and no blame. Validation copy says what to do ("Enter a date after today"), not what is wrong ("Invalid date").
4. Keep nouns consistent across the product, with a small glossary, so one concept has one word.
5. Use numerals for counts ("8 deployments"), a space between number and unit ("10 MB", with a non-breaking space), locale-aware dates, numbers and currency, and relative times with an absolute tooltip.
6. Typography details: use the `…` character, end labels that open further input with it ("Rename…"), and use curly quotes. Placeholders are examples, not instructions.
7. Empty-state copy has a headline (what this place is for), one sentence of value, and one CTA. Do not use cute filler.
8. Pick one casing convention and apply it everywhere (Vercel uses Title Case for headings and buttons and sentence case for marketing; many SaaS products use sentence case everywhere).
9. Front-load the keyword in labels, nav items and headings so they scan in an F-pattern. Cut words until meaning breaks.
10. Confirmation and destructive copy names the object and the consequence ("This permanently deletes 14 files. This can't be undone.").

**Common AI-generated mistake:** "Oops! Something went wrong 😅" with a "Submit" button, mixed casing ("Create project" next to "Delete Project"), and the same entity called "workspace", "team" and "org" on different screens.

Sources: https://vercel.com/design/guidelines · https://www.nngroup.com/articles/error-message-guidelines/ · https://www.nngroup.com/articles/ten-usability-heuristics/

---

## 10. Accessibility essentials (WCAG 2.2 AA baseline)

1. Use semantic HTML before ARIA: `<button>`, `<a>`, `<label>`, `<nav>`, `<main>`, a heading hierarchy, and a "Skip to content" link. (Vercel)
2. Everything works with the keyboard. Follow WAI-ARIA APG patterns for menus, dialogs, tabs and comboboxes. Trap focus in modals and return it to the trigger on close.
3. Show a visible focus ring with `:focus-visible`, and do not let focus be obscured by sticky headers or banners (WCAG 2.4.11).
4. Pointer targets are at least 24×24 CSS px (WCAG 2.5.8), and at least 44 px on touch. Expand the hit area beyond small visuals. Make checkbox and label one clickable target.
5. Text contrast is at least 4.5:1 (3:1 for large text and UI components). Hover, active and focus states increase contrast. Never use color alone to signal state.
6. Icon-only buttons have an `aria-label`. Decorative icons are `aria-hidden`. Charts have text summaries and colorblind-safe palettes.
7. Announce async updates (toasts, validation, "3 results") with `aria-live="polite"`.
8. Every drag interaction has a single-pointer, non-drag alternative (WCAG 2.5.7), and every gesture has a click or keyboard alternative.
9. Authentication does not require a cognitive test (WCAG 3.3.8). Allow paste and password managers, and support passkeys and magic links.
10. Never disable zoom. Layouts must reflow at 320 px width and 200% zoom. Honor `prefers-reduced-motion` and `prefers-color-scheme`.

**Common AI-generated mistake:** `outline: none` with no replacement, clickable `<div>`s, icon buttons with no accessible name, and modals that do not trap or restore focus.

Sources: https://vercel.com/design/guidelines · https://dequeuniversity.com/resources/wcag-2.2/ · https://www.w3.org/WAI/standards-guidelines/wcag/ · https://www.w3.org/WAI/ARIA/apg/

---

## 11. Mobile and responsive

1. Design mobile as a real context, not a squeezed desktop. Identify the 2 or 3 tasks mobile users actually do (approve, reply, check status) and make them first-class.
2. On mobile, collapse the sidebar into a bottom tab bar (up to 5 items) or a drawer. Keep the primary action reachable by the thumb.
3. Touch targets are at least 44×44 px with spacing between them. Set `touch-action: manipulation` to avoid double-tap zoom delay. (Vercel)
4. Turn wide tables into cards or a prioritized-columns view, keeping the identifier and status visible, with horizontal scroll as a last resort and a frozen first column.
5. Inputs use `font-size` of at least 16px, the correct `inputmode`, and `autocomplete`. Do not autofocus on mobile (it pops the keyboard).
6. Respect safe areas (`env(safe-area-inset-*)`). Use `overscroll-behavior: contain` in drawers and modals, and use bottom sheets instead of centered modals.
7. Never rely on hover. Every hover-revealed action needs a visible or long-press or menu equivalent.
8. Test at 320, 375, 768, 1280 and ultra-wide (zoom out to 50%), and on real iOS Safari, including Low Power Mode. (Vercel)
9. Breadcrumbs on mobile show only the parent link ("‹ Projects") instead of a tiny wrapping trail. (NN/g)

**Common AI-generated mistake:** desktop tables that overflow the viewport, hover-only row actions, and a 12px input that makes iOS zoom on focus.

Sources: https://vercel.com/design/guidelines · https://www.nngroup.com/articles/breadcrumbs/ · https://baymard.com/blog/mobile-forms-avoid-inline-labels

---

## 12. Motion and animation

1. Animate only to clarify cause and effect, spatial relationships or state change, or for deliberate, rare delight. When in doubt, do not animate. (Vercel "necessity check", Kowalski: "you don't need animations")
2. Never animate high-frequency or keyboard-initiated actions (command palette, list navigation, tab switching used hundreds of times a day). (Kowalski, Freiberg)
3. Durations: keep UI motion under 300 ms. Micro-interactions take 100 to 150 ms, dropdowns, popovers and tooltips 150 to 250 ms, and modals and drawers 200 to 300 ms. Material 3 tokens: short 50-200 ms, medium 250-400 ms, long 450-600 ms for large transitions only.
4. Easing: use ease-out (or a strong custom ease-out cubic-bezier) for elements entering or responding to the user. Use ease-in-out for elements moving on screen. Avoid linear except for progress and spinners. The built-in CSS `ease-out` is weak, so prefer a custom curve such as M3 emphasized-decelerate `cubic-bezier(0.05, 0.7, 0.1, 1)`.
5. Animate only `transform` and `opacity` (compositor-friendly). Never use `transition: all`. List the properties explicitly. (Vercel, Kowalski)
6. Popovers and dropdowns scale from their trigger (`transform-origin` at the anchor), starting from `scale(0.95)` with opacity, never from `scale(0)` or from the center.
7. Animations must be interruptible and input-driven. Gestures respond during the drag, not after it. A destructive gesture commits only on completion. (Freiberg)
8. Honor `prefers-reduced-motion: reduce` by replacing movement with opacity crossfades or no animation. Do not simply remove feedback.
9. Implementation preference: CSS, then the Web Animations API, then a JS library. Use springs for gesture-driven or interruptible motion.
10. Do not autoplay non-essential motion. Loops longer than 5 s need pause controls.

**Common AI-generated mistake:** `transition: all 0.5s ease` on everything, fade-and-slide-up on every card at page load, and modals that zoom from `scale(0)` in the center with no reduced-motion fallback.

Sources: https://emilkowal.ski/ui/great-animations · https://emilkowal.ski/ui/building-an-animation-course · https://rauno.me/craft/interaction-design · https://vercel.com/design/guidelines · https://m3.material.io/styles/motion/easing-and-duration/tokens-specs

---

## 13. AI features UX

1. Say what the AI can and cannot do, and how well. Put capability hints and example prompts in the empty state, plus a short caveat where errors are likely. (HAX G1 and G2, Shape of AI "Wayfinders" and "Caveat")
2. Stream output token by token. Show a stop button while it generates, a visible "thinking or working" state for tool calls ("Searching 3 sources…"), and keep partial output if the user stops it.
3. Make output editable and correctable. Allow inline edit, regenerate, partial regenerate (rewrite only this section) and "make shorter or longer" (NN/g "accordion editing"). Let users quote a part of a response into the next prompt ("apple picking"). (HAX G9)
4. Cite sources inline for any factual or retrieval-based claim, with links to the exact passage. Show which files or connectors were used. (Shape of AI "Citations", "References")
5. Calibrate trust; do not maximize it. Show uncertainty when it changes the user's decision, using categorical labels or alternatives rather than raw percentages, and test the display with users. (PAIR explainability and trust)
6. Keep a human in the loop for consequential actions. Show an action plan or preview diff before the AI writes, sends, deletes or spends, and require explicit approval. Make every AI action undoable. (Shape of AI "Action plan", "Verification")
7. When the request is ambiguous, ask a clarifying question or narrow the scope instead of producing a long generic answer. (HAX G10, NN/g)
8. Make AI easy to invoke (inline actions, a Cmd+K entry, contextual suggestions) and easy to dismiss. Never auto-insert AI content that the user has to delete. (HAX G7 and G8)
9. Disclose AI-generated content with a label or icon, offer thumbs up/down plus an optional reason (HAX G15), and give global controls over memory and data use (HAX G17, Shape of AI "Memory", "Data ownership").
10. Show cost or quota where usage is metered ("Uses 3 credits"). Notify users when model behavior or capabilities change (HAX G18), and adapt cautiously (G14).

**Common AI-generated mistake:** a chat box bolted onto the app that blocks with a spinner until the full answer arrives, has no stop button, no citations, and no edit or regenerate controls, and takes actions without a preview.

Sources: https://www.microsoft.com/en-us/haxtoolkit/library/ · https://pair.withgoogle.com/chapter/explainability-trust/ · https://pair.withgoogle.com/guidebook/ · https://www.shapeof.ai/ · https://www.nngroup.com/articles/accordion-editing-apple-picking/ · https://www.nngroup.com/articles/response-outlining/

---

## 14. Metrics and research loop

1. Use Google's HEART framework (Happiness, Engagement, Adoption, Retention, Task success) and pick only the dimensions relevant to the feature. Map each through **Goals, then Signals, then Metrics** before writing tracking code. (Rodden, Hutchinson, Fu, Google)
2. Track per feature: adoption (percentage of active users who used it within N days), task success (completion rate, time on task, error rate), and retention of users who adopted it versus those who did not.
3. Make activation (see §1) and time-to-value the north-star onboarding metrics, and check that activation actually predicts retention (at least 2x).
4. Run small qualitative usability tests often. Five users per distinct user group finds about 85% of problems, and three rounds of 5 beat one round of 15. Use about 20 users for quantitative benchmarks and about 15 for card sorting. (NN/g)
5. Write tasks as realistic scenarios ("Invite your accountant so they can see invoices"), not instructions ("Click Settings > Members"). Measure success, failures and where users hesitate.
6. Measure Product-Market Fit with the Sean Ellis question ("How would you feel if you could no longer use X?"). Segment by the "very disappointed" group and split the roadmap between doubling down on what those users love and fixing what holds back the users on the fence (Superhuman went from 22% to 58%).
7. Audit zero-result searches, rage-clicks, error-rate by screen and abandoned flows. These are where the UX debt is.
8. Run a heuristic review against the NN/g 10 heuristics before user testing, so the 5 participants are not spent on obvious bugs.
9. Shape work before building it (Shape Up): fix the appetite (time budget) and sketch at the right level of abstraction (breadboards or fat-marker sketches, rough but solved and bounded). Do not hand over pixel-perfect wireframes or vague one-liners.
10. Close the loop: ship, measure against the stated Goal, then keep, iterate or remove. Remove features that fail adoption instead of adding onboarding tours for them.

**Common AI-generated mistake:** tracking only pageviews and button clicks with no defined goal, calling a feature "successful" because it shipped, and treating a single user's feedback as a finding.

Sources: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/ · https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ · https://www.nngroup.com/articles/ten-usability-heuristics/ · https://basecamp.com/shapeup/1.1-chapter-02 · https://saasclub.io/podcast/rahul-vohra-superhuman-342/ · https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate
