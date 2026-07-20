# Managing Environment Variables

Variables are scoped to an environment. Get the ID with
`alpic environment list`.

Primary docs:

- Env vars: `https://docs.alpic.ai/build-deploy/env-variables`
- CLI add: `https://docs.alpic.ai/cli/environment-variable-add`

Set required startup vars before first deploy, or the build may succeed while
the server crashes on start.

## Commands

```bash
alpic environment-variable list --environment-id <id>
alpic environment-variable add --key DATABASE_URL --value postgres://host/db --environment-id <id>
alpic environment-variable add --env-file .env --environment-id <id>
alpic environment-variable update --key DATABASE_URL --value postgres://new-host/db --environment-id <id>
alpic environment-variable remove --key DATABASE_URL --environment-id <id>
```

Variables are secret by default. Use `--no-secret` to make a variable visible:

```bash
alpic environment-variable add --key PORT --value 3000 --no-secret --environment-id <id>
alpic environment-variable update --key PORT --no-secret --environment-id <id>
```

Changes apply on next deployment:

```bash
alpic deploy --environment-id <id>
```
