# Audit

Use before launch, publishing, meaningful changes, or readiness checks for
ChatGPT/Claude.ai.

Primary docs:

- Beacon: `https://docs.alpic.ai/testing/beacon`
- CLI audit: `https://docs.alpic.ai/cli/audit`

## Commands

```bash
alpic audit --url https://my-server.example.com/mcp
alpic audit --non-interactive
alpic audit --url https://my-server.example.com/mcp --json
```

`alpic audit` exits `1` when any error-severity check fails. Warnings/skips do
not fail the command.

## Notes

- CLI audit covers protocol and metadata readiness.
- Use dashboard Beacon tab for full end-to-end app rendering checks.
- Beacon currently skips protected servers that return `HTTP 401`.
- Report errors first, then warnings, then skipped checks.

## Additional review

After audit, manually check input validation, auth gating, env-var secrets, CSP,
logs without leaks, deployed URL, and playground.
