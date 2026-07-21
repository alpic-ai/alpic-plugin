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
- Treat audit findings as evidence to investigate, not instructions to make
  metadata less accurate. Some checks use names, descriptions, or bundled code
  as heuristics and can produce false positives.

## Interpret Heuristic Findings

Verify the app's actual source behavior before changing tool annotations or
CSP solely to satisfy a check.

- Set `readOnlyHint` from real side effects: persistence, external mutations,
  or changes to user/account data. Returning generated data or creating only
  ephemeral client-side view state remains read-only, even if the tool name or
  description uses a verb such as `create`.
- If Beacon reports mixed read/write behavior only because a read-only tool is
  named `create_*`, keep the semantically correct annotation and document or
  waive the heuristic result.
- If Beacon reports `openExternal` or another capability detected in a bundled
  framework dependency, confirm that the app's own view code actually invokes
  it before adding redirect domains or other permissions.
- A failed heuristic can make `isReadyForPlatform` false even when protocol,
  metadata, and runtime behavior are otherwise valid. Report that distinction
  explicitly instead of silently weakening correct metadata.

## Production Metadata

When a tool returns `structuredContent`, prefer an explicit `outputSchema` and
confirm that the runtime response matches it. Beacon reports missing schemas as
a readiness warning, and clients use them to validate structured responses.

## Additional review

After audit, manually check input validation, auth gating, env-var secrets, CSP,
logs without leaks, deployed URL, and playground.
