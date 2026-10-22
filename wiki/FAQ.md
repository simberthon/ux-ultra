# FAQ

**Does it replace a designer?**
No. It raises the floor: the screens an AI tool builds stop failing in the predictable ways. A designer still sets direction, does research, and makes the calls the rules cannot.

**Does it choose colors and fonts?**
No. UX Ultra owns behavior: what a screen is for, its states, its feedback, its flow. Pair it with your design system or a visual design skill for the look.

**Will it make every screen look the same?**
No. It constrains hierarchy and behavior, not style. Two products can follow every rule and look nothing alike.

**Is it only for SaaS?**
The laws and heuristics apply to any interface. The playbook is written for SaaS and web apps: onboarding, settings, tables, billing, notifications, AI features.

**Does it work outside Claude Code?**
Yes. Paste `templates/CLAUDE-snippet.md` into any rules file or system prompt (Cursor, Codex, Copilot instructions, Windsurf).

**How much context does it use?**
`SKILL.md` is short and always loaded. The detailed references load only when a task needs them.

**What if two rules disagree?**
Use the tiebreaker: clarity, accessibility, user control, task completion, in that order. The skill also lists the common tensions and the usual answer.

**Where do the rules come from?**
Every rule traces back to a book, a research article, or a guideline. See `skills/ux-ultra/references/sources.md`. Vendor benchmarks are marked as directional.

**Why is the wiki a folder and not a GitHub Wiki?**
GitHub only offers wikis on public repositories, or on private ones with a paid plan. The wiki lives in `wiki/` so it works now. When the repo goes public, `scripts/publish-wiki.sh` copies it to the GitHub Wiki in one command.

**Can I share it?**
It is MIT-licensed. Keep the copyright line and the credits.
