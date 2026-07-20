# Versioning

Use versioning guidance when updating a published MCP server or MCP app, especially for ChatGPT or Claude.ai submissions.

Published hosts cache parts of a workload at submission time. A normal redeploy may update server handlers immediately while the host still uses cached tool schemas or app entrypoints.

Primary docs:

- Versioning: `https://docs.alpic.ai/distribution/versioning`

## Cached at submission

- `tools/list`: tool descriptions, annotations, and input/output schemas.
- `resources/read`: view entrypoint HTML for MCP apps.

Tool calls and most runtime behavior still hit the latest deployment.

## Safe changes

- Add a new tool: deploy it, then submit a new version so the host discovers it.
- Remove a tool: hide it first with `_meta.ui.visibility: ["app"]`; submit a new version before removing it entirely.
- Add a tool parameter: make it optional first; submit a new version before making stronger assumptions.
- Update a parameter: keep validation backward compatible until the host has the new schema.
- Remove a parameter: stop using it in the handler, but keep accepting it while cached schemas exist.

## MCP app views

- Adding a new view requires a new submission.
- Changing view behavior can ship by redeploying only when the cached entrypoint HTML still points to stable deterministic asset names.
- Removing a view requires care: stop referencing it, submit a new version, and keep old assets available while cached host views may still render.

## Recommended release workflow

Use a dedicated Alpic environment for each host-submitted version, for example `v1`, `v2`, or `chatgpt-v1`.

This gives each published version a stable URL and avoids ongoing development deployments breaking an already-submitted workload.

## Asset naming strategy

For MCP apps, deterministic asset names within a released version let you ship small asset fixes without resubmitting. Use version-specific asset names across different released versions so old conversations continue to render against the assets they were built with.
