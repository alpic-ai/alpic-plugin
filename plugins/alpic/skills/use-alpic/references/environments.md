# Environments

Use environments when the user wants staging, preview, development, production branches, or separate URLs/configuration for different versions of an MCP server.

Alpic environments are linked to git branches. Each environment has its own deployment URL and can have its own environment variables.

Primary docs:

- Environments: `https://docs.alpic.ai/build-deploy/environments`
- CLI environment list: `https://docs.alpic.ai/cli/environment-list`

## Dashboard workflow

1. Open the project overview page.
2. Click Environments.
3. Click New environment.
4. Name the environment.
5. Select the branch to link to the environment.
6. Add environment variables needed for that environment.
7. Click Create.

Alpic generates a new URL for the environment's MCP server.

## Change tracked branch

1. Open the project overview page.
2. Click Environments and select the target environment.
3. Click the edit icon next to the current branch name.
4. Select or type the new branch name and save.
5. Redeploy from the new branch when prompted or when the user asks for it.

## CLI discovery

Use these commands when working from the terminal:

```bash
alpic environment list
alpic environment inspect --environment-id <id>
```

Use environment-specific IDs with deploy, logs, playground, environment-variable, audit, and publish commands when the user is not targeting the linked default environment.
