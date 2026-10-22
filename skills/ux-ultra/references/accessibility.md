# Accessibility (WCAG 2.2 AA baseline)

Accessibility is not a separate feature. It is the floor. WCAG 2.2 is the current W3C Recommendation and the reference for the European Accessibility Act (through EN 301 549) and for ADA cases in the US.

## The ten rules

1. **Semantic HTML first.** `button` for actions, `a` for navigation, `label`, `nav`, `main`, `table`, headings in order, a "Skip to content" link. Add ARIA only when no native element fits, and follow the WAI-ARIA Authoring Practices for custom widgets.
2. **Keyboard complete.** Everything works with Tab, Shift+Tab, Enter, Space, arrows, and Esc, in a logical order. No keyboard traps. Modals trap focus inside and return it to the trigger on close.
3. **Visible focus.** Never `outline: none` without a replacement. Use `:focus-visible` with a ring of at least 3:1 contrast. Sticky headers and banners must not cover the focused element (SC 2.4.11); use `scroll-padding`.
4. **Contrast.** Text at least 4.5:1, large text (18 pt, or 14 pt bold) at least 3:1, input borders, icons, focus rings, and chart marks at least 3:1 (SC 1.4.3, 1.4.11). Check light and dark themes.
5. **Target size.** At least 24 by 24 CSS px (SC 2.5.8, AA). Aim for 44 by 44 on touch and for primary controls (Apple 44 pt, Material 48 dp). Grow the hit area with padding.
6. **Labels and names.** Every input has a visible, programmatic label. Icon-only buttons have an `aria-label`. Decorative icons are `aria-hidden`. Related controls sit in a `fieldset` with a `legend`.
7. **Errors in text.** Errors are identified in words, linked with `aria-describedby`, and include how to fix them (SC 3.3.1, 3.3.3). Never color alone.
8. **Live updates announced.** Toasts, validation messages, and result counts use `aria-live="polite"`.
9. **Alternatives to hard interactions.** Every drag has a single-pointer alternative (SC 2.5.7). Every gesture has a click or keyboard equivalent. Every hover action has a visible or menu equivalent.
10. **Respect the user's settings.** Never disable zoom. Reflow at 320 px wide and 200 percent zoom without 2D scrolling (SC 1.4.10). Honor `prefers-reduced-motion`, `prefers-color-scheme`, and increased contrast.

## New in WCAG 2.2, often missed

- **2.4.11 Focus not obscured.** Sticky elements must not hide the focused item.
- **2.5.7 Dragging movements.** Reorder lists, sliders, and kanban boards need a non-drag way.
- **2.5.8 Target size minimum.** 24 by 24 px.
- **3.2.6 Consistent help.** Help links sit in the same place on every page.
- **3.3.7 Redundant entry.** Do not ask for the same information twice in one process.
- **3.3.8 Accessible authentication.** No cognitive tests (puzzles, transcribing codes). Allow paste and password managers. Passkeys and magic links are good answers.

## Charts and data

- Give every chart a text summary or an accessible table.
- Use colorblind-safe palettes and add direct labels or patterns, not only color.
- Right-align numbers and use tabular figures.

## Motion

- Wrap non-essential animation in `@media (prefers-reduced-motion: no-preference)`, or replace movement with a fade when reduce is set.
- No auto-playing motion longer than 5 seconds without a pause control.
- Nothing flashes more than three times per second.

## Quick test you can run yourself

1. Unplug the mouse. Do the main task with the keyboard only.
2. Zoom the browser to 200 percent. Does anything overlap or need horizontal scrolling?
3. Run an automated checker (axe, Lighthouse). It catches only part of the issues, so it is a floor, not a pass.
4. Turn on a screen reader (VoiceOver: Cmd+F5) and listen to one form and one table.
