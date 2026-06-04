---
name: alpic-cli
description: Use when the user asks about the Alpic CLI (`alpic`) — deploying MCP servers, viewing logs, debugging deployments, managing environment variables, configuring the playground, connecting git, and publishing to the MCP Registry.
---

Alpic is a cloud platform for deploying, hosting, and managing MCP servers. The `alpic` CLI is the primary interface for agents.

Use the reference files below to answer questions or guide the user through tasks. Load only the file relevant to the current task.

## Reference files

- [deploy.md](deploy.md) — deploying an MCP server with `alpic deploy`
- [logs.md](logs.md) — viewing runtime logs with `alpic logs`
- [debug-deployment.md](debug-deployment.md) — diagnosing failed deployments
- [environment-variable.md](environment-variable.md) — managing environment variables
- [playground.md](playground.md) — configuring the Alpic playground
- [git.md](git.md) — connecting a GitHub repository for auto-deploys
- [publish.md](publish.md) — publishing to the MCP Registry with `alpic publish`

## Prerequisites (always apply)

- CLI installed: `npm install -g alpic`
- Authenticated: `alpic login` (or `ALPIC_API_KEY` env var)
