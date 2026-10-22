# Heuristics and design principles

Three canons that every product designer learns: Nielsen's ten heuristics, Norman's design principles, and Krug's laws of usability. Add Cooper's idea of posture to pick the right density per surface.

## Nielsen's 10 usability heuristics (NN/g, 1994, updated 2024)

| # | Heuristic | What to do in a SaaS UI |
|---|---|---|
| 1 | Visibility of system status | Show status for every async operation. Under 0.1 s, no indicator. 0.1 to 1 s, subtle pending state. 1 to 10 s, spinner or skeleton. Over 10 s, progress with an estimate and a Cancel. |
| 2 | Match between system and the real world | Use the user's words. No "entity", "tenant_id", "null", or HTTP codes in the UI. |
| 3 | User control and freedom | Every flow has an exit: Cancel, Back, Esc closes modals, undo after delete, archive, and bulk edits. Drafts autosave. |
| 4 | Consistency and standards | One component per pattern, same wording and placement everywhere. Follow platform conventions. |
| 5 | Error prevention | Sensible defaults, constrained inputs, disabled states that say why, confirmation only for irreversible actions. |
| 6 | Recognition rather than recall | Show recent items, autocomplete, inline previews. Keep context visible across steps. |
| 7 | Flexibility and efficiency of use | Shortcuts, command palette, bulk actions, saved views. Hidden from novices, one keystroke for experts. |
| 8 | Aesthetic and minimalist design | Every element competes with every other. Remove what does not serve the task. |
| 9 | Help users recognize, diagnose, and recover from errors | Plain language, precise problem, constructive fix. No codes alone. |
| 10 | Help and documentation | Help in context first (hints, empty states). Docs searchable and task-based. |

Run a heuristic pass before any user test so real users are not spent on obvious problems.

## Norman's design principles (The Design of Everyday Things)

When people cannot use something, the design is at fault, not the user.

- **Discoverability.** Users can see what actions are possible. Do not hide primary actions behind hover or gestures.
- **Signifiers.** Clickable things look clickable: button shape, link style, cursor, hover state. If a control needs a "click here" hint, redesign the control.
- **Affordances.** The form suggests the use. A destructive control must not look like a primary "go" button.
- **Mapping.** Controls sit next to what they affect and in the same order.
- **Constraints.** Make wrong actions impossible: typed inputs, disabled invalid options.
- **Feedback.** Every action gets an immediate, visible response close to where it happened.
- **Conceptual model.** One coherent picture of how the system works, shown through consistent nouns, verbs, and hierarchy (workspace > project > item).

The two gulfs:
- **Gulf of execution:** "I know what I want, but how do I do it here?" Close it with visible actions and clear labels.
- **Gulf of evaluation:** "Did it work?" Close it by showing the new state explicitly after every change.

Treat repeated user errors as design bugs.

## Krug's laws (Don't Make Me Think)

1. **Don't make me think.** Every screen should be self-evident. If a label needs explaining, rename it before adding help text.
2. **Mindless clicks are fine.** Several obvious clicks beat one click that needs thought.
3. **Cut half the words, then half again.** Remove welcome text, self-praise, and instructions that restate the obvious.

Users scan, they satisfice (take the first reasonable option), and they muddle through. Design for that, not for careful reading.

**The trunk test.** Drop a user on any page. They should be able to tell what product this is, what page they are on, what the main sections are, and where they are in the hierarchy. That means a persistent product identity, a page title that matches the link they clicked, highlighted current navigation, and breadcrumbs for deep hierarchies.

**The reservoir of goodwill.** Every hassle drains it: hidden pricing, hidden support, hidden cancel, rejected input formats, forced signup before value. Every courtesy fills it.

## Cooper: posture and the perpetual intermediate (About Face)

Pick a posture for each surface, then design for it:

| Posture | Example | Design for |
|---|---|---|
| Sovereign | The main workspace, used for hours | Density, persistent navigation, shortcuts, remembered state |
| Transient | Quick-add, share sheet, settings dialog | Large, focused, self-explanatory, gone when done |
| Auxiliary | A sidebar widget, a status tray | Small, glanceable, never in the way |
| Background | Sync, scheduled jobs | No UI unless something needs a decision |

**Perpetual intermediates.** Most users stop being beginners quickly and never become experts. Make common actions one step and visible, put advanced options one level deeper, keep onboarding scaffolding dismissible, and give experts accelerators.

**Goal-directed design.** Before designing, write the primary persona's end goal in one sentence and cut everything that does not serve it. If two personas need conflicting interfaces, build two modes instead of one compromise.

**Do not make users do the machine's job.** Remember preferences and last-used values, infer what you can, never ask for data the system already has.
