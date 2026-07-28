# Optional Display MCP

Use MCP only when it is already configured or the user explicitly prefers it.
Otherwise follow the CLI workflow, which is portable across Codex, Claude,
Hermes, and other terminal-capable agents.

When MCP is requested, prefer existing callable Display tools. Search the tool
registry for Display before configuring a new connection.

The server exposes artifact operations corresponding to `publish`, `share`,
`rename`, `find`, `get`, `export`, and `delete`.

## Codex setup

Prefer the remote server:

```toml
[mcp_servers.display]
url = "https://api.display.dev/v1/mcp"
bearer_token_env_var = "DISPLAYDEV_API_KEY"
```

Generate a key in `https://app.display.dev/settings/api-keys`, put it in the
environment rather than the TOML file, and restart Codex so it reloads MCP
servers.

If the authenticated CLI is already available, use local stdio:

```toml
[mcp_servers.display]
command = "dsp"
args = ["mcp"]
```

Do not edit the user's global Codex configuration unless they explicitly ask
for setup. Explain that the remote endpoint requires authentication. Local
`dsp mcp` without authentication exposes only anonymous public publishing.

## Tool workflow

For a new artifact, call `publish` with the exact content/path, a descriptive
name, and the requested visibility.

For an update:

1. Call `get` for current metadata.
2. Call `export` when the current published source is needed.
3. Apply the requested edit locally.
4. Call `publish` with `short_id` and the fetched `base_version`.
5. Re-fetch metadata and verify the new version and stable URL.

For search, start with a narrow query and use returned cursors for pagination.
Drop old cursors when filters change.

Treat `delete` as destructive and require explicit confirmation after resolving
the exact artifact.

Official references:

- https://display.dev/docs/mcp-server
- https://display.dev/docs/mcp-codex
