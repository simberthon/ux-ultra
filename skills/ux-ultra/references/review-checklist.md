# Review checklist

Use this to review a screen, a flow, or a UI diff before shipping. Score only the items that apply.

**Scores:** 2 = done well, 1 = partly, 0 = missing or wrong. Items marked **B** are blockers: a 0 on a blocker means the work is not ready, whatever the total.

**Before scoring,** write the primary user goal of the screen in one sentence. Judge every item against that goal.

## 1. Purpose and path
- [ ] **B** The screen has one clear purpose you can state in a sentence.
- [ ] The path to the goal has no step that could be removed, deferred, or inferred.
- [ ] **B** There is exactly one visually dominant primary action per view.
- [ ] Secondary and tertiary actions are visibly quieter.
- [ ] The most important information is first; the final action sits at the end.

## 2. States
- [ ] **B** Loading state exists and matches the final layout (skeleton or inline indicator, no full-screen spinner for small updates).
- [ ] **B** Empty state (first use) explains what goes here and has a button that fills it.
- [ ] Empty state (no results) says what was searched and offers a way out.
- [ ] **B** Error state exists for every network call.
- [ ] Partial failure: one failed widget does not blank the whole page.
- [ ] Long, dense, and overflow content (long names, 1,000 rows, missing data) is handled.
- [ ] Success state confirms what happened and offers the next step.

## 3. Feedback and speed
- [ ] Every click or keypress gets a visible response in under 100 ms.
- [ ] Waits over 1 s show progress; over 10 s show percent done and Cancel.
- [ ] Safe mutations are optimistic and roll back clearly on failure.
- [ ] Buttons cannot be double-submitted and keep their label while loading.

## 4. Forms
- [ ] **B** Every input has a visible label above it (no placeholder-only labels).
- [ ] Validation runs on blur and clears as soon as the input is fixed.
- [ ] Submit is not pre-disabled; clicking it reveals what is missing.
- [ ] **B** User input survives every error, including server errors and expired sessions.
- [ ] Inputs use the right `type`, `inputmode`, and `autocomplete`; paste is never blocked.
- [ ] Only the fields that are truly needed are asked; defaults are prefilled.
- [ ] Submit sits right under the last field and uses a specific verb.

## 5. Errors and destructive actions
- [ ] **B** Error messages say what happened and how to fix it, in plain words, next to the problem.
- [ ] Reversible actions use undo instead of a confirm dialog.
- [ ] Irreversible actions confirm with the object and consequence named on the button.
- [ ] Destructive actions are styled as destructive and kept apart from primary actions.
- [ ] 404, 403, and 500 screens offer a way forward.

## 6. Navigation and structure
- [ ] The user can tell where they are (active nav item, page title, breadcrumbs when deep).
- [ ] **B** Links are `a` elements, actions are `button` elements.
- [ ] Filters, tabs, sort, and pagination live in the URL and survive refresh.
- [ ] Conventions are followed (sidebar, avatar menu top right, Cmd/Ctrl+K if there is a palette).
- [ ] One word per concept across navigation, headings, and buttons.

## 7. Accessibility
- [ ] **B** The main task can be done with the keyboard only, with a visible focus ring.
- [ ] **B** Text contrast is at least 4.5:1; UI parts at least 3:1.
- [ ] Targets are at least 24 by 24 px (44 on touch).
- [ ] Icon-only buttons have accessible names.
- [ ] Color is never the only signal.
- [ ] Modals trap focus and return it on close; Esc closes them.
- [ ] Async updates are announced with `aria-live`.
- [ ] `prefers-reduced-motion` is honored.

## 8. Visual hierarchy and consistency
- [ ] Hierarchy reads in grayscale: what to look at first is obvious.
- [ ] Spacing and type come from a scale; related items are grouped by proximity.
- [ ] Similar components look and behave the same; accent color is only for actions.
- [ ] Every interactive component has hover, focus, pressed, disabled, and loading states, and hover does not shift layout.

## 9. Mobile
- [ ] Layout works at 320 px without horizontal scroll (tables become cards or scroll with a frozen first column).
- [ ] No hover-only actions.
- [ ] Inputs are at least 16 px; the primary action is within thumb reach.

## 10. Copy
- [ ] Buttons are verb plus object.
- [ ] No jargon, internal names, or raw codes.
- [ ] Success messages name the object; empty states have headline, value line, and action.

## 11. Ethics and trust (when money, data, or consent is involved)
- [ ] **B** No pre-checked consent or paid add-ons; no fake urgency; no confirmshaming.
- [ ] **B** Full price, renewal date, and trial end are shown before commitment.
- [ ] Cancel and data export are self-serve.

## 12. AI features (when present)
- [ ] Output streams, and there is a Stop button.
- [ ] Output can be edited, regenerated, and undone.
- [ ] Factual claims cite sources.
- [ ] Actions the AI takes for the user show a preview and need approval.

## Output format

| Area | Item | Score | Evidence | Fix |
|---|---|---|---|---|
| States | Empty state (first use) | 0 | `Dashboard.tsx:42` renders "No data" | Add headline, value line, "Create first project" button |

Then list the fixes in order: blockers first, then by user impact. Name the rule each fix comes from. End with the total (sum of scores over the maximum for applicable items) and a one-line verdict: **ship**, **ship after blockers**, or **rework**.
