# Research and metrics

Good UX is not a guess you defend. It is a loop: learn, build the smallest thing, measure, keep or cut. Main sources: Rob Fitzpatrick (The Mom Test), Eric Ries (The Lean Startup), Teresa Torres (Continuous Discovery Habits), Steve Krug (Rocket Surgery Made Easy), Google's HEART framework, Wes Bush (Product-Led Growth), NN/g.

## Before building: validate the problem

1. Ask about the past, not the future. "When did this last happen? What did you do? What did it cost you?" beats "Would you use X?" (The Mom Test)
2. Treat compliments and feature requests as leads to dig into, not specs. Ask "Why do you want that? What do you do today instead?"
3. Look for workarounds: spreadsheets, scripts, manual steps. They prove real pain and show the mental model to match.
4. Tie every UI change to one outcome (for example "time to first report") and the customer opportunity behind it. (Torres)
5. Generate at least three solutions per opportunity before picking one, then test the riskiest assumption the cheapest way: prototype, fake door, one-question survey, data query.
6. Build the smallest thing that tests the riskiest assumption before polishing UI. An MVP is for learning, not for launching. (Ries)

## Activation and time-to-value

1. Define one activation event per persona: the first action that delivers core value ("first invoice sent"), not "signed up" or "completed profile".
2. Check that it predicts retention. Activated users should retain at least about twice as well.
3. Measure time-to-value from signup to that event, and treat it as a core metric.
4. Audit every signup and onboarding step with three questions: eliminate it, delay it until after value, or keep it only if it is mission-critical. (Wes Bush's straight-line onboarding)
5. Close the gap between perceived value (what marketing promised) and experienced value (what the product delivers in the first session).

## Measure with HEART

Pick only the dimensions that matter for the feature, then map each one as Goal, Signal, Metric before writing tracking code.

| Dimension | Example goal | Example metric |
|---|---|---|
| Happiness | Users feel the tool saves time | Short in-product survey score |
| Engagement | Teams use reports weekly | Weekly report views per active team |
| Adoption | New users try the import | Percentage of new accounts importing within 7 days |
| Retention | Users keep coming back | Week-4 retention of activated users |
| Task success | Users finish setup without help | Completion rate, time on task, error rate |

Avoid vanity metrics (total signups, page views). Report per cohort and per funnel step.

## Test with people

1. Five users per distinct user group find most usability problems. Three rounds of five beat one round of fifteen. (NN/g)
2. Test often on a fixed cadence: one morning a month with three users is enough to start. (Krug)
3. Have the builders watch. People who see a user struggle fix things faster than people who read a report.
4. Write tasks as realistic scenarios ("Invite your accountant so they can see invoices"), not instructions ("Click Settings, then Members"). Ask users to think aloud. Do not help.
5. After each round, fix the top three serious problems with the smallest change that works (a label, a move, a default), then test again.
6. Do a heuristic review first so test sessions are not spent on obvious bugs.

## After shipping

1. Ship behind a flag with a written hypothesis: "X will raise activation from A to B percent for segment S".
2. Watch zero-result searches, rage clicks, error rates per screen, and abandoned flows. That is where the UX debt is.
3. Decide on a schedule: keep, iterate, or remove. Remove features that fail adoption instead of adding a tour for them.
4. For product-market fit, ask the Sean Ellis question ("How would you feel if you could no longer use this?") and study the "very disappointed" group.
