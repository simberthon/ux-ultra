# Getting started

## 1. Install

**As a plugin (recommended).** In Claude Code:

```
/plugin marketplace add simberthon/ux-ultra
/plugin install ux-ultra@ux-ultra
```

While the repo is private, your GitHub account needs read access to it.

**By copying the skill.**

```bash
git clone https://github.com/simberthon/ux-ultra.git
cd ux-ultra
./scripts/install.sh            # all projects: ~/.claude/skills/ux-ultra
./scripts/install.sh --project  # run from a project root: ./.claude/skills/ux-ultra
```

**Without Claude Code.** Paste `templates/CLAUDE-snippet.md` into `CLAUDE.md`, `AGENTS.md`, `.cursorrules`, or your system prompt.

## 2. Check that it loads

Start Claude Code in a project and ask: "What skills do you have for UX?" You should see `ux-ultra`. Or type `/ux-brief` and check that the command exists.

## 3. Try it on something real

Pick a screen you already have, ideally a settings page or a form, and run:

```
/ux-review src/pages/settings
```

You get a scored table, blockers first, each fix tied to the rule it comes from. Then ask: "Apply the blocker fixes."

For new work, start with the brief:

```
/ux-brief a page where admins invite teammates and set their role
```

Read the brief, adjust it, then say "build it".

## 4. Make it automatic

You do not need to call it. The skill loads whenever Claude builds or changes an interface. To make it stick in a team repo, install it with `--project` and commit the `.claude/skills/ux-ultra` folder, so everyone who clones the repo gets the same rules.

## Update

Plugin: `/plugin marketplace update ux-ultra`. Copied skill: `git pull` in your clone, then run `./scripts/install.sh` again.
