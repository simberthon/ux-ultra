# What AI coding tools get wrong by default

Every AI coding tool can build a settings page in ninety seconds. It will look fine and quietly break half a dozen things product designers learned the hard way. That is not the model being dumb. It is the model having no brief. Check this list on purpose, because these are the defaults you will drift toward.

| Area | The default mistake | The fix |
|---|---|---|
| Hierarchy | Three equally weighted buttons on one view | One primary, the rest quieter |
| Forms | Placeholder-only or floating labels | Persistent label above every field |
| Forms | Submit disabled until every regex passes, "Invalid email" after one keystroke | Validate on blur, keep submit enabled, show what is missing on click |
| Forms | Submit button far from the last field | Right under the last field |
| Errors | `catch (e) { toast.error("Something went wrong") }` everywhere | Specific message next to the problem, with the fix |
| Errors | The form clears after a server error | Keep every input, retry in place |
| Confirms | `window.confirm("Are you sure?")` on harmless actions, nothing on destructive ones | Undo for reversible, named confirm for irreversible |
| Loading | Full-screen centered spinner for every request | Layout-matching skeleton or inline indicator, optimistic updates |
| Loading | A generic "Success!" toast after waiting on the server | Optimistic update plus a toast that names the object |
| Empty states | "No data" with no action | Headline, one value line, one button that fills it |
| Onboarding | Six-step modal carousel of feature marketing over an empty dashboard | Sample data or a template, a 3 to 5 item checklist tied to outcomes |
| Navigation | `div onClick` or `button` with `router.push` for links | Real links that open in a new tab |
| State | Filters and tabs in component state only, lost on refresh | Keep view state in the URL |
| Dashboards | Decorative KPI cards with no comparison and no drill-down | 3 to 5 decision numbers with a baseline, each clicking through to rows |
| Tables | Desktop table overflowing on mobile, hover-only row actions | Cards or priority columns, visible or menu actions |
| Accessibility | `outline: none`, clickable divs, unnamed icon buttons | Focus-visible ring, semantic elements, `aria-label` |
| Motion | `transition: all 0.5s ease` everywhere, fade-in on every card | Only transform and opacity, under 300 ms, nothing on frequent actions |
| Copy | "Oops! Something went wrong", "Submit", mixed casing, three names for one object | Plain error formula, verb plus object, one casing, one word per concept |
| Billing | "Contact us to cancel", an upgrade modal that cannot be closed | Self-serve cancel, dismissible contextual upgrade prompts |
| Permissions | Admin-only buttons that silently disappear | Show them disabled with the reason and who to ask |
| AI features | Chat box that blocks until the full answer, no stop, no citations, actions without preview | Streaming, Stop, edit and regenerate, citations, preview and approve |
| Settings | Fourteen options on one page when the user needed one | Group, search, sensible defaults, advanced options one level deeper |
