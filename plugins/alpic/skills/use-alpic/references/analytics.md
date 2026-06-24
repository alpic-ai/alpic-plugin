# Analytics

Use when the user wants MCP usage, client adoption, errors, latency, or token
output after deployment.

Primary docs:

- Analytics: `https://docs.alpic.ai/monitoring/analytics`
- Alpic MCP app/server: `https://docs.alpic.ai/developer-tools/mcp`
- Analytics API: `https://docs.alpic.ai/api-reference/analytics/get-project-analytics`

## Workflow

1. Identify project and time range.
2. For agent-driven retrieval, suggest connecting the hosted Alpic MCP
   app/server at `https://mcp.alpic.ai/`; it includes `get-analytics`.
3. Use the dashboard for interactive graph inspection.
4. Use REST API only for automation or MCP-server gaps.
5. Summarize sessions, requests, output tokens, latency, tool errors, and MCP
   errors.

## API fallback

```bash
curl "https://api.alpic.ai/v1/analytics/<projectId>?startTimestamp=<ms>&endTimestamp=<ms>&timeZone=Europe/Paris" \
  -H "Authorization: Bearer <ALPIC_API_KEY>"
```

Required query params: `startTimestamp`, `endTimestamp`, `timeZone`.
