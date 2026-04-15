# Configuring the Playground

The playground is a browser-based UI at `<server-url>/try` for interacting with the MCP server without writing code.

Get the environment ID with `alpic environment list`.

## Check status

```bash
alpic playground status --environment-id <id>
```

## Enable / disable

```bash
alpic playground enable --environment-id <id>
alpic playground disable --environment-id <id>
```

## Set name and description

```bash
alpic playground configure --name "My MCP Server" --description "Does useful things" --environment-id <id>
```

Name max 100 chars, description max 500 chars.

## Custom headers

Headers let users supply values (e.g. API keys) forwarded with every playground request.

Add:
```bash
alpic playground headers add \
  --name "X-Api-Key" \
  --description "API key for authentication" \
  --required \
  --secret \
  --environment-id <id>
```

- `--required` — user must fill this in before using the playground
- `--secret` — value is masked in the UI
- Name max 100 chars, description max 200 chars

List / remove:
```bash
alpic playground headers list --environment-id <id>
alpic playground headers remove --environment-id <id>
```

## Example prompts

Clickable suggestions shown in the playground UI (max 3 per environment).

Add:
```bash
alpic playground example-prompt add \
  --title "Hello" \
  --prompt "Say hello to the user" \
  --environment-id <id>
```

Title max 100 chars, prompt text max 500 chars.

List / remove:
```bash
alpic playground example-prompt list --environment-id <id>
alpic playground example-prompt remove --environment-id <id>
```
