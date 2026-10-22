#!/usr/bin/env bash
# Mirror ./wiki to the GitHub Wiki of this repo.
# GitHub only offers wikis on public repos (or private repos on a paid plan), and the wiki
# git remote only exists after the first page is created in the web UI
# (Wiki tab > "Create the first page" > Save). Do that once, then run this script.
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
repo="${1:-simberthon/ux-ultra}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
git clone -q "https://github.com/$repo.wiki.git" "$tmp/wiki"
rsync -a --delete --exclude .git "$here/wiki/" "$tmp/wiki/"
cd "$tmp/wiki"
# Wiki pages link to each other as Page.md and to repo files as ../path. Rewrite both for the wiki.
for f in *.md; do
  sed -i.bak -E \
    -e "s#\]\(\.\./([^)]+)\)#](https://github.com/$repo/blob/main/\1)#g" \
    -e "s#\]\(([A-Za-z0-9_-]+)\.md\)#](\1)#g" "$f"
  rm -f "$f.bak"
done
git add -A
if git diff --cached --quiet; then echo "Wiki already up to date."; exit 0; fi
git commit -qm "Sync wiki from main repo"
git push -q
echo "Wiki published: https://github.com/$repo/wiki"
