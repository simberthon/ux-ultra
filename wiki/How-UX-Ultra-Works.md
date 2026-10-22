# How UX Ultra works

## Why laws and not a style guide

A style guide (spacing scale, button variants, type ramp) tells a model what things look like. The model follows it and the interface still feels wrong, because the guide never says why things are there.

UX Ultra works one level up, from the psychology. "Buttons are 44 px tall" covers one case. "Large, nearby targets are faster to hit" (Fitts's law) covers the button, the checkbox, the drag handle, and the tap target on the table row you forgot about. A model can reason from a principle. It can only copy from a spec.

## The three modes

| Mode | Trigger | Output |
|---|---|---|
| Shape | `/ux-brief`, or any new screen or flow | A 7-line brief: user and goal, shortest path, primary action, states, risks, done moment, rules in play |
| Build | Any UI code | Code that follows the UX Ultra loop and the non-negotiables, plus a 2-line note on goal, states covered, trade-offs |
| Review | `/ux-review`, or before calling UI work done | A scored table with evidence and fixes, blockers first, and a verdict |

## The loop

1. Name the primary goal.
2. Design the shortest clear path to it.
3. Make the next action obvious.
4. Remove distractions.
5. Give immediate feedback.
6. Prevent errors.
7. Preserve the user's work.
8. Confirm completion.

## The tiebreaker

When rules conflict, prioritize **clarity, accessibility, user control, and task completion**, then speed, then looks.

This line does a lot of work. Without it, a model treats 30 rules as a checklist and ships a form that satisfies all of them and still feels like a tax return. With it, the model has a way to choose, and choosing is most of what judgment is.

## How the files are organized

The skill uses progressive disclosure, the same principle it teaches. `SKILL.md` is short and always loaded: the loop, the non-negotiables, the tiebreaker, and a map. The detailed references load only when the task needs them.

```
skills/ux-ultra/
  SKILL.md                         modes, loop, non-negotiables, tiebreaker, map
  references/
    laws.md                        30 laws, each as principle plus four instructions
    heuristics.md                  Nielsen, Norman, Krug, Cooper
    saas-playbook.md               14 SaaS surfaces with rules and default mistakes
    visual-hierarchy.md            hierarchy, color, tokens, component states, layout
    microcopy.md                   buttons, errors, empty states, voice
    accessibility.md               WCAG 2.2 AA in ten rules
    ethics.md                      dark patterns to never build, legal context
    research-and-metrics.md        validation, activation, HEART, usability tests
    numbers.md                     timings, sizes, contrast, benchmarks
    review-checklist.md            scored audit with blockers
    ai-default-mistakes.md         what AI tools get wrong by default
    sources.md                     every book, video, and article
commands/
  ux-brief.md                      /ux-brief
  ux-review.md                     /ux-review
```

## What UX Ultra does not do

It does not pick your brand, palette, or fonts. It decides what a screen is for and how it behaves. If you use a visual design skill or a design system, they work together: the visual layer owns the look, UX Ultra owns hierarchy, states, feedback, and flow.
