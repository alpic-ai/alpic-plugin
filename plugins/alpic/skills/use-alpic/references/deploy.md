# Deploying with Alpic

Primary docs:

- Quickstart: `https://docs.alpic.ai/quickstart`
- CLI deploy: `https://docs.alpic.ai/cli/deploy`

Run from the project root. For agent-driven deployments, prefer explicit,
non-interactive commands so ownership, runtime, and project naming are known
before source is uploaded. Use interactive `alpic deploy` only when the user is
intentionally driving the prompts or a required choice cannot be discovered in
advance.

## Before Deploying

1. Confirm the project root and run its production build or equivalent check.
2. Check for `.alpic/project.json`. Its presence normally means the directory
   is already linked to an Alpic project.
3. For a first deployment, list available teams before starting the deploy:

```bash
alpic team list
```

If more than one team is plausible, ask the user which team should own the
project. Capture the selected team ID rather than navigating an interactive
picker on the user's behalf.

4. Choose the runtime from the project's declared engine/framework
   requirements. For example, use `node24` when the project requires Node 24;
   a successful local build on an older Node version does not override the
   declared production runtime.

## First Deployment

Collect the team, project name, runtime, and root directory first, then pass
them as flags:

```bash
alpic deploy \
  --non-interactive \
  --project-name my-server \
  --team-id team_123 \
  --runtime node24
```

The CLI links/creates a project, uploads source, triggers a build, and prints
the MCP server URL. Avoid editing default text fields through a raw PTY when
the same value can be supplied with a flag; terminal control characters and
line-editing behavior vary across agent environments.

## Subsequent Deployments

When the directory is already linked through `.alpic/project.json`, deploy the
current linked target with:

```bash
alpic deploy --non-interactive
```

Use `--project-id` or `--environment-id` when deliberately targeting something
other than the directory's current linked production environment, and confirm
that target before uploading.

## Package Manager Wrappers

Invoke the Alpic binary directly when it is installed globally, or through the
project package manager. With pnpm, do not use bare `pnpm deploy`: `deploy` is
a pnpm workspace command. Use one of:

```bash
pnpm exec alpic deploy --non-interactive
pnpm run deploy -- --non-interactive
```

Use `pnpm run deploy` only when `package.json` defines a `deploy` script. Pass
Alpic flags directly with `pnpm exec alpic deploy` when exact targeting is
needed; it avoids ambiguity with pnpm's own `deploy` command.

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

## Monitor The Deployment

`alpic deploy` reports a deployment ID and may remain quiet while the remote
build runs. A quiet period is not by itself a failure. Capture the ID and use a
separate status check when needed:

```bash
alpic deployment inspect \
  --non-interactive \
  --deployment-id <deployment-id> \
  --wait
```

On failure, inspect build/deployment logs:

```bash
alpic deployment logs --deployment-id <id>
```

On success:

1. Record the server URL and deployment details URL.
2. Check the MCP endpoint and `<server-url>/try` playground.
3. Exercise the main tool/view flow.
4. Run the readiness audit from [audit.md](audit.md).
