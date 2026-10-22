# UX Ultra

**The UX brief your AI coding agent never got.**

Every AI coding tool can build you a settings page in ninety seconds. It will have a form, a save button, maybe a sidebar. It will look fine, and it will quietly break the things every product designer learned the hard way: the primary action does not stand out, the save button is nowhere near the last field, the error state wipes your inputs, and the page offers fourteen options when the user needed one.

UX Ultra is a Claude Code skill that fixes that. It gives the model the psychology and the playbooks behind good SaaS interfaces, so it designs from principles instead of copying a spec.

> The model is only as opinionated as the brief you give it. UX Ultra is the brief.

## What is inside

| Part | What it gives your agent |
|---|---|
| **The UX Ultra loop** | Eight steps for every screen: goal, shortest path, obvious next action, no distractions, instant feedback, error prevention, preserved work, clear completion |
| **10 non-negotiables** | The rules that hold on every screen (every state designed, one primary action, visible labels, input survives errors, undo beats confirm...) |
| **30 laws of UX** | Hick, Fitts, Jakob, Doherty, peak-end, Tesler, Zeigarnik and more, each as one principle plus four instructions |
| **Heuristics** | Nielsen's 10, Norman's principles, Krug's laws, Cooper's postures |
| **SaaS playbook** | Onboarding, navigation, forms, tables, dashboards, feedback, errors, settings, billing, notifications, microcopy, accessibility, mobile, motion, AI features, metrics |
| **Review checklist** | A scored pre-ship audit with blockers, used by `/ux-review` |
| **AI default mistakes** | The 22 things AI coding tools get wrong unless told otherwise |
| **Sources** | 15 books, the 10 most-viewed UX videos on YouTube, and 100+ guidelines and articles |

## Install

### Option 1: as a Claude Code plugin (recommended)

```bash
# In Claude Code
/plugin marketplace add simberthon/ux-ultra
/plugin install ux-ultra@ux-ultra
```

The repo is private for now, so your GitHub account needs access to it.

### Option 2: copy the skill

```bash
git clone https://github.com/simberthon/ux-ultra.git
cd ux-ultra
./scripts/install.sh            # for all your projects (~/.claude/skills)
./scripts/install.sh --project  # run from a project root to install it there only
```

### Option 3: just the rules

No Claude Code? Paste [`templates/CLAUDE-snippet.md`](templates/CLAUDE-snippet.md) into your `CLAUDE.md`, `AGENTS.md`, `.cursorrules`, or any system prompt. It is the compact version of the skill.

## Use

UX Ultra loads by itself whenever Claude builds or changes a user interface. You can also call it on purpose:

| Command | What it does |
|---|---|
| `/ux-brief <what you are building>` | Writes a 7-line UX brief before any code: user goal, shortest path, primary action, states, risks, done moment, laws in play |
| `/ux-review [file, route, or diff]` | Scores the UI against the checklist and lists fixes, blockers first |

Or simply ask: "Build the billing settings page, use UX Ultra."

See a real run in [`examples/ux-review-invite.md`](examples/ux-review-invite.md): a typical AI-generated invite page, scored 15 of 88, with 13 ranked fixes.

## Documentation

The full guide lives in the [wiki folder](wiki/Home.md): how the skill works, every law with examples, the SaaS playbook, the UX Ultra Academy (curriculum built from the best books and most-viewed videos), a teaching kit for workshops, and an FAQ.

## Principles behind the project

- **Laws, not a style guide.** A model can reason from a principle. It can only copy from a spec.
- **Behavior, not branding.** UX Ultra decides what the screen is for and how it behaves. Your design system decides how it looks.
- **A tiebreaker, not a checklist.** When rules conflict: clarity, accessibility, user control, task completion. Do not apply them mechanically.
- **Every rule has a source.** See [`sources.md`](skills/ux-ultra/references/sources.md).

## Credits

Created by Simon Berthon. The law format (name, one sentence, four instructions) and the eight-step implementation loop were inspired by "The UX Laws in My CLAUDE.md" (designbuilding, September 2026). Law definitions quote Jon Yablonski's lawsofux.com.

## License

MIT. See [LICENSE](LICENSE).
