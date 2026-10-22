# The 30 laws

Every law in UX Ultra has the same shape: a name to reason from, one sentence on what it says, and four instructions. This page is the overview. The full text, with all four instructions per law, is in [`laws.md`](../skills/ux-ultra/references/laws.md).

| # | Group | Law | Rule | In one line |
|---|---|---|---|---|
| 1 | Decide and act | Hick's law | Reduce choices per screen | Decision time grows with the number and complexity of choices. |
| 2 | Decide and act | Hick's law, applied | Use sensible defaults | Every good default is a decision the user does not have to make. |
| 3 | Decide and act | Choice overload | Avoid choice overload | "People get overwhelmed when they are presented with a large number of options." |
| 4 | Decide and act | Fitts's law | Make targets large and close | The time to reach a target depends on its distance and its size. |
| 5 | Decide and act | Fitts's law, applied | Place key actions nearby | Interaction is faster when the target is close to the user's current focus. |
| 6 | Decide and act | Von Restorff effect | Highlight the primary action | The item that differs from its neighbors gets noticed and remembered. |
| 7 | Decide and act | Doherty threshold | Respond within 400 milliseconds | Productivity soars when neither the computer nor the user has to wait on the other (under 400 ms). |
| 8 | Decide and act | Parkinson's law | Cut task time | A task expands to fill the time and steps you give it. |
| 9 | Understand at a glance | Jakob's law | Follow familiar patterns | Users spend most of their time in other products and expect yours to work the same way. |
| 10 | Understand at a glance | Mental model | Match the user's mental model | "A compressed model based on what we think we know about a system and how it works." |
| 11 | Understand at a glance | Law of proximity | Group related things | Objects close to each other are seen as a group. |
| 12 | Understand at a glance | Law of common region | Use shared regions | Elements inside a clear boundary are seen as a group. |
| 13 | Understand at a glance | Law of uniform connectedness | Connect related elements | Visually connected elements look more related than unconnected ones. |
| 14 | Understand at a glance | Law of similarity | Keep patterns consistent | Things that look alike are taken to do alike. |
| 15 | Understand at a glance | Law of Pragnanz | Simplify what people see | People read ambiguous or complex visuals in the simplest way possible. |
| 16 | Understand at a glance | Occam's razor | Choose the simplest design that works | Among designs that work equally well, choose the one with the fewest parts. |
| 17 | Understand at a glance | Selective attention | Control attention | People notice only what relates to their current goal. |
| 18 | Memory and load | Cognitive load | Lower cognitive load | "The amount of mental resources needed to understand and interact with an interface." |
| 19 | Memory and load | Miller's law and chunking | Break content into chunks | Working memory holds only a few items at once, so group information into meaningful pieces. |
| 20 | Memory and load | Working memory | Do not make people remember | Recognition is easier than recall. |
| 21 | Memory and load | Serial position effect | Put essentials first and last | People remember the first and last items of a sequence best. |
| 22 | Progress and motivation | Zeigarnik effect | Show visible progress | Unfinished tasks stay on people's minds and pull them back. |
| 23 | Progress and motivation | Goal-gradient effect | Make the goal feel close | Motivation rises as people get closer to the goal. |
| 24 | Progress and motivation | Peak-end rule | Design the peak and the end | People judge an experience by its most intense moment and its ending. |
| 25 | Progress and motivation | Flow | Protect flow | People do their best work when fully immersed, with challenge matched to skill. |
| 26 | Errors and complexity | Postel's law | Accept messy input | Be liberal in what you accept, conservative in what you send. |
| 27 | Errors and complexity | Postel's law and error prevention | Prevent errors | The best error message is the one that never needs to appear. |
| 28 | Errors and complexity | Error recovery | Make errors recoverable | Mistakes are normal, so recovery must be cheap. |
| 29 | Errors and complexity | Tesler's law | Move complexity into the system | Every system has complexity that cannot be removed, only moved. |
| 30 | Errors and complexity | Paradox of the active user | Teach in context | Users never read manuals; they start using the product right away. |

Plus two meta laws: the **aesthetic-usability effect** (good-looking design is perceived as easier to use, so fix visual bugs as real bugs and watch behavior, not opinions, in tests) and the **Pareto principle** (make the vital 20 percent of flows excellent first).

## How to use them

- **Use them as checks, not quotas.** Miller's law is not a rule that menus have 7 items.
- **Most laws point the same way:** fewer simultaneous decisions, grouped information, visible state, fast feedback, forgiving input.
- **When two laws pull apart,** fall back on the tiebreaker: clarity, accessibility, user control, task completion.

## Example: one law, many cases

Fitts's law says the time to reach a target depends on its size and distance. One sentence, and it tells the model to:
- make the primary button large and put it under the last field,
- add padding around a 16 px icon button until its hit area reaches 24 to 44 px,
- make the checkbox label clickable too,
- put row actions on the row instead of in a toolbar at the top of the page,
- keep the mobile primary action in thumb reach.

A spec would have needed five separate rules, and would still miss the sixth case.
