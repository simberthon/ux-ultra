# Visual hierarchy, systems, and states

UX Ultra does not choose your brand. It does decide what the eye sees first, and that is a usability question. Main sources: Refactoring UI (Wathan and Schoger), Material Design 3, Apple HIG, Jesse Showalter's 60-30-10 rule, and the recurring advice of the most-viewed UX videos.

## Structure before style

1. Start from the user flow: landing, then each step, then the goal. Every screen must serve that path.
2. Lay out in grayscale first. Hierarchy has to work from size, weight, and contrast before color is added.
3. Write real copy while you design. Lorem ipsum hides layout problems and empty-state problems.
4. Start with too much whitespace, then tighten where density helps (data tables, sovereign workspaces).

## Hierarchy

1. Build hierarchy with weight and color first, size second. Two weights (regular and 600 to 700) and two or three text colors (primary, secondary, tertiary) cover nearly every case.
2. De-emphasize to emphasize. Make the competitors quieter instead of making the hero louder.
3. One focal point per view. The eye should land on the primary action or the primary information in under a second.
4. Style each action by its importance, not its type. One solid primary button per view, outline or soft for secondary, plain links for tertiary. A routine destructive action can be a quiet button; it becomes bold red in its confirmation step.
5. Format values so they explain themselves ("12 left in stock" instead of "Stock: 12"), and drop labels you no longer need.
6. Cap text line length at about 45 to 75 characters (around 65ch).
7. Separate regions with spacing, then background tints, then subtle shadows. Borders come last.

## Color

1. Use the 60-30-10 split as a guide: about 60 percent neutral base, 30 percent secondary surfaces or brand, 10 percent accent. It works in dark mode too.
2. Keep the accent color for things you can act on. If everything is colorful, nothing reads as clickable.
3. Define semantic colors once: success, warning, danger, info. Each has one meaning everywhere.
4. Build palettes of 8 to 10 shades per hue, and tint greys slightly toward the brand hue.
5. Never put grey text on a colored background. Use a tint of the background hue instead.
6. Check contrast for every pair, in light and dark themes: 4.5:1 for text, 3:1 for large text and UI parts.
7. Never use color as the only signal. Pair it with text or an icon.

## Systems and tokens

1. Use design tokens as the single source of truth: color roles, type scale, spacing, radius, elevation, motion.
2. Spacing comes from a fixed scale (for example 4, 8, 12, 16, 24, 32, 48, 64 px). No arbitrary pixel values.
3. A type scale with named roles (display, title, body, small, caption). At most two font families.
4. One corner radius family and one icon set with one stroke style. Never two icons for one meaning or one icon for two meanings.
5. Reuse existing components before building a new one.

## Every component has every state

Design and build all of these for each interactive component: default, hover, focus-visible, pressed, selected, disabled (with a reason), loading, error, and success where relevant.

- Hover must never change the component's size, so nothing shifts.
- Focus-visible is a clear ring, at least 3:1 contrast, about 2 px.
- Disabled controls explain why they are disabled, near the control or in a tooltip.
- Loading buttons keep their label and width and add a spinner.

## Layout by width

| Width | Layout |
|---|---|
| Under 600 px (compact) | Single column, bottom tab bar or drawer, full-width inputs, cards instead of wide tables |
| 600 to 839 px (medium) | Navigation rail, optional second pane |
| 840 px and up (expanded) | Persistent sidebar, list-detail layouts |

Set breakpoints where your content breaks, not only at device presets. Keep at least 16 to 24 px of inner padding on small screens. Test at 320, 375, 768, 1280 px and on an ultra-wide screen.
