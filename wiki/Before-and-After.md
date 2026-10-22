# Before and after

The same request, twice: "Build a team settings page where admins can invite members and change roles." First without a brief, then with UX Ultra.

## Without UX Ultra

What an AI coding tool typically ships:

- A page titled "Settings" with five tabs: General, Members, Billing, Integrations, Advanced. The Members tab is third.
- An "Email" input with a placeholder and no label, a role dropdown with no default, and three buttons of equal weight: "Submit", "Cancel", "Reset".
- Submit is disabled until the email regex passes. Typing one character shows "Invalid email" in red.
- On a server error, a toast says "Something went wrong" and the form is empty again.
- Removing a member calls `confirm("Are you sure?")`. Changing a role saves silently with no feedback.
- Members who are not admins see the same page with the invite form simply missing.
- With no members yet, the table shows "No data".

Each of these looks fine in a screenshot and costs users time, data, or confidence.

## With UX Ultra

The brief comes first:

1. **User and goal:** a workspace admin wants a teammate working in the product within a minute.
2. **Shortest path:** open Members, type one or more emails, keep the default role, send.
3. **Primary action:** "Send invite", solid, right under the email field.
4. **States:** first run (only you, with an invite prompt), loading (row skeletons), error (inline, input kept), pending invites, success.
5. **Risks:** wrong role (default to Member, the least risky); typo in email (validate on blur, allow paste of a list); removing the wrong person (undo).
6. **Done moment:** the invitee appears in the list as "Invite sent", with "Resend" and "Copy invite link".
7. **Rules in play:** Hick (one form, one default), Fitts (action next to the field), Postel (paste a comma-separated list), law 28 (keep input), peak-end (clear success row).

What gets built:

- "Members" is a first-class page, reachable from the sidebar and Cmd+K, with the URL `/settings/members`.
- The email field has a label, accepts a pasted list, validates on blur, and the error clears as soon as the input is fixed.
- Role defaults to Member and shows a one-line description of each role.
- "Send invite" is the only solid button. It shows a spinner and keeps its label while sending.
- On a server error, the emails stay in the field and the message says what failed and how to retry.
- Role changes update at once with a "Role updated" note next to the row and an Undo.
- Removing a member happens at once with an Undo toast for 8 seconds. Removing the last admin is blocked with the reason shown.
- Non-admins see the list read-only and a line: "Only admins can invite members. Ask Maya (Owner)."
- The empty state reads "It's just you so far. Invite your team to work on projects together." with the invite field right there.

## Why it matters

None of the changes is clever. All of them get skipped when nobody says them out loud. The baseline moves from "technically works" to "I'd ship this after one pass".
