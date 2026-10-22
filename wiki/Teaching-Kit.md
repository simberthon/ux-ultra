# Teaching kit

UX Ultra was built to be shared. This page turns it into workshops for students, a bootcamp cohort, or a product team. Each session works with or without AI tools.

## Format

- 4 sessions of 2 hours, or one full day.
- Students bring a product they use daily, or a project they are building.
- Every session ends with something shipped and reviewed with the [review checklist](Review-Checklist.md).

## Session 1: learn to notice

**Goal:** see bad UX the way users feel it.
- Watch: Vox "Bad doors are everywhere" (6 min), Tony Fadell "The first secret of great design" (17 min).
- Teach: Norman's signifiers and feedback, Krug's "don't make me think", the gulfs of execution and evaluation.
- Exercise: in pairs, each person does one task in an app while thinking aloud. The other logs every hesitation. Name the principle behind each one.
- Output: a list of 10 friction points with the principle each one breaks.

## Session 2: laws, not looks

**Goal:** design from principles.
- Teach: the 30 laws, grouped as decide and act, understand at a glance, memory and load, progress and motivation, errors and complexity.
- Exercise: redesign one settings page in grayscale. One primary action, grouped by proximity, every state drawn: loading, empty, error, success.
- AI twist: ask an AI tool to build the same page twice, once with no brief and once with UX Ultra installed. Score both with the checklist and compare.
- Output: two scored versions and a short note on which laws made the difference.

## Session 3: SaaS flows

**Goal:** design the moments that make or break a product.
- Teach: activation and time to value, empty states, forms, undo over confirm, honest billing.
- Exercise: map signup to first value for a real SaaS product. For each step, decide: eliminate, defer, or keep. Then design the empty state and the success moment.
- Output: a shortened flow and the "done moment" screen.

## Session 4: test and ship

**Goal:** prove it with real people.
- Teach: the Mom Test, 5-user tests, realistic task scenarios, fix the top three problems.
- Exercise: test the session 2 or 3 design with 3 to 5 people. Fix the top three problems. Rescore.
- Output: before and after scores, and a one-page write-up.

## Grading rubric

| Criterion | Weight |
|---|---|
| The primary goal is clear and the path is short | 25% |
| Every state is designed | 20% |
| Accessibility basics pass (keyboard, contrast, labels) | 20% |
| Decisions are justified with named laws or heuristics | 20% |
| Evidence from real users changed the design | 15% |

## Sharing the skill with students

Give them read access to the repo, or the `templates/CLAUDE-snippet.md` file if they use another AI tool. Ask them to run `/ux-review` on their own work before every hand-in.
