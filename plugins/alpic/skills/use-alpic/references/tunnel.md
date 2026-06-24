# Tunnel

Use tunnels when the user needs a public HTTPS URL for a local MCP server, especially for local testing with the Alpic playground.

Primary docs:

- CLI tunnel: `https://docs.alpic.ai/cli/tunnel`

## Run

```bash
alpic tunnel --port 3000
```

Requests to the assigned public URL are forwarded to `http://localhost:3000` on the user's machine.

The assigned subdomain is stable and unique to the account, so the user should receive the same URL each time.

## Playground

The playground is available at `/try` on the tunnel URL:

```text
https://<assigned-subdomain>.alpic.dev/try
```

Use this to test the local MCP server with a real LLM chat interface before deploying.

## Notes

- The tunnel stays open until the process is stopped with Ctrl+C.
- `--port` is required.
- Team API keys are not supported. User OAuth authentication is required.
