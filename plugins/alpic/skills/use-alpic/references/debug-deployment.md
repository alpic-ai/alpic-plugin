# Debugging a Failed Deployment

Primary docs:

- Troubleshooting: `https://docs.alpic.ai/troubleshooting`
- Deployment logs: `https://docs.alpic.ai/cli/deployment-logs`
- Builds: `https://docs.alpic.ai/build-deploy/builds`

## Workflow

```bash
alpic deployment list
alpic deployment logs --deployment-id <id>
```

Identify failing phase: source collection -> install -> build -> start.

Common causes:

- Source: wrong `--root-dir`, `.alpicignore` excluded needed files.
- Install/build: missing manifest, failing script, missing dev deps, runtime
  mismatch.
- Start: missing env vars, wrong entry point, server not listening on `PORT`.

Check env vars:

```bash
alpic environment-variable list --environment-id <id>
alpic environment-variable add --key MY_VAR --value my-value --environment-id <id>
alpic environment-variable add --env-file .env --environment-id <id>
```

Redeploy:

```bash
alpic deploy --environment-id <id>
```
