# SaaS playbook

The surfaces every SaaS product has, and the rule that matters most on each. The full playbook (5 to 10 rules per surface, sources, and the default AI mistake for each) is in [`saas-playbook.md`](../skills/ux-ultra/references/saas-playbook.md).

| Surface | The rule that matters most | The default mistake to catch |
|---|---|---|
| Onboarding | Define one activation event and get users to it with sample data and a 3 to 5 item checklist | A feature-tour carousel over an empty dashboard |
| Navigation | Persistent sidebar, active state visible, view state in the URL, Cmd/Ctrl+K for power users | Links built as `div onClick`, filters lost on refresh |
| Forms | Labels above fields, validate on blur, never clear input, submit under the last field | Placeholder labels and a submit button disabled for unknown reasons |
| Tables and dashboards | Design every state; 3 to 5 decision numbers with a baseline, each clickable to its rows | Decorative KPI cards and "No data" with no action |
| Feedback and loading | Under 0.1 s nothing, 1 to 10 s skeleton, over 10 s progress and Cancel; optimistic updates | A full-screen spinner then "Success!" |
| Errors and destructive actions | What happened plus how to fix it; undo over confirm; confirm buttons name the action | `toast.error("Something went wrong")` and `confirm("Are you sure?")` |
| Settings and permissions | Show disabled controls with the reason and who to ask | Admin buttons that silently vanish |
| Pricing and billing | Full price before commitment, dismissible contextual upgrades, self-serve cancel | "Contact us to cancel" |
| Notifications and email | Only actionable or followed events, per-category controls, batching | One generic email per event |
| Microcopy | Verb plus object on buttons, one word per concept | "Submit", "Oops!", three names for one thing |
| Accessibility | Keyboard complete, visible focus, contrast 4.5:1, targets 24 px or more | `outline: none` and clickable divs |
| Mobile | Real mobile tasks, thumb reach, 16 px inputs, no hover-only actions | Overflowing tables and iOS zoom on focus |
| Motion | Under 300 ms, ease-out, only transform and opacity, none on frequent actions | `transition: all 0.5s` on everything |
| AI features | Stream with Stop, edit and regenerate, cite sources, preview before acting | A blocking chat box with no controls |
| Metrics and research | HEART goal, signal, metric; 5 users per test round | Counting page views and calling it success |
