# Playground Example Prompts

Use when the user wants better playground onboarding or examples of an MCP
app/server's best flows.

Primary docs:

- Add: `https://docs.alpic.ai/cli/playground-example-prompt-add`
- List: `https://docs.alpic.ai/cli/playground-example-prompt-list`
- Remove: `https://docs.alpic.ai/cli/playground-example-prompt-remove`

Each environment supports up to 5 prompts. Title max 100 chars; prompt max 500
chars.

## Commands

```bash
alpic playground example-prompt add
alpic playground example-prompt list
alpic playground example-prompt remove
```

Non-interactive add:

```bash
alpic playground example-prompt add \
  --title "Find recent orders" \
  --prompt "Show me recent orders that need attention." \
  --non-interactive
```

Target an environment with `--environment-id <environmentId>`.

Non-interactive remove:

```bash
alpic playground example-prompt remove \
  --title "Find recent orders" \
  --non-interactive
```

When running from a linked project directory, `--environment-id` is optional.

## Prompt quality

- Use outcome-oriented titles.
- Make prompts specific enough for immediate tool use.
- Keep at least one prompt that verifies the main happy path after deployment.
