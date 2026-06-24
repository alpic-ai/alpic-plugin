# Playground

Use the playground at `<server-url>/try` to test an MCP server in-browser, share
it, showcase MCP Apps, and get client install snippets.

Primary docs:

- Playground: `https://docs.alpic.ai/distribution/playground`
- Testing: `https://docs.alpic.ai/testing/playground`
- CLI status: `https://docs.alpic.ai/cli/playground-status`

Get the environment ID:

```bash
alpic environment list
```

## Commands

```bash
alpic playground status --environment-id <id>
alpic playground enable --environment-id <id>
alpic playground disable --environment-id <id>
alpic playground configure --name "My MCP Server" --description "Does useful things" --environment-id <id>
```

Name max 100 chars; description max 500 chars.

## Custom headers

Use headers for values forwarded with every playground request, such as API
keys.

```bash
alpic playground headers add \
  --name "X-Api-Key" \
  --description "API key for authentication" \
  --required \
  --secret \
  --environment-id <id>
```

```bash
alpic playground headers list --environment-id <id>
alpic playground headers remove --environment-id <id>
```

Header name max 100 chars; description max 200 chars.

## Example prompts

Clickable suggestions on the welcome screen, max 5 per environment.

```bash
alpic playground example-prompt add \
  --title "Hello" \
  --prompt "Say hello to the user" \
  --environment-id <id>
```

```bash
alpic playground example-prompt list --environment-id <id>
alpic playground example-prompt remove --environment-id <id>
```

Title max 100 chars; prompt max 500 chars.
