#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT

cd "$workdir"
npx --yes skills add alpic-ai/skybridge --skill skybridge -a universal -y

source="$workdir/.agents/skills/skybridge"
target="$repo_root/plugins/alpic/skills/build-mcp-apps"
overlay="$repo_root/skills-overrides/build-mcp-apps"

rm -rf "$target"
cp -R "$source" "$target"

# Alpic ships a curated build skill rather than Skybridge's migration guide.
rm -f "$target/references/migrate-to-v1.md"

# Preserve Alpic-specific naming, deployment guidance, and host integration.
cp -R "$overlay/." "$target/"
