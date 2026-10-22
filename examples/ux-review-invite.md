# Example: /ux-review on a bad invite page

The page under review is [`invite-before.html`](invite-before.html), a typical AI-generated members page. Command run in a fresh project with UX Ultra installed:

```
/ux-review invite.html
```

Output, unedited (Claude Code, 23 October 2026):

---

**Primary goal:** an admin invites a teammate by email with a role, and sees that the invite went out and the person was added to the members list.

Before the UX scores, three bugs stop the page from working at all:
- **The invite sends nothing.** `invite.html:10` posts to `/api/invite` with no body, so the email and role never reach the server.
- **The tabs throw an error.** `go()` is never defined, so clicking a tab (`:2`) fails.
- **Members can't be removed.** `remove()` (`:11`) is never connected to anything in the page.

## Scores

| Area | Item | Score | Evidence | Fix |
|---|---|---|---|---|
| Purpose | **B** One clear purpose | 1 | `:3` the heading says "Members" but the page is both an invite form and a list | Add an "Invite a teammate" section above the member list |
| Purpose | Shortest path | 1 | `:5` role starts empty and must be picked; Cancel and Reset add choices | Default role to Member; remove Reset |
| Purpose | **B** One dominant primary action | 0 | `:6` three identical buttons, and the main one starts disabled (greyed out) | Make "Send invite" the only primary-styled button |
| Purpose | Secondary actions quieter | 0 | `:6` Cancel and Reset look the same as Submit | Make Cancel a text button; delete Reset |
| Purpose | Order of content | 1 | `:6` Cancel and Reset come after the final action | Put the submit button last and alone |
| States | **B** Loading | 0 | `:10` nothing changes while sending; the list at `:7` is never loaded | Show "Sending…" on the button; show skeleton rows while the list loads |
| States | **B** Empty (first use) | 0 | `:7` just says "No data" | "No teammates yet. Invite someone to work with you." with focus going to the email field |
| States | **B** Error for every network call | 0 | `:10` `fetch` only fails on network errors, so a 4xx/5xx response looks like success; `:11` delete has no error handling | Check `res.ok` and handle each failure |
| States | Long content | 0 | `:7` no table headers, no handling for long emails | Add Email / Role / Status headers; truncate long text with a tooltip |
| States | Success | 0 | `:10` success is never shown | "Invite sent to jane@acme.com" plus a new "Pending" row |
| Feedback | Response under 100 ms | 0 | clicking Submit shows nothing | Set the button's busy state immediately |
| Feedback | Progress on waits over 1 s | 0 | none | Spinner inside the button |
| Feedback | Optimistic updates | 0 | the list never updates | Add a Pending row right away; roll it back if the request fails |
| Feedback | No double submit | 0 | `:10` the button stays clickable during the request | Disable it while the request is in flight |
| Forms | **B** Visible labels | 0 | `:4` uses a placeholder as the label; `:5` has no label at all | Add `<label>` elements for Email and Role |
| Forms | Validate on blur | 0 | `:9` shows an `alert()` on every keystroke, starting at the first letter | Validate on blur, show the message inline, clear it once the input is fixed |
| Forms | Submit not pre-disabled | 0 | `:6` has `disabled` | Keep it enabled; clicking it reveals what is missing |
| Forms | **B** Input survives errors | 0 | `:10` runs `email.value=''` when the request fails | Never clear the field on failure |
| Forms | type / inputmode / autocomplete | 0 | `:4` plain text input | `type="email"` and `autocomplete="off"`, because it's someone else's address |
| Forms | Only needed fields, with defaults | 1 | the fields are minimal, but role has no default | Pre-select Member |
| Forms | Submit uses a specific verb | 0 | `:6` "Submit" | "Send invite" |
| Errors | **B** Plain, specific, next to the problem | 0 | `:9` "Invalid email" and `:10` "Something went wrong", both as alerts | e.g. "jane@acme already has an account" shown under the field |
| Errors | Undo instead of confirm | 0 | `:11` uses `confirm()` | Remove at once and show an Undo toast |
| Errors | Irreversible actions name object and consequence | 0 | `:11` "Are you sure?" | "Remove Jane from Acme? She loses access now." with a [Remove Jane] button |
| Errors | Destructive actions styled and kept apart | 0 | `:6` Reset sits right next to Submit | Delete Reset; style the per-row Remove as destructive |
| Navigation | You can tell where you are | 1 | `:2` has an h2 but no active tab | Add `aria-current` and an active style |
| Navigation | **B** Links are links, buttons are buttons | 0 | `:2` tabs are `div` elements with `onclick` | Use `<a href="?tab=members">` |
| Navigation | View state in the URL | 0 | `:2` `go()` doesn't update the URL (and doesn't exist) | Put the tab in the URL |
| Navigation | Conventions | 1 | the tab pattern is fine, but the tabs don't work | See above |
| Navigation | One word per concept | 1 | the API says "invite" but the UI never does | Use "Invite" in the heading and button |
| A11y | **B** Keyboard only, with visible focus | 0 | `:2` tabs can't be focused; `:4` has `outline:none` | Use real elements and remove `outline:none` |
| A11y | **B** Contrast | 2 | browser default black on white | — |
| A11y | Target size | 1 | default buttons are about 21 px tall | Make them at least 24 px (44 px on touch) |
| A11y | `aria-live` | 0 | results only appear in `alert()` | Add a `role="status"` region |
| Visual | Hierarchy reads in grayscale | 0 | no CSS; everything sits on one line | Group the form, push the list below, add a primary style |
| Visual | Spacing and type scale | 0 | no styles | Use the app's design tokens |
| Visual | Consistency | 1 | nothing to compare yet | — |
| Visual | Component states | 0 | tabs have no hover, focus or active state | Add them |
| Mobile | Works at 320 px | 0 | no viewport meta tag; the form is one inline row | Add the viewport tag and stack the fields |
| Mobile | No hover-only actions | 2 | none | — |
| Mobile | Inputs at least 16 px | 0 | default is about 13 px, so iOS zooms in | `font-size:16px` |
| Copy | Buttons are verb + object | 0 | "Submit", "Reset" | "Send invite" |
| Copy | No jargon or raw codes | 2 | none | — |
| Copy | Success and empty copy | 0 | "No data" and no success message | See States |

Not applicable here: no-results state, partial failure, 404/403/500 pages, icon-only buttons, color-only signals, modals, reduced motion, AI features. Ethics also doesn't apply unless invites add paid seats (see fix 12).

## Fixes, worst first

1. **Send the email and role, and check `res.ok`** (`:10`). Without this the main task can't be completed. *Rule: every network call has an error state; successful task completion.*
2. **Stop clearing the email when the request fails** (`:10`). *Non-negotiable 4: user input survives errors.*
3. **Replace the alerts with plain, inline errors** (`:9`, `:10`). Say what happened and how to fix it, next to the field. *Non-negotiable 5; Nielsen's heuristic: help users recognize, diagnose and recover from errors.*
4. **Add visible labels** for Email and Role (`:4`, `:5`). *Non-negotiable 3.*
5. **Make keyboard use work:** remove `outline:none`, and turn the tab `div`s into real `<a>` links that put the tab in the URL (`:2`, `:4`). *Non-negotiables 7 and 8.*
6. **Have one primary action**, "Send invite". Make Cancel quiet and delete Reset (`:6`). *Non-negotiable 2; Hick's Law; Von Restorff effect.*
7. **Show loading and success:** busy state on click, no double submit, an `aria-live` message "Invite sent to …", and a Pending row added to the list. *Doherty threshold; non-negotiable 1; visibility of system status.*
8. **Design a real empty state** to replace "No data" (`:7`), with a headline, a value line and an action. *Non-negotiable 1; microcopy rules.*
9. **Validate on blur and keep Submit enabled** (`:6`, `:9`). Stop the per-keystroke alert. *Postel's Law; the forms rules.*
10. **Default the role to Member and use `type="email"`** (`:4`, `:5`). *Tesler's Law: the system should take on the complexity, not the user.*
11. **Use undo for member removal**, or a confirm that names the person and the consequence. Then connect `remove()` to the rows (`:11`). *Non-negotiable 6.*
12. **If an invite adds a paid seat**, show "Adds 1 seat · $X/mo" before sending. *Non-negotiable 10: no hidden prices.*
13. **Fix mobile and the document basics:** add the viewport meta tag, `<!doctype html>`, `lang`, `<title>`, use 16 px inputs and stack the form. *Mobile rules; Fitts's Law.*

**Total: 15 / 88. Verdict: rework.** 13 blockers score 0, and the invite request doesn't send any data.

I haven't changed any code. Tell me if you want me to apply these fixes.
