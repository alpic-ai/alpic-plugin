#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
skills_root="$repo_root/plugins/alpic/skills"
bundle_date="$(date -u +%F)"
output_dir="$repo_root/submissions/${bundle_date}-plugin-skills"
workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT

for skill in build-mcp-apps use-alpic; do
  if [[ ! -f "$skills_root/$skill/SKILL.md" ]]; then
    echo "Missing required skill: $skills_root/$skill/SKILL.md" >&2
    exit 1
  fi
done

cd "$skills_root"
zip -X -q -r "$workdir/alpic-skills.zip" build-mcp-apps use-alpic
unzip -tq "$workdir/alpic-skills.zip"

mkdir -p "$output_dir"
cp "$workdir/alpic-skills.zip" "$output_dir/alpic-skills.zip"

printf '%s\n' \
  "# Plugin Skills Submission - $bundle_date" \
  "" \
  "This folder contains the skill bundle generated for the Alpic plugin submission." \
  "" \
  '- `alpic-skills.zip`: final bundle containing `build-mcp-apps` and `use-alpic` at the archive root.' \
  "" \
  "The bundle contains only skills. The app, MCP server configuration, listing metadata, and branding are submitted separately through the ChatGPT plugin submission flow." \
  > "$output_dir/README.md"

echo "Created $output_dir/alpic-skills.zip"
