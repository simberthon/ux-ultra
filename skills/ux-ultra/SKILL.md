---
name: ux-ultra
description: "UX rulebook for building SaaS and web app interfaces that people understand on the first try. Use BEFORE and WHILE you design, build, or change any user-facing screen: layouts, navigation, onboarding, forms, settings, tables, dashboards, empty/loading/error states, pricing and billing, notifications, AI features, mobile views. Also use to review a UI or a UI diff before shipping. Covers the laws of UX (Hick, Fitts, Jakob, Doherty, peak-end, Tesler and 25 more), Nielsen's heuristics, SaaS flow playbooks, accessibility (WCAG 2.2 AA), microcopy, motion, ethics (no dark patterns) and a scored pre-ship checklist. Triggers: build a page, add a form, design onboarding, create a dashboard, settings page, empty state, error message, UX review, is this usable, improve the UX, make it easier to use."
license: MIT
---

# UX Ultra

You are building for a person who is busy, distracted, and did not read the manual. They came to do one thing. Your job is to make that one thing obvious, fast, safe, and satisfying to finish.

A style guide tells you what things look like. These rules tell you why they are there, so you can reason about cases no spec covers. Apply them every time you touch a user-facing surface. Do not apply them mechanically.

## Three modes

| Mode | When | What you do |
|---|---|---|
| **Shape** | Before code, for any new screen or flow | Write the 7-line UX brief (below) and get the user's go if the task is large |
| **Build** | While writing UI code | Follow the UX Ultra loop and the non-negotiables. Read the matching playbook section |
| **Review** | On request, or before you call UI work done | Score the work with `references/review-checklist.md` and fix blockers first |

For small UI edits, skip the written brief but still answer its first three questions in your head.

## The UX brief (shape mode)

1. **User and goal.** Who lands here, and the one job they came to do.
2. **Shortest path.** Numbered steps from arrival to done. Cut every step you can.
3. **Primary action.** One dominant action per screen, and where it sits.
4. **States.** First-run, empty, loading, partial, error, success. One line each.
5. **Risks.** Where users will hesitate, slip, or lose work, and how the design prevents it.
6. **Done moment.** What they see when they succeed, and what happens next.
7. **Rules in play.** The 3 to 5 laws that matter most here, and the tiebreak if two conflict.

## The UX Ultra loop (build mode)

Run these eight steps for every interface you create or revise:

1. **Name the primary goal** of the screen in one sentence. If you cannot, the screen does too much.
2. **Design the shortest clear path** to that goal. Remove, defer, or infer every step and field you can.
3. **Make the next action obvious.** One primary button per view, visually dominant, placed where the eye already is.
4. **Remove what distracts** from task completion. Every element must earn its place.
5. **Give feedback for every interaction.** Visible response in under 100 ms, a result or progress in under 400 ms to 1 s.
6. **Prevent errors** before they happen: constraints, good defaults, clear requirements up front.
7. **Preserve the user's work** when something fails. Never clear a form, never lose a draft.
8. **Confirm completion** clearly, say what happened, and point to what comes next.

## The non-negotiables

These hold on every screen, in every mode. Breaking one is a blocker in review.

1. **Every state is designed.** Loading, empty (first use), empty (no results), error, partial failure, success, and long or dense content. No screen ends on a blank area or a bare "No data".
2. **One primary action per view.** Secondary actions are quieter. Destructive actions are styled as destructive and kept apart.
3. **Labels are visible.** Every input has a persistent label above it. A placeholder is an example, never the label.
4. **User input survives errors.** Server errors, timeouts, validation failures, and expired sessions keep what the user typed.
5. **Errors say what happened and how to fix it**, in plain words, next to where it happened. Never "Something went wrong" alone, never a raw code alone.
6. **Undo beats confirm.** Reversible actions happen at once with an undo. Confirm only what is serious and irreversible, and name the object and consequence on the button.
7. **Keyboard and screen reader work.** Semantic HTML, visible focus, text contrast at least 4.5:1, targets at least 24 by 24 px (44 on touch), no color-only signals.
8. **The URL holds the view state.** Filters, tabs, sort, pagination, and selected records survive refresh and can be shared. Links are links, buttons are buttons.
9. **Use conventions** users already know (sidebar navigation, avatar menu top right, Cmd/Ctrl+K, sortable tables). Invent a pattern only when it clearly wins.
10. **No dark patterns.** Cancel is as easy as signup, prices are shown in full before commitment, consent defaults to off, no fake urgency, no confirmshaming.

## When rules conflict

Prioritize, in this order: **clarity, accessibility, user control, successful task completion**. Then speed, then aesthetics. Write down the tiebreak you chose when it is not obvious. A form that technically satisfies every law and still feels like a tax return has failed.

Common tensions and the usual answer:
- Fewer steps (Parkinson) vs. smaller chunks (Miller): chunk when each step is a real decision, merge when steps are just pages.
- Fewer choices (Hick) vs. power-user speed: keep the default path simple and add accelerators (shortcuts, Cmd+K, bulk actions) that novices never have to see.
- Familiar pattern (Jakob) vs. a better new one: keep the familiar one unless you can show the new one is faster for real users.
- Density for experts vs. whitespace for beginners: dense in the main workspace someone uses all day, roomy in transient dialogs and first-run screens.

## Reference map

Read only the file the task needs. Each file stands on its own.

| Task | Read |
|---|---|
| Any screen, the principles behind every decision | `references/laws.md` (30 laws, each as one principle plus four instructions) |
| Heuristic checks, Norman's principles, posture, mental models | `references/heuristics.md` |
| Onboarding, navigation, forms, tables, dashboards, settings, billing, notifications, AI features, mobile, motion | `references/saas-playbook.md` |
| Hierarchy, spacing, color, type, component states | `references/visual-hierarchy.md` |
| Button labels, error copy, empty states, naming | `references/microcopy.md` |
| Accessibility details (WCAG 2.2 AA) | `references/accessibility.md` |
| Pricing, cancellation, consent, engagement features | `references/ethics.md` |
| Validating a feature, usability tests, metrics | `references/research-and-metrics.md` |
| Thresholds and numbers (timings, sizes, contrast) | `references/numbers.md` |
| Pre-ship review and scoring | `references/review-checklist.md` |
| Mistakes AI coding tools make by default | `references/ai-default-mistakes.md` |
| Where every rule comes from | `references/sources.md` |

## How UX Ultra fits with other skills

UX Ultra owns behavior: what the screen is for, what happens when you click, how it fails, how it feels to finish. It does not pick your brand, palette, or font pairing. If a visual or design-system skill is present, let it own the look, and keep UX Ultra's rules on hierarchy, states, and feedback.

## Reporting

When you finish UI work, say in two or three lines: the primary goal you designed for, the states you covered, and any rule you knowingly traded off and why. In review mode, use the table format from `references/review-checklist.md`.
