# Contributing

## What makes a good rule

1. **It generalizes.** It covers a family of cases, not one component.
2. **It is an instruction.** Start with a verb: "Keep", "Show", "Never".
3. **It has a source.** A book, a research article, a standard, or a measured result. Add it to `sources.md`.
4. **It survives the tiebreaker.** If it hurts clarity, accessibility, user control, or task completion in common cases, it is not a rule.

## Where things go

| Change | File |
|---|---|
| A new law or a better instruction for a law | `skills/ux-ultra/references/laws.md` |
| A SaaS surface rule | `skills/ux-ultra/references/saas-playbook.md` |
| A threshold or benchmark | `skills/ux-ultra/references/numbers.md` |
| A review item | `skills/ux-ultra/references/review-checklist.md` and `wiki/Review-Checklist.md` |
| A mistake AI tools keep making | `skills/ux-ultra/references/ai-default-mistakes.md` |
| Anything that changes the always-loaded core | `skills/ux-ultra/SKILL.md` (keep it short) |

## Style

- Plain English, short sentences, sentence-case headings.
- No em dashes, no emoji.
- Numbers with units and a source.

## Release

1. Add an entry to `wiki/Changelog.md` and bump `version` in `.claude-plugin/plugin.json`.
2. Open a pull request. Test the skill on one real screen with `/ux-review` before merging.
3. When the repo is public, run `scripts/publish-wiki.sh` after merging wiki changes.
