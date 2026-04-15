# Deploying with Alpic

Run from the project root:

```bash
alpic deploy
```

The CLI will link to an existing project or create a new one (interactive by default), collect and upload source files, trigger a build, and print the MCP server URL on success.

## Runtimes

`--runtime` accepts: `node24`, `node22`, `python3.14`, `python3.13`

## Non-interactive flags

```bash
alpic deploy \
  --non-interactive \
  --project-name my-server \
  --runtime node24 \
  --root-dir ./src
```

Other flags:
- `--team-id` — deploy under a specific team
- `--project-id` — deploy to an existing project (skips project selection)
- `--environment-id` — deploy to a specific environment

## Root directory

Use `--root-dir` when deployable code lives in a subdirectory (e.g. a monorepo). Alpic treats that path as the project root.

## After deployment

On success, the CLI prints:
- MCP server URL (use to connect clients)
- Playground URL (`<server-url>/try`) for interactive testing

To view build logs if the deployment failed:
```bash
alpic deployment logs --deployment-id <id>
```
