# Microcopy

Words are interface. Most "confusing UX" is a vague label. Main sources: NN/g error message guidelines, Vercel Web Interface Guidelines, Krug, Refactoring UI.

## Buttons and actions

1. A button is a verb plus an object: "Save API key", "Send invoice", "Invite teammate". Never "OK", "Submit", "Yes", or "Continue" where a specific verb fits.
2. The confirm button repeats the action: dialog "Delete 'Q3 report'?" has buttons "Delete report" and "Keep report".
3. Labels that open more input end with an ellipsis: "Rename...", "Export...".
4. In-progress labels describe the work: "Saving...", "Sending invite...".

## Error messages

Formula: **what happened + why, if known + how to fix it.**

| Bad | Good |
|---|---|
| Error 402 | Your card was declined by your bank. Try another card or contact your bank. |
| Invalid date | Enter a date after today. |
| Something went wrong | We couldn't save your changes because the connection dropped. Your edits are still here. Try again. |
| You entered an invalid email | Enter an email like name@company.com. |

Rules:
1. Say what to do, not only what is wrong.
2. Never blame the user. No "you failed to", no "invalid input".
3. No jokes on serious failures. No "Oops!" when someone just lost money or data.
4. Put the technical ID behind a "Details" link so support can find it.

## Empty states

Three parts: a headline that says what this place is for, one sentence on the value, one button that fills it.

> **No invoices yet**
> Invoices you send appear here, with their payment status.
> [Create invoice]

For a filtered empty state, say what was searched and offer a way out: "No results for 'acme' in the last 30 days. [Clear filters]".

## Confirmations and success

1. Success messages name the object: "Invoice INV-104 sent to Acme" instead of "Success!".
2. Destructive copy names the object and the consequence: "This permanently deletes 14 files. You can't undo this."
3. Completion screens say what happened and what to do next.

## Voice and consistency

1. Second person ("your projects") and active voice. Imperative for instructions ("Connect your bank").
2. One word per concept across the whole product. Keep a small glossary. If the sidebar says "Projects", the page never says "Workspaces".
3. Front-load keywords in labels, navigation, and headings so they scan.
4. Pick one casing rule (sentence case is the safest) and apply it everywhere.
5. Cut words until meaning would break. No welcome text, no self-praise inside the product.
6. Numbers as numerals ("8 projects"), a space between number and unit ("10 MB"), locale-aware dates and currency, relative times with the exact time on hover.
7. Placeholders show an example of the format, never the instructions and never the label.

## Onboarding copy

Talk about the user's result, not your features. "Send your first invoice in 2 minutes" beats "Welcome to the invoice module". People do not buy products; they buy better versions of themselves (Samuel Hulick).
