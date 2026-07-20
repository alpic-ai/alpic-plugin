# Publishing to the MCP Registry

Publishes the MCP server to `registry.modelcontextprotocol.io`.

Primary docs:

- Publishing: `https://docs.alpic.ai/distribution/publishing`
- Registry: `https://docs.alpic.ai/distribution/registry`
- CLI publish: `https://docs.alpic.ai/cli/publish`

## Prerequisites

- Production environment has a successful deployment.
- Run `alpic deploy` first if needed.
- Prefer a custom domain for stable, branded registry entries.

## Commands

```bash
alpic publish
```

Non-interactive requires `--domain`, `--title`, and `--description`:

```bash
alpic publish \
  --non-interactive \
  --domain my.custom-domain.com \
  --title "My MCP Server" \
  --description "Does useful things" \
  --project-id <id>
```

The CLI prints a registry search URL. Re-running `alpic publish` updates the
entry and increments the version.
