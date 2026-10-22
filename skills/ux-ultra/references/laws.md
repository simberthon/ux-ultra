# The laws of UX

Every law follows the same shape: its name, so you have a hook to reason from; one sentence on what it says; four instructions. Laws generalize where specs do not. "Buttons are 44 px tall" covers one case. "Large, nearby targets are faster to hit" covers the button, the checkbox, the drag handle, and the tap target on the table row you forgot about.

Use them as design checks, not as numbers to enforce. When two laws disagree, the tiebreak in `SKILL.md` wins: clarity, accessibility, user control, task completion.

Definitions in quotes come from lawsofux.com (Jon Yablonski). Sources per law are in `sources.md`.

## Decide and act

### 1. Reduce choices per screen (Hick's law)
Decision time grows with the number and complexity of choices.
- Give each screen one clear purpose.
- Remove irrelevant or low-priority options, or move them one level deeper.
- Break complicated decisions into smaller steps.
- Recommend an option when users may struggle to choose.

### 2. Use sensible defaults (Hick's law, applied)
Every good default is a decision the user does not have to make.
- Preselect the safest and most common option.
- Use what you already know (locale, timezone, currency, last-used value) to cut input.
- Never use a default that creates an unexpected commitment: no pre-checked paid add-ons, no opt-in to marketing.
- Make every default visible and easy to change.

### 3. Avoid choice overload (Choice overload)
"People get overwhelmed when they are presented with a large number of options."
- Offer 2 to 4 plans or paths, with one marked as recommended.
- Filter and search large sets instead of listing everything.
- Use side-by-side comparison only where users actually compare.
- Prefer fewer, better options to complete coverage.

### 4. Make targets large and close (Fitts's law)
The time to reach a target depends on its distance and its size.
- Make primary controls at least 44 px on touch and never under 24 by 24 px anywhere.
- Extend the clickable area with padding around small icons and make checkbox plus label one target.
- Leave enough space between targets to avoid mis-taps.
- Use screen edges and corners for persistent controls on desktop.

### 5. Place key actions nearby (Fitts's law, applied)
Interaction is faster when the target is close to the user's current focus.
- Put actions beside the content they affect: row actions on the row, sort in the column header.
- Keep form submission right under the last input.
- Keep frequent actions within easy reach, and within thumb reach on mobile.
- Do not force needless cursor travel or eye movement between related things.

### 6. Highlight the primary action (Von Restorff effect)
The item that differs from its neighbors gets noticed and remembered.
- Give the primary action the strongest visual emphasis on the view.
- Use one dominant call to action per section.
- Make secondary actions quieter: outline, soft, or plain link.
- Do not rely on color alone to set the primary apart, and keep emphasis rare so it keeps its power.

### 7. Respond within 400 milliseconds (Doherty threshold)
Productivity soars when neither the computer nor the user has to wait on the other (under 400 ms).
- Acknowledge every action at once: pressed state, spinner on the button, optimistic update.
- Show skeletons or progress when work takes longer than about 1 second.
- Use optimistic updates for actions that almost always succeed, and roll back clearly when they fail.
- Never leave users wondering whether their action registered.

### 8. Cut task time (Parkinson's law)
A task expands to fill the time and steps you give it.
- Minimize the number of steps and screens.
- Remove confirmations and screens that do not prevent a real mistake.
- Prefill everything the user already gave you, anywhere in the product.
- Offer shortcuts for frequent and repeated actions, and state expected effort ("2 min setup").

## Understand at a glance

### 9. Follow familiar patterns (Jakob's law)
Users spend most of their time in other products and expect yours to work the same way.
- Use established conventions: sidebar navigation, search at the top, avatar menu top right, Cmd/Ctrl+K palette.
- Use familiar icons only for their familiar meaning.
- Do not invent a new pattern unless it gives a clear, tested advantage.
- When you redesign, give people a transition: keep old paths working for a while.

### 10. Match the user's mental model (Mental model)
"A compressed model based on what we think we know about a system and how it works."
- Name things in the user's words, not database or API terms.
- Model objects and actions on tools users already know.
- Keep names and behaviors consistent so the model holds everywhere.
- Never expose internal implementation (tables, sync jobs, IDs) as the thing users must understand.

### 11. Group related things (Law of proximity)
Objects close to each other are seen as a group.
- Put labels closer to their own field than to the next field.
- Make space between groups clearly larger than space within them.
- Use spacing first to show structure.
- Do not reach for borders when spacing can do the job.

### 12. Use shared regions (Law of common region)
Elements inside a clear boundary are seen as a group.
- Use cards, panels, or background tints to group related content.
- Put a control and the content it affects in the same container.
- Never wrap unrelated items in one boundary.
- Keep containers shallow: a card inside a card inside a card is noise.

### 13. Connect related elements (Law of uniform connectedness)
Visually connected elements look more related than unconnected ones.
- Connect steps in a stepper and events on a timeline with lines.
- Attach tooltips and popovers visually to their trigger.
- Use shared states (selected row plus its open detail panel) to show what belongs together.
- Use connection on purpose, never as decoration.

### 14. Keep patterns consistent (Law of similarity)
Things that look alike are taken to do alike.
- Give similar components the same look and behavior everywhere.
- Use colors, icons, and labels with one meaning each: destructive red is only for destructive.
- Never style plain text like a link or give two different actions the same treatment.
- Reuse existing components before creating new ones.

### 15. Simplify what people see (Law of Pragnanz)
People read ambiguous or complex visuals in the simplest way possible.
- Prefer simple structures and recognizable shapes.
- Remove decoration and visual noise that carry no meaning.
- Build an obvious hierarchy: what to read first, second, third.
- Make the screen understandable at a glance, in under five seconds.

### 16. Choose the simplest design that works (Occam's razor)
Among designs that work equally well, choose the one with the fewest parts.
- Remove elements one at a time until removing more would hurt.
- Do not add options "just in case".
- Merge duplicate entry points into one.
- When two layouts solve the task, ship the one with fewer concepts.

### 17. Control attention (Selective attention)
People notice only what relates to their current goal.
- Put critical status where the user is already looking: inline, next to the action.
- Do not make important information look like an ad or a promo banner.
- Limit competing alerts to one at a time.
- Highlight or animate briefly what changed, so the change is not missed.

## Memory and load

### 18. Lower cognitive load (Cognitive load)
"The amount of mental resources needed to understand and interact with an interface."
- Remove extraneous load: decoration, repeated text, choices nobody needs.
- Let the system do the work: defaults, autofill, remembered state.
- Reveal advanced options only when they are relevant.
- Use familiar patterns so users spend effort on their task, not on your UI.

### 19. Break content into chunks (Miller's law and chunking)
Working memory holds only a few items at once, so group information into meaningful pieces.
- Divide long content and forms into small, labeled groups.
- Format long strings in chunks: card numbers, keys, phone numbers, IDs.
- Use headings, sections, and short labels.
- Do not use "7 plus or minus 2" to justify an arbitrary limit on menu items.

### 20. Do not make people remember (Working memory)
Recognition is easier than recall.
- Show earlier inputs and selections on later steps.
- Show recent items, recent searches, and visited states.
- Let users compare side by side instead of across pages.
- Never ask users to remember information from one screen to use on another.

### 21. Put essentials first and last (Serial position effect)
People remember the first and last items of a sequence best.
- Put the most important information first.
- Place the final action or takeaway at the end.
- Keep lower-priority items in the middle.
- Order navigation and lists by user importance, not by internal structure.

## Progress and motivation

### 22. Show visible progress (Zeigarnik effect)
Unfinished tasks stay on people's minds and pull them back.
- Show clearly what is done and what remains.
- Save progress automatically and show "continue where you left off".
- Make it easy to resume an interrupted task.
- Never turn unfinished tasks into nagging.

### 23. Make the goal feel close (Goal-gradient effect)
Motivation rises as people get closer to the goal.
- Show progress through every multi-step flow.
- Split long tasks into visible milestones.
- Give an honest head start: steps already completed count ("Account created" is checked).
- Make the remaining work specific and small.

### 24. Design the peak and the end (Peak-end rule)
People judge an experience by its most intense moment and its ending.
- Create a clear, satisfying completion state for every flow.
- Confirm exactly what the user accomplished.
- Say what happens next and offer the next step.
- Make failure moments especially gentle and recoverable. Never end a flow on an empty or ambiguous screen.

### 25. Protect flow (Flow)
People do their best work when fully immersed, with challenge matched to skill.
- Remove interruptions from core workflows: no modal nags, no forced reloads.
- Give continuous, quiet feedback.
- Keep latency low on frequent actions.
- Offer progressive depth: simple by default, shortcuts and power features for experts.

## Errors and complexity

### 26. Accept messy input (Postel's law)
Be liberal in what you accept, conservative in what you send.
- Accept common formats and variations: spaces in card numbers, any casing, pasted text, different date formats.
- Normalize input instead of rejecting it.
- Explain requirements before submission, not after.
- Output consistent, predictable formats.

### 27. Prevent errors (Postel's law and error prevention)
The best error message is the one that never needs to appear.
- Use constrained inputs: pickers, selects, steppers, typed fields.
- Disable impossible actions and say why next to the control.
- Catch likely slips ("You mentioned an attachment but none is attached").
- Warn before risky or destructive actions, and say exactly what will happen.

### 28. Make errors recoverable (Error recovery)
Mistakes are normal, so recovery must be cheap.
- Preserve the user's work after any error.
- Explain what went wrong in plain language, next to where it happened.
- Tell the user exactly how to fix it.
- Offer undo, retry, restore, or cancel wherever it makes sense.

### 29. Move complexity into the system (Tesler's law)
Every system has complexity that cannot be removed, only moved.
- Absorb complexity in code once instead of in every user's session: infer, automate, default.
- Show essential controls first and reveal advanced options only when relevant.
- Do not oversimplify to the point that power users lose capability.
- Never force users to understand internal technical details.

### 30. Teach in context (Paradox of the active user)
Users never read manuals; they start using the product right away.
- Put guidance where the user is: inline hints, empty states, tooltips.
- Make the UI learnable by doing, with safe defaults and undo.
- Let users skip onboarding and still succeed.
- Prefer one contextual nudge over a multi-step tour.

## Two meta laws

### Aesthetic-usability effect
Users perceive good-looking design as easier to use. Use this as a reason to fix visual bugs (misalignment, jank, clipping) as real bugs, and as a warning: in tests, watch what people do, because polish hides problems from their opinions.

### Pareto principle
Roughly 80 percent of use comes from 20 percent of features. Find the vital few flows and make them excellent before polishing the rest. Give them top-level visibility and tuck the rest away.
