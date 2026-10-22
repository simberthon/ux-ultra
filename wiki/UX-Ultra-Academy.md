# UX Ultra Academy

A self-paced curriculum built from the sources behind UX Ultra: the 10 most-viewed UX videos on YouTube, the books every product designer reads, and the guidelines the best SaaS teams publish. Use it to learn the "why" behind the skill, or to train a team or a class.

## The four-week path

| Week | Theme | Watch | Read | Practice |
|---|---|---|---|---|
| 1 | Seeing bad design | Vox "Bad doors are everywhere", Tony Fadell "The first secret of great design" | Norman, *The Design of Everyday Things*, chapters 1 and 2. Krug, *Don't Make Me Think*, chapters 1 to 3 | Log 10 friction points in a product you use daily. For each, name the principle it breaks |
| 2 | Laws and hierarchy | Juxtopposed "world's shortest UI/UX design course", Envato "The Principles of Design", Jesse Showalter "60-30-10 Color Rule" | [The 30 laws](The-30-Laws.md), *Refactoring UI* | Redesign one settings page in grayscale: one primary action, grouped by proximity, every state drawn |
| 3 | SaaS flows | Android Developers "Improve user onboarding", Nerdwriter "How Dark Patterns Trick You Online" | [SaaS playbook](SaaS-Playbook.md), Wes Bush *Product-Led Growth* (onboarding chapters) | Map signup to first value for a SaaS product. Cut, defer, or keep every step |
| 4 | Testing and shipping | Stanford GSB "What Is Design Thinking?", freeCodeCamp UI/UX tutorial | Krug, *Rocket Surgery Made Easy*. Fitzpatrick, *The Mom Test* | Run a 5-user test on your week 2 redesign. Fix the top 3 problems. Score it with the [review checklist](Review-Checklist.md) |

## The 10 most-viewed UX videos

View counts read from each video's own YouTube page on 23 October 2026. Only videos that teach UX or UI principles count: pure Figma tutorials, career advice, and promos were excluded.

| Rank | Title | Creator | URL | Views (YouTube, seen 2026-10-23) |
|---|---|---|---|---|
| 1 | It's not you. Bad doors are everywhere. | Vox (with 99% Invisible and Don Norman) | https://www.youtube.com/watch?v=yY96hTb8WgI | 10,563,581 |
| 2 | Improve user onboarding for Google Play | Android Developers | https://www.youtube.com/watch?v=fK5OLEP0DdE | 8,520,732 (a 3-minute clip on a dev channel, so the count is probably inflated by paid promotion) |
| 3 | Learn Web Design For Beginners - Full Course | Flux Academy (Ran Segall) | https://www.youtube.com/watch?v=j6Ule7GXaRs | 4,616,797 |
| 4 | What Is Design Thinking? | Stanford Graduate School of Business | https://www.youtube.com/watch?v=gnWj97CEjeo | 4,346,499 |
| 5 | Web Design for Beginners, FREE COURSE | Envato (Tuts+) | https://www.youtube.com/watch?v=B-ytMSuwbf8 | 4,011,477 |
| 6 | UI / UX Design Tutorial: Wireframe, Mockup & Design in Figma | freeCodeCamp.org (Adrian Twarog) | https://www.youtube.com/watch?v=c9Wg6Cb_YlU | 3,407,046 |
| 7 | The first secret of great design | Tony Fadell, TED | https://www.youtube.com/watch?v=9uOMectkCCs | 2,205,986 on YouTube; 4,241,045 plays on ted.com (seen 2026-10-23) |
| 8 | world's shortest UI/UX design course | Juxtopposed | https://www.youtube.com/watch?v=wIuVvCuiJhU | 2,182,289 |
| 9 | 60-30-10 Color Rule | Jesse Showalter | https://www.youtube.com/watch?v=UWwNIMHFdW4 | 2,165,871 |
| 10 | The Principles of Design, FREE COURSE | Envato (Laura Keung) | https://www.youtube.com/watch?v=9EPTM91TBDU | 1,882,186 |

Runners-up worth watching for SaaS work: Nerdwriter1 "How Dark Patterns Trick You Online" (1,811,312 views), Juxtopposed "I Redesigned the ENTIRE YouTube UI from Scratch" (1,684,140), Don Norman TED "The three ways that good design makes you happy" (1,118,161 on YouTube).

## What each video teaches

Takeaways from each video's own transcript, written as instructions you can apply to a SaaS interface.

### 1. Vox: "It's not you. Bad doors are everywhere." (Don Norman)
- Make every control's affordance visible. If a control needs a text hint like "click here" or "drag me", fix the control's design instead of adding the hint.
- Design for discoverability. A user should be able to see every available action without guessing whether to tap once, twice, or hover. Don't hide primary actions behind hover-only or gesture-only triggers.
- Give feedback for every action: show what happened and why, using button pressed and loading states, toasts, and inline confirmation.
- Match the visual form to the one correct action. For example, a destructive control must not look like a primary "go" button.
- Work iteratively: observe real users doing the task, propose, prototype, test, and repeat. Treat repeated user errors as design bugs, not user faults.

### 2. Android Developers: "Improve user onboarding for Google Play"
- Show the "aha" moment in the first minutes. The video says about 80% of users of top apps decide whether to stay within the first 10 minutes.
- Personalize onboarding by intent. Use the acquisition source or a one-question intent picker to choose which first-run path to show.
- Introduce only the features needed now, and surface advanced features later once the user is engaged (progressive disclosure).
- Instrument the onboarding funnel step by step. Define target completion and drop-off metrics and find where users get stuck.
- A/B test one change at a time, iterate on the winner, and cover every user segment.

### 3. Flux Academy: "Learn Web Design For Beginners - Full Course"
- Do strategy before pixels. Write a brief covering goals, audience, and competitors, and check that the visual direction doesn't copy or get confused with a competitor.
- Wireframe in grayscale first, with no color, fonts, or images, and agree on the structure before styling. Typical sections are hero, about, team, FAQ, CTA, and footer.
- Make the hero say quickly what the page is and why the visitor should stay: heading, one paragraph, one CTA, and a visual.
- Align everything to shared edges and columns, and keep spacing between sections constant. The video uses 50px between sections and one corner radius, 30px, reused on cards, forms, and images.
- Build reusable classes or tokens instead of one-off styles. Set H1 and H2 defaults globally (for example H1 35px, H2 30px) and tighten heading line-height.
- Check every breakpoint, and always keep at least 20 to 30px of horizontal inner padding on small screens.

### 4. Stanford GSB: "What Is Design Thinking?" (37 seconds)
- Look at the problem from inside the user's workflow, not from the outside.
- Spend effort finding the right question before answering it. Confirm which job the user is trying to get done before you build a screen for it.

### 5. Envato: "Web Design for Beginners"
- Define a complete color system up front: primary, secondary, a gray ramp, and contextual colors such as error red. Check text contrast against WCAG; the video checks a pair at 3.94:1 in a contrast tool.
- Start typography by defining a type scale, weights, and line-heights as roles, and test line-height on several lines of real text. Use a limited set of fonts from a reliable source such as Google Fonts.
- Use an 8-point system for spacing and sizes, so every padding, gap, and height is a multiple of 8. For example, buttons use 24px vertical and 48px horizontal padding.
- Design every component state: default, hover, focus, active, disabled, and error. Keep the button's size the same on hover so the layout doesn't shift.
- Put form labels above the inputs, with about 8px between label and input. Keep forms to the minimum fields (a contact form needs only name, email, and message). Make focus visible and give errors a clear red treatment on the field.
- Use breakpoints set by the content (the video uses more than 1200, 1200 to 600, and under 600) rather than device presets. On narrow screens, shrink padding (48 to 24px) and gaps (96 to 64px), and skip cliche stock photos.

### 6. freeCodeCamp: "UI / UX Design Tutorial: Wireframe, Mockup & Design"
- Wireframe every page and its navigation first, including how the user gets from one page to the next, plus the responsive variant, before any visual design.
- Lay out on a column grid (the video uses a 15px gutter) and snap every element to it, so columns can collapse into rows on mobile.
- Scale padding with content density, and keep vertical rhythm consistent between sections. The video uses about 100px for light sections and about 200px for heavy ones on desktop.
- Build a clear type hierarchy with large size gaps. The video uses 72px hero, 48px section titles, 24px body and lead text, and smaller text for meta and copyright. On mobile, reduce font sizes, images, and vertical margins.
- Make form inputs full width on mobile, and make the submit CTA visually stronger than the inputs.
- "Measure twice, cut once": fix structure early, because changes get expensive later.

### 7. Tony Fadell (TED): "The first secret of great design"
- Fight habituation. Walk through the product as a brand-new user and log every small friction point, the equivalent of a "charge before use" sticker.
- Look broader: map the steps before and after the feature, then remove or merge steps instead of polishing a bad step. Nest replaced thermostat programming with learned behavior.
- Look closer: sweat tiny details such as setup steps, defaults, and empty states, even when they seem too small to matter.
- Ship things ready to use out of the box, with sensible defaults, prefilled sample data, and no mandatory setup chores before the first value.
- Bring fresh eyes, such as new teammates or first-time testers, to question "that's just how it works".

### 8. Juxtopposed: "world's shortest UI/UX design course"
- Start from a user-flow diagram running from landing to the key objective. Every screen must contribute to that objective.
- Prefer simple, visible navigation. For example, use a persistent sidebar of categories instead of a hidden dropdown or filter, and reuse proven patterns users already know.
- Create a design system before designing screens. It should cover colors (background, text, primary, secondary, accent, semantic, plus shades), fonts, buttons, inputs, cards, and icons.
- Use a type scale. The video uses 18px body, 14px small, and 32px title, with at most two fonts.
- Apply six principles: visual hierarchy, contrast, balance, consistency, simplicity, and interaction feedback.
- Write real copy, not lorem ipsum, while designing, so layouts get tested against realistic content.

### 9. Jesse Showalter: "60-30-10 Color Rule"
- Use about 60% neutral base, 30% primary or brand color, and 10% call-to-action color.
- Reserve the accent color for actionable elements only. If everything is colorful, nothing reads as clickable ("looks like a yard sale").
- The rule works in dark mode too: about 60% dark surface, about 30% lighter cards or surfaces, and 10% accent.
- Treat the rule as a guideline. Two-color schemes using several tints of one hue are fine if the CTA color stays scarce.

### 10. Envato: "The Principles of Design"
- Create hierarchy through contrast in size, color, and shape, so the user knows what to read or do first. Without contrast the user is confused.
- Use one focal point per view (emphasis), and use movement or flow to lead the eye to the primary action.
- Repeat the same styles, grid, and components to create unity and rhythm.
- Allow variety only within one family of related styles ("cousins, not siblings"). Keep balance and proportion in the layout.

### 11. Nerdwriter1: "How Dark Patterns Trick You Online" (runner-up)
- Never build a "roach motel". Cancelling, deleting the account, and unsubscribing must be as easy to find and finish as signing up, and self-serve, with no forced chat.
- Never style "unsubscribe" or "decline" like fine print. Give opt-out links readable contrast and size.
- Don't swap color meaning mid-flow, for example by turning the habitual "continue" color into a purchase button and shrinking the real "continue" to a tiny X.
- No fake urgency ("you just missed it!"), and no pre-checked contact or address-book import with repeated prompts. LinkedIn settled for $13M over this.
- Default to honest, plain-language consent screens. Trust is the retention strategy.

### 12. Juxtopposed: "I Redesigned the ENTIRE YouTube UI from Scratch" (runner-up)
- Use one icon set with one style, size, and alignment. Never use different icons for the same thing or the same icon for different things.
- Kill duplicate entry points. If a feature appears in three places in three forms, merge it into one useful page with filters.
- Put the most-used actions (explore, settings, search) where they're easy to reach. Make tap targets larger and within thumb reach on mobile.
- Make frequent actions one click with an undo, instead of a popup. List and history views need sort, filter, search, a grid or list toggle, and bulk select with bulk actions.
- Expose filters inline rather than behind a "more" menu, and make search return results first, not recommendations.
- Don't make leaving or closing harder to raise engagement, and "don't change for the sake of change". Keep familiar layouts and fix their problems instead.

## What the videos agree on

1. **Discoverable and visible beats clever and hidden** (Vox/Norman, Juxtopposed x2, Nerdwriter). Put primary actions and filters in plain sight, and never make any control need instructions to use.
2. **Feedback and states for every interaction** (Norman, Juxtopposed, Envato web). Design hover, focus, active, disabled, loading, error, and success states, and show system status after each action.
3. **Structure before style** (Flux, freeCodeCamp, Juxtopposed, Stanford). Do the user flow and grayscale wireframes and agree on the structure, then apply visuals.
4. **A token-based design system** (Juxtopposed, Envato web, Flux). Use a fixed color set including semantic colors, a type scale (about 14/18/32px or a 72/48/24px hierarchy), 8-point spacing, one corner radius, and one icon set.
5. **Hierarchy through contrast, with scarce accent color** (Showalter's 60-30-10, Envato principles, freeCodeCamp). Give each view one focal point and keep the CTA color only for actions. Check WCAG contrast.
6. **Consistency** (nearly all). Use the same component, icon, spacing, and placement for the same meaning, with no duplicate entry points.
7. **Cut steps and give value fast** (Fadell, Android onboarding). Remove or merge steps, use good defaults so the product is ready to use, show the "aha" moment early, and reveal advanced features progressively.
8. **Iterate with real users and data** (Norman, Android, Fadell). Observe, prototype, and test one change at a time, and track funnel drop-off.
9. **Honest UX** (Nerdwriter, Juxtopposed). Make exit and cancel paths as easy as entry paths, with no fake urgency or disguised opt-outs.
10. **Responsive by content** (Envato web, Flux, freeCodeCamp). Use breakpoints where the layout breaks, keep a minimum inner padding of 20 to 30px, collapse columns into rows, and make inputs full width on mobile.

## Reading list, in order

1. Steve Krug, *Don't Make Me Think*. The fastest way to start seeing like a user.
2. Don Norman, *The Design of Everyday Things*. The vocabulary: signifiers, feedback, mapping, constraints.
3. Jon Yablonski, *Laws of UX*. The psychology behind the rules, short and visual.
4. Adam Wathan and Steve Schoger, *Refactoring UI*. Visual hierarchy for people who write code.
5. Luke Wroblewski, *Web Form Design*. Forms are where SaaS products lose people.
6. Wes Bush, *Product-Led Growth*, and Samuel Hulick, *The Elements of User Onboarding*. Time to value.
7. Rob Fitzpatrick, *The Mom Test*, and Teresa Torres, *Continuous Discovery Habits*. Learning what to build.
8. Steve Krug, *Rocket Surgery Made Easy*. Testing without a lab.
9. Alan Cooper, *About Face*. Goal-directed design and posture, for when you go deeper.
10. Harry Brignull, *Deceptive Patterns*. What never to build.

## Free references to bookmark

- Nielsen Norman Group articles: https://www.nngroup.com/articles/
- Laws of UX: https://lawsofux.com/
- Vercel Web Interface Guidelines: https://vercel.com/design/guidelines
- WCAG 2.2 quick reference: https://www.w3.org/WAI/WCAG22/quickref/
- Microsoft HAX guidelines for AI: https://www.microsoft.com/en-us/haxtoolkit/library/
- Shape of AI patterns: https://www.shapeof.ai/
- Deceptive patterns: https://www.deceptive.design/types
- Baymard Institute: https://baymard.com/
