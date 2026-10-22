#!/usr/bin/env bash
# Install UX Ultra as a personal Claude Code skill (all projects) or into one project.
#   ./scripts/install.sh            -> ~/.claude/skills/ux-ultra
#   ./scripts/install.sh --project  -> ./.claude/skills/ux-ultra (run from your project root)
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
if [ "${1:-}" = "--project" ]; then
  dest="$PWD/.claude/skills/ux-ultra"
  cmd_dest="$PWD/.claude/commands"
else
  dest="$HOME/.claude/skills/ux-ultra"
  cmd_dest="$HOME/.claude/commands"
fi
mkdir -p "$dest" "$cmd_dest"
rsync -a --delete "$here/skills/ux-ultra/" "$dest/"
cp "$here"/commands/*.md "$cmd_dest/"
echo "UX Ultra installed in $dest"
echo "Commands copied to $cmd_dest: $(cd "$here/commands" && ls *.md | sed 's/\.md$//' | sed 's/^/\//' | tr '\n' ' ')"
