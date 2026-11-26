#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT

cd "$workdir"
# Upstream's skybridge skill symlinks its references to chatgpt-app-builder, and the skills CLI drops symlinks.
npx --yes skills add alpic-ai/skybridge --skill chatgpt-app-builder -a universal -y

source="$workdir/.agents/skills/chatgpt-app-builder"
target="$repo_root/plugins/alpic/skills/build-mcp-apps"
overlay="$repo_root/skills-overrides/build-mcp-apps"

if [ -z "$(ls -A "$source/references" 2>/dev/null)" ]; then
  echo "Upstream Skybridge references are missing from $source" >&2
  exit 1
fi

rm -rf "$target"
mkdir -p "$target"
cp -R "$source/references" "$target/references"

# Alpic ships a curated build skill rather than Skybridge's migration guide.
rm -f "$target/references/migrate-to-v1.md"

# Preserve Alpic-specific naming, deployment guidance, and host integration.
cp -R "$overlay/." "$target/"
