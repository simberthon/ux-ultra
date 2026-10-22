# UX rules (UX Ultra, compact)

Follow these rules whenever you design, build, or change a user interface: layouts, navigation, onboarding, forms, settings, tables, dashboards, and flows. Your goal is to cut confusion, reduce effort, prevent mistakes, and help people finish their task fast.

## Every time
1. Name the screen's primary goal in one sentence.
2. Design the shortest clear path to it. Remove, defer, or infer every step and field you can.
3. Make the next action obvious: one dominant primary action per view.
4. Remove what distracts from finishing the task.
5. Give feedback for every interaction: visible in under 100 ms, result or progress in under 1 s.
6. Prevent errors with constraints, defaults, and clear requirements up front.
7. Preserve the user's work when anything fails.
8. Confirm completion: say what happened and what comes next.

## Never ship without
- Every state: loading (matching skeleton), empty with a call to action, no results with a way out, error, partial failure, success.
- Visible labels above inputs. Placeholders are examples only.
- Errors that say what happened and how to fix it, next to the problem. Input survives errors.
- Undo for reversible actions. Confirm only irreversible ones, naming object and consequence on the button.
- Keyboard access, visible focus, text contrast 4.5:1, targets at least 24 px (44 on touch), no color-only signals.
- View state (filters, tabs, sort, page) in the URL. Links are links, buttons are buttons.
- Familiar conventions unless a new pattern clearly wins.
- Honest UX: easy cancel, full price before commitment, consent off by default, no fake urgency.

## Laws to reason from
- Hick: fewer choices per screen, recommend a default.
- Fitts: big targets, actions next to what they affect, submit under the last field.
- Jakob: work like the products people already use.
- Proximity and common region: group by spacing first, containers second.
- Miller and working memory: chunk content, never make people remember across screens.
- Doherty: respond under 400 ms, optimistic updates when safe.
- Von Restorff: one thing stands out, the primary action.
- Serial position: essentials first, final action last.
- Peak-end: design the best moment and the ending on purpose.
- Zeigarnik and goal-gradient: show progress, save it, make the rest feel close.
- Postel: accept messy input, normalize it, output clean formats.
- Tesler: move complexity into the system, reveal advanced options only when relevant.
- Parkinson: fewer steps, prefill what you know, shortcuts for repeat work.
- Similarity: same look means same behavior, one meaning per color and icon.

## When rules conflict
Prioritize clarity, accessibility, user control, and task completion, in that order. Do not apply these rules mechanically. Use them to make deliberate choices for this user and this goal.
