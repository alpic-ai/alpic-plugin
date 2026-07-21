# Deploy

Use this page when an MCP app/server built with Skybridge is ready to leave
local development and move toward a hosted Alpic deployment.

This file is a handoff checklist, not the Alpic CLI reference. For deployment
commands, runtimes, flags, environments, logs, and exact behavior, use the
`use-alpic` skill, especially:

`../../use-alpic/references/deploy.md`.

## Before Deploying

- Confirm the project root and deployable package.
- Run the local dev server and exercise the main tool/view flow.
- Fix TypeScript, build, runtime, and obvious UI rendering errors.
- Ensure tools returning `structuredContent` declare an accurate
  `outputSchema`; the Alpic readiness audit checks this metadata.
- Ensure tool annotations describe actual side effects. Ephemeral view state
  does not make an otherwise read-only tool write-capable.
- Ensure required secrets are not in source files.
- Identify required environment variables for the target Alpic environment.
- Check that view CSP allows the external domains the app needs.
- Use stable asset paths for hosted MCP app views.

## Handoff To `use-alpic`

Load `use-alpic` for:

- first deployment or redeploy
- team/project discovery and non-interactive CLI targeting
- build/runtime configuration
- environment variables
- deployment logs
- runtime logs
- tunnels and playground checks
- custom domains, auth, IP restrictions, analytics, audits, and publishing

## After Deploying

- Open the deployed MCP server URL.
- Open the playground at `<server-url>/try`.
- Run the main happy-path tool/view.
- Run the Alpic readiness audit, then verify heuristic findings against the
  app's source before changing annotations or CSP.
- If deployment failed, use build/deployment logs from `use-alpic`.
- If the deployment works but runtime behavior is wrong, use runtime logs from
  `use-alpic`.
