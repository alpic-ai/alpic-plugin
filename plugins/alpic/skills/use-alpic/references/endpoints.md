# Endpoints

Use endpoints guidance when the user asks what URLs Alpic exposes, how clients should connect, where the playground lives, or where app assets are served.

Primary docs:

- Alpic endpoints: `https://docs.alpic.ai/build-deploy/endpoints`
- Hosting assets: `https://docs.alpic.ai/build-deploy/assets`

All deployed servers receive a default domain like:

```text
https://my-domain-123456.alpic.live
```

Each environment receives its own unique domain.

## Public endpoints

- `/`: main MCP server endpoint. Supports SSE and Streamable HTTP.
- `/mcp`: Streamable HTTP endpoint for MCP client compatibility.
- `/try`: Alpic Playground for browser-based testing and client install instructions.
- `/assets`: static assets exposed by the deployment.

## Internal/auth endpoints

These appear only when relevant:

- `/.well-known/oauth-protected-resource`: OAuth protected resource metadata.
- `/.well-known/oauth-authorization-server`: OAuth authorization server metadata when not delegated externally.
- `/register`, `/authorize`, `/token`, `/callback`: Dynamic Client Registration proxy endpoints when DCR proxy is activated.

For ChatGPT/MCP app static assets, use the build MCP apps skill's hosting assets reference.
