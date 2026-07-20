---
name: use-alpic
description: Use Alpic Cloud and the `alpic` CLI for deployed MCP apps/servers, including deploys, builds, logs, debugging, environments, environment variables, tunnels, playgrounds, audits, auth, domains, IP restrictions, analytics, insights, versioning, and MCP Registry publishing.
---

# Alpic Cloud

Alpic hosts and operates MCP apps and servers. Use this skill for deployment,
runtime operations, distribution, security, observability, and publishing on
Alpic Cloud.

The reference files contain the task workflows and command details. Load only
the file(s) relevant to the user's request.

## When To Use

- The user mentions Alpic Cloud, `alpic`, Alpic deployments, Alpic logs, Alpic
  playground, Alpic tunnels, Alpic environments, or Alpic publishing.
- The user wants to operate an already-built MCP app/server.
- The user wants production/distribution guidance after building an MCP app.

Use `build-mcp-apps` instead when the work is primarily about designing or
implementing the MCP app/server itself.

## References

Deploy and operate:

- Deploy an MCP app/server: [deploy.md](references/deploy.md)
- Build configuration, runtimes, start commands: [builds.md](references/builds.md)
- Failed deploys and startup failures: [debug-deployment.md](references/debug-deployment.md)
- Runtime and deployment logs: [logs.md](references/logs.md)
- Environment variables: [environment-variable.md](references/environment-variable.md)
- Environments, branches, staging/preview/prod: [environments.md](references/environments.md)
- GitHub auto-deploys: [git.md](references/git.md)
- Local HTTPS tunnels: [tunnel.md](references/tunnel.md)

Inspect and test:

- Usage metrics and project analytics: [analytics.md](references/analytics.md)
- Readiness checks and launch audits: [audit.md](references/audit.md)
- Playground configuration and headers: [playground.md](references/playground.md)
- Playground example prompts: [example-prompts.md](references/example-prompts.md)
- Public URLs and endpoint shapes: [endpoints.md](references/endpoints.md)

Secure and distribute:

- OAuth, DCR proxy, API-key protection: [auth.md](references/auth.md)
- Fixed outbound IP and inbound IP whitelisting: [network-security.md](references/network-security.md)
- Custom domains and DNS validation: [domains.md](references/domains.md)
- User intents and feedback capture: [insights.md](references/insights.md)
- Host caching and submitted-version strategy: [versioning.md](references/versioning.md)
- MCP Registry publishing: [publish.md](references/publish.md)

## Interface Choice

- Prefer the `alpic` CLI for deploys, logs, environment variables,
  environments, git, tunnels, audits, playground settings, and publishing.
- Use the Alpic dashboard for custom domains, DCR client pools, fixed outbound
  IP, inbound IP whitelisting, visual analytics, and Beacon rendering checks.
- Use the hosted Alpic MCP server/app for agent-driven project browsing, logs,
  and analytics when available.
- Use REST APIs only for automation or gaps in CLI/MCP coverage.

## Guardrails

- Store secrets in Alpic environment variables, not source files.
- Confirm the target project and environment before changing production config,
  auth, domains, IP restrictions, fixed outbound IP, or environment variables.
- Use build/deployment logs for deploy failures and runtime logs for live
  behavior.
- Re-deploy after changing environment variables.
- Do not delete DCR client pools unless intentionally breaking existing client
  registrations.
- Publish only after a production deploy plus audit/playground verification.
