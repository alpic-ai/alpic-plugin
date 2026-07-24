# Alpic

Build MCP apps with Skybridge, then deploy, manage, debug, secure, and analyze
them on Alpic Cloud.

## What this plugin includes

- `build-mcp-apps`: guidance for designing, implementing, testing, and preparing
  MCP servers and MCP apps built with Skybridge.
- `use-alpic`: workflows for Alpic deployments, logs, environments, analytics,
  security, testing, and publishing.
- The hosted Alpic MCP connector at `https://mcp.alpic.ai` for browsing teams
  and projects, inspecting logs, and viewing analytics.

## Requirements

- A current version of Claude Code, Cursor, or another compatible plugin host.
- An Alpic account for user-specific project, deployment, and analytics data.
- The `alpic` CLI for workflows that deploy or configure projects from a local
  repository.

## Install in Claude Code

Add the repository marketplace and install the plugin:

```text
/plugin marketplace add alpic-ai/alpic-plugin
/plugin install build-mcp-apps@build-mcp-apps
```

The technical plugin identifier remains `build-mcp-apps` for compatibility;
Claude displays the plugin as **Alpic**.

## Install in Cursor

After publication, install the plugin from Cursor Agent chat:

```text
/add-plugin alpic
```

For local testing, link or copy this plugin directory to
`~/.cursor/plugins/local/alpic`, then run **Developer: Reload Window**. Confirm
that Alpic appears in Cursor settings and that its two skills and MCP server are
enabled.

## Authentication

When a workflow first accesses account-specific Alpic data, the plugin host may
ask you to authenticate. Follow the OAuth sign-in flow and review the requested
access before continuing. The plugin does not contain API keys or other shared
credentials.

CLI workflows use the authentication associated with your local `alpic` CLI.
Run `alpic login` if the CLI reports that you are not authenticated.

## Example prompts

- What Alpic teams do I have access to?
- Show me all my Alpic projects.
- My Alpic project "Template" appears to be broken. Can you diagnose it?
- Deploy this MCP app to Alpic Cloud.
- Show me usage analytics for my production MCP server.

## Data access and local actions

The hosted connector sends requests to `https://mcp.alpic.ai`. Once you
authenticate, it can access Alpic account data needed for the requested
workflow, such as teams, projects, deployments, logs, and analytics.

The bundled skills can also guide the agent to inspect the current project and
run `alpic` CLI commands. The plugin host applies its normal tool-permission
controls before local commands or file changes. Review the selected team,
project, environment, and proposed changes before approving production actions.

See the [Alpic privacy policy](https://alpic.ai/legal/privacy) and
[terms of service](https://alpic.ai/legal/terms) for service details.

## Remove

```text
/plugin uninstall build-mcp-apps@build-mcp-apps
/plugin marketplace remove build-mcp-apps
```

Removing the marketplace also removes plugins installed from it. You can omit
the second command if you want to keep the marketplace configured.

## Development and validation

From the repository root:

```bash
claude plugin validate .
claude plugin validate ./plugins/alpic --strict
claude --plugin-dir ./plugins/alpic
npm run validate:cursor
```

## Support

For documentation, visit [docs.alpic.ai](https://docs.alpic.ai/). For support,
email [support@alpic.ai](mailto:support@alpic.ai).

## License

[Apache-2.0](../../LICENSE)
