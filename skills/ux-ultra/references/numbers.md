# Numbers worth knowing

Thresholds to design against. Use them as defaults, not dogma. Sources are in `sources.md`.

## Time

| What | Value | Source |
|---|---|---|
| Feels instant, no indicator needed | 0.1 s | Nielsen, response time limits |
| Keeps the user's flow of thought | 1 s | Nielsen |
| Limit of attention; show progress, an estimate, and Cancel past it | 10 s | Nielsen |
| Interaction pace where productivity soars | under 400 ms | Doherty and Thadani, IBM, 1982 |
| Target for a mutation (POST, PATCH, DELETE) | under 500 ms | Vercel guidelines |
| Delay before showing a loader, to avoid flashing | 150 to 300 ms | Vercel guidelines |
| Minimum visible time once a loader shows | 300 to 500 ms | Vercel guidelines |
| Skeleton screens | waits of about 1 to 10 s | NN/g |
| Undo window after a reversible action | about 5 to 10 s | Common practice |
| Toast display time | about 4 to 6 s, paused on hover and focus | Common practice |

## Motion

| What | Value |
|---|---|
| Micro-interactions | 100 to 150 ms |
| Dropdowns, popovers, tooltips | 150 to 250 ms |
| Modals and drawers | 200 to 300 ms |
| Upper limit for everyday UI motion | 300 ms |
| Easing for entering elements | ease-out, for example `cubic-bezier(0.05, 0.7, 0.1, 1)` |
| Animate only | `transform` and `opacity` |
| Animate frequent keyboard actions | never |

## Size and contrast

| What | Value | Source |
|---|---|---|
| Minimum target size | 24 by 24 CSS px | WCAG 2.2 SC 2.5.8 (AA) |
| Recommended target size | 44 by 44 px | WCAG 2.5.5 (AAA), Apple HIG 44 pt |
| Android target size | 48 by 48 dp | Material Design |
| Text contrast | 4.5:1 | WCAG 2.2 SC 1.4.3 |
| Large text and UI component contrast | 3:1 | WCAG 2.2 SC 1.4.3, 1.4.11 |
| Reflow width without 2D scroll | 320 CSS px | WCAG 2.2 SC 1.4.10 |
| Mobile input font size (no iOS zoom) | 16 px or more | iOS Safari behavior |
| Line length for reading | 45 to 75 characters | Refactoring UI, typography practice |

## Forms and checkout

| What | Value | Source |
|---|---|---|
| Average cart abandonment | 70.19 percent | Baymard |
| Abandon due to a long or complicated checkout | 17 percent | Baymard |
| Ideal checkout | about 12 form elements, 7 to 8 fields | Baymard |
| Average US checkout | 23.48 form elements | Baymard |
| Inline validation on blur vs. none | +22% success, -22% errors, +31% satisfaction, -42% completion time | Wroblewski, A List Apart, 2009 |

## Onboarding and research

| What | Value | Source |
|---|---|---|
| Median SaaS activation rate | 25 percent (average 34) | Lenny's Newsletter survey |
| Product tour completion, 3 steps vs. 7 steps | 72 vs. 16 percent | Chameleon (vendor data, directional) |
| Onboarding checklist length | 3 to 5 items | Practitioner consensus |
| Users per usability test round | 5 per user group | NN/g |
