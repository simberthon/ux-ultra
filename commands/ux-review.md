---
description: Score a screen, flow or diff against UX Ultra and list the fixes, worst first.
argument-hint: "[file, route, component or 'diff']"
---

Use the `ux-ultra` skill in **review** mode on: $ARGUMENTS

If no target is given, review the UI files changed in the current git diff.

1. Read `references/review-checklist.md` from the skill and score every applicable item.
2. Name the user's primary goal on this screen in one sentence before scoring.
3. Report a table: area, score (0-2), evidence (file:line or what you saw), fix.
4. Then list the fixes ranked by user impact, blockers first. Each fix names the law or rule it comes from.
5. Do not change code unless the user asks you to apply the fixes.
