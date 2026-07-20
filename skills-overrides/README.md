# Skybridge skill overlay

`plugins/alpic/skills/build-mcp-apps` is the distributable skill tree.

Run `bash scripts/sync-skybridge-skill.sh` to replace its Skybridge base with
the current upstream skill and reapply the Alpic-specific overlay in this
directory. Add only intentional Alpic deviations to the overlay; all other
files should remain upstream-owned.
