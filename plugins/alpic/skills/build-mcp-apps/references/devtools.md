# DevTools, Playground, Tunnel, and Deploy

Use this when iterating on a Skybridge MCP app/server through the local
DevTools UI.

## Start

Start the dev server first. It should print:

- local MCP server URL
- DevTools URL

If the server is not running or DevTools does not load, use
[run-locally.md](run-locally.md).

## Local DevTools

Open the DevTools URL to:

- run MCP tools with JSON inputs
- render MCP app views in the preview pane
- switch display mode, theme, mobile/desktop, and locale
- inspect tool results, view state, and rendered UI before testing in a host

Use local DevTools first for fast iteration. It avoids tunnel/deploy latency and
keeps failures close to the local server logs.

## Playground From DevTools

Use the Playground action in DevTools when the user wants to test through a real
browser MCP client.

- For a local server, DevTools may need an Alpic tunnel first.
- For a deployed server, DevTools can open the deployed playground at
  `<server-url>/try`.
- If the playground needs custom headers or example prompts, use the
  `use-alpic` skill references:
  `plugins/alpic/skills/use-alpic/references/playground.md` and
  `plugins/alpic/skills/use-alpic/references/example-prompts.md`.

## Tunnel From DevTools

Use the Tunnel action when the user wants to test a local server in ChatGPT,
Claude, or the Alpic playground without deploying.

Expected result:

- public HTTPS tunnel URL
- MCP endpoint at `<tunnel-url>/mcp`
- playground at `<tunnel-url>/try`

Keep the local dev server and tunnel process running while testing. For CLI
details, use `plugins/alpic/skills/use-alpic/references/tunnel.md`.

## Deploy From DevTools

Use Deploy when the user is ready for a hosted Alpic environment instead of a
local tunnel.

Before deploying:

- confirm the project root
- make sure required env vars are configured
- fix local TypeScript/runtime errors
- use a stable project name for first deployment

After deploying:

- open the MCP server URL
- open `<server-url>/try`
- run the main happy-path tool/view
- fetch deployment logs if the build failed

For detailed deploy behavior, use
`plugins/alpic/skills/use-alpic/references/deploy.md`.

## When To Use What

- Local DevTools: fastest tool/view iteration.
- Tunnel: real host testing from local code.
- Playground: browser-based MCP client testing and sharing.
- Deploy: persistent hosted environment, publishing, custom domains, analytics,
  auth configuration, or production testing.
