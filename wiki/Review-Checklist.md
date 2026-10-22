# Review checklist

Run it with `/ux-review <file, route, or diff>`, or ask "Review this screen with UX Ultra". The full checklist is in [`review-checklist.md`](../skills/ux-ultra/references/review-checklist.md).

## How scoring works

- Each applicable item scores **2** (done well), **1** (partly), or **0** (missing or wrong).
- Items marked **B** are blockers. A 0 on any blocker means the work is not ready, whatever the total.
- The reviewer first writes the screen's primary goal in one sentence, then judges every item against it.
- The verdict is one of **ship**, **ship after blockers**, or **rework**.

## The twelve areas

1. Purpose and path
2. States (loading, empty, no results, error, partial, overflow, success)
3. Feedback and speed
4. Forms
5. Errors and destructive actions
6. Navigation and structure
7. Accessibility
8. Visual hierarchy and consistency
9. Mobile
10. Copy
11. Ethics and trust
12. AI features

## The blockers

- The screen has one clear purpose.
- Exactly one dominant primary action per view.
- Loading, empty (first use), and error states exist.
- Every input has a visible label.
- User input survives every error.
- Error messages say what happened and how to fix it.
- Links are links, buttons are buttons.
- The main task works with the keyboard and focus is visible.
- Text contrast is at least 4.5:1.
- No pre-checked consent, no fake urgency, no confirmshaming.
- Full price and renewal terms are shown before commitment.

## Example output

| Area | Item | Score | Evidence | Fix |
|---|---|---|---|---|
| States | Empty state (first use) | 0 **B** | `Dashboard.tsx:42` renders "No data" | Headline, value line, "Create first project" button |
| Forms | Label above every input | 0 **B** | `InviteForm.tsx:18` uses placeholder "Email" only | Add `<label>` above, keep placeholder as an example |
| Errors | Input survives errors | 1 | Fields kept on 400, cleared on 500 (`useInvite.ts:31`) | Keep form state on every failure |
| Hierarchy | One primary action | 2 | "Send invite" is the only solid button | None |

Fixes, in order: (1) empty state, Nielsen 1 and peak-end; (2) labels, Norman signifiers and WCAG 3.3.2; (3) keep input on 500, law 28.

Score 21 of 34, verdict: **ship after blockers**.
