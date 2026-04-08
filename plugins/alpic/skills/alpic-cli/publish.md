# Publishing to the MCP Registry

Publishes the MCP server to `registry.modelcontextprotocol.io`.

## Prerequisites

The project must have a **production environment** with a successful deployment. Run `alpic deploy` first if not yet deployed.

## Run

```
alpic publish
```

The CLI walks through:
1. **Domain selection** — shared Alpic domain or a custom domain (custom listed first)
2. **Title** — public name (max 100 chars, required)
3. **Description** — shown in the registry (max 100 chars, required)
4. **Website URL** — optional, max 255 chars
5. **Icon URL** — optional, max 255 chars
6. **Confirmation** — dry-run shows the version that will be published

## Non-interactive

`--domain`, `--title`, and `--description` are required:

```
alpic publish \
  --non-interactive \
  --domain my.custom-domain.com \
  --title "My MCP Server" \
  --description "Does useful things" \
  --project-id <id>
```

## After publishing

The CLI prints a registry search URL to verify the listing. Re-running `alpic publish` updates the entry; the version increments automatically.

## Domain considerations

- **Shared domain** — default `*.alpic.ai` subdomain, works immediately
- **Custom domain** — must be attached and deployed in the production environment; preferred for a stable, branded registry entry
