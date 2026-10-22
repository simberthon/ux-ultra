# Ethics: no dark patterns

Deceptive patterns raise one metric and quietly destroy trust, retention, and margins (chargebacks, churn, support load). Regulators now act on them. Main sources: Harry Brignull's deceptive patterns taxonomy (deceptive.design), Nir Eyal's Manipulation Matrix, Nerdwriter's "How Dark Patterns Trick You Online".

## The test before any engagement feature

Ask Nir Eyal's two questions:
1. Would I use this myself?
2. Does it materially improve the user's life or work?

Yes and yes: ship it. Anything else: it serves the metric, not the user. Do not ship it.

## Never build these

| Pattern | What it looks like | Do this instead |
|---|---|---|
| Hard to cancel (roach motel) | "Call us to cancel", a cancel maze | Self-serve cancel in billing settings, same channel as signup, one optional retention offer at most |
| Hidden costs | Fees, taxes, or seat math revealed at the last step | Show the full price, renewal price, and date before commitment |
| Hidden subscription | A trial that converts silently | Show the conversion date up front and send a reminder before it |
| Preselection | Pre-checked marketing opt-in or paid add-on | Consent and add-ons default to off |
| Confirmshaming | "No thanks, I hate saving money" | A neutral decline with the same visual weight |
| Trick wording | Double negatives, "Uncheck to not receive" | Plain, positive labels |
| Visual interference | A tiny grey "unsubscribe", a swapped button color mid-flow | Readable opt-outs, stable button meanings |
| Fake urgency or scarcity | Fake countdowns, "3 people are viewing" | Only true, verifiable urgency |
| Fake social proof | Invented reviews or activity | Real, attributable proof only |
| Nagging | A dismissed prompt that comes back every login | Remember the dismissal |
| Forced action | Must invite friends or import contacts to continue | Optional, skippable, never pre-checked |
| Obstruction | Data export or account deletion buried | Export and delete reachable from settings |
| Comparison prevention | Plans described with different words | Same features, same order, every tier |

## Pricing and billing that build trust

1. Show price in the user's currency, with the per-seat math done for them.
2. Show usage against limits before users hit them ("8 of 10 seats used") and degrade gracefully at the limit (read-only), never through data loss.
3. Upgrade prompts appear at the moment of need, say what the user just tried and what the plan unlocks, and can always be dismissed.
4. Never paywall before the first value moment.

## Legal context (checked October 2026, verify before relying on it)

- EU: the withdrawal button for online contracts has been mandatory since 19 June 2026. The Digital Services Act Art. 25 bans deceptive interfaces on platforms. GDPR consent must be freely given and off by default.
- Germany: a cancellation button has been required since 2022 (section 312k BGB).
- US: the FTC "click-to-cancel" rule was vacated in July 2025 and rulemaking restarted in 2026. ROSCA enforcement continues. California has its own auto-renewal rules.
- Email: Gmail and Yahoo require one-click unsubscribe for bulk mail.

In practice, treat easy cancel and honest pricing as legal requirements everywhere.

## Engagement done right

- Make the core action effortless: one click, good defaults, keyboard first.
- Let users invest in ways that raise their own value (templates, saved views, integrations), never lock-in by blocking export.
- Send notifications only when they carry real, relevant information, with per-type controls.
- The reward is the job getting done, not streaks, badges, or slot-machine variability.
