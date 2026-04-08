# Debugging a Failed Deployment

## Step 1 — Find the deployment ID

```
alpic deployment list
```

## Step 2 — Fetch build logs

```
alpic deployment logs --deployment-id <id>
```

Identify which phase failed: source collection → install → build → start.

## Common failure causes

**Source collection**
- Wrong `--root-dir`; CLI packed the wrong directory
- Check `.alpicignore` if present

**Install / Build**
- Missing `package.json` or `pyproject.toml` — root directory is probably wrong
- Build script fails or dev dependencies are missing
- Node/Python version mismatch — re-deploy with an explicit `--runtime` flag

**Start**
- Missing environment variables — server crashes at startup
- Wrong entry point — verify the start command references a file in the built output
- Port binding — the server must listen on the port in the `PORT` environment variable

## Step 3 — Check environment variables

```
alpic environment-variable list --environment-id <id>
```

Add a missing variable:
```
alpic environment-variable add --key MY_VAR --value my-value --environment-id <id>
```

Import from a `.env` file:
```
alpic environment-variable add --env-file .env --environment-id <id>
```

## Step 4 — Re-deploy

```
alpic deploy --environment-id <id>
```
