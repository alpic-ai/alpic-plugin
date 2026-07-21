# Alpic plugin

Claude Code and Codex plugin for building MCP apps with Skybridge and deploying,
managing, debugging, securing, analyzing, distributing, and publishing them on
Alpic Cloud.

## Installation

The plugin source lives at `plugins/alpic`.

### Claude Code

Add this repository as a marketplace, then install the plugin:

```text
/plugin marketplace add alpic-ai/alpic-plugin
/plugin install build-mcp-apps@build-mcp-apps
```

See [`plugins/alpic/README.md`](plugins/alpic/README.md) for authentication,
usage, data access, and removal instructions.

## Skills

| Skill | Covers |
|-------|--------|
| `build-mcp-apps` | Creating and updating MCP servers, MCP apps, and ChatGPT apps with the Skybridge framework |
| `use-alpic` | Deploying apps, tunnels, logs and analytics, debugging deployments, environments, build configuration, environment variables, auth, custom domains, fixed outbound IPs, IP whitelisting, public endpoints, playground example prompts, user insights, readiness audits, versioning, git, and publishing |

## License

[Apache-2.0](LICENSE)
