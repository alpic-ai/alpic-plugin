# Deploying with Alpic

Primary docs:

- Quickstart: `https://docs.alpic.ai/quickstart`
- CLI deploy: `https://docs.alpic.ai/cli/deploy`

Run from the project root:

```bash
alpic deploy
```

The CLI links/creates a project, uploads source, triggers a build, and prints
the MCP server URL.

## Flags

```bash
alpic deploy \
  --non-interactive \
  --project-name my-server \
  --runtime node24 \
  --root-dir ./src
```

- `--runtime`: `node24`, `node22`, `python3.14`, `python3.13`
- `--root-dir`: deployable code subdirectory
- `--team-id`: deploy under a team
- `--project-id`: deploy to existing project
- `--environment-id`: deploy to a specific environment

On success, check server URL and `<server-url>/try`. On failure:

```bash
alpic deployment logs --deployment-id <id>
```
