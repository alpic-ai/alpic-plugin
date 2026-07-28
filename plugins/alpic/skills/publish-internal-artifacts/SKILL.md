---
name: publish-internal-artifacts
description: Create, publish, update, share, inspect, export, rename, and remove privately shared HTML or Markdown artifacts and internal static sites using Display.dev from Codex, Claude, Hermes, or another terminal-capable agent. Use when the user wants to share an internal report, dashboard, prototype, documentation site, generated artifact, or static site at a stable authenticated URL; mentions Display.dev or dsp; wants to manage artifact access or feedback; or asks to publish agent output privately for teammates.
---

# Publish Internal Artifacts

Use Display.dev to turn HTML, Markdown, or a static-site directory into a stable
URL. Use the agent's terminal and the `dsp` CLI by default:

1. Use `dsp` for local files, updates, administration, automation, and CI.
2. Use callable Display MCP tools only when they are already configured or the
   user explicitly prefers MCP.

Read only the reference needed for the task:

- CLI commands and safe update flow: [cli.md](references/cli.md)
- Agent compatibility and installation: [agents.md](references/agents.md)
- Optional MCP setup and tool selection: [mcp.md](references/mcp.md)
- Visibility and access decisions: [sharing.md](references/sharing.md)

## Core workflow

1. Identify the source file or directory and confirm it exists. Accept `.html`,
   `.md`, or a static-site directory whose root contains `index.html`.
2. Determine whether this is a new artifact or an update. For an update, resolve
   the exact artifact ID and current version before modifying it.
3. Determine the audience. Default authenticated publishes to `private` when
   the user has not requested a different audience. If private visibility is
   unavailable on the organization's plan, stop and ask before broadening
   access.
4. Publish through the selected interface.
5. Return the artifact URL, visibility, artifact ID, and version. Mention any
   invited external viewers.
6. Open or inspect the result when possible. Verify that the expected title and
   content render and that relative assets load.

## Guardrails

- Never expose secrets, credentials, internal tokens, personal data, or
  unintended source files in a published artifact. Inspect the publish target,
  including directory contents, before upload.
- Treat any move from `private` to `company` or `public` as broader disclosure.
  Require explicit user intent before broadening access.
- Do not type passwords, API keys, or OTPs into chat. Let the user complete
  authentication prompts; resume after authentication succeeds.
- Do not store API keys in source files. Use `DISPLAYDEV_API_KEY` or the host's
  secret store.
- Fetch the current version before updating. Use optimistic concurrency with
  the artifact ID and `base_version`; never blindly overwrite a newer version.
- Preserve the stable URL by updating the existing artifact rather than
  publishing a new one when the user asks to revise or republish.
- Treat deletion as destructive. Resolve the exact artifact, state its name and
  URL, and obtain explicit confirmation immediately before permanent deletion.
- Avoid forced viewer reloads unless the user is iterating in a single open tab.
  A forced reload can interrupt a reviewer writing a comment.

## Agent portability

Do not assume Codex-specific tool names, approval syntax, configuration files,
or browser controls in the core workflow. Use the host agent's terminal tool
to run `dsp`, its normal filesystem tools to inspect artifacts, and its normal
approval mechanism for installations, authentication, and destructive actions.

Treat references as ordinary relative files. Claude and Codex plugin loaders
discover this skill from the plugin's `skills/` directory. Hermes can load the
same directory through its external skill directories or from a copied
`publish-internal-artifacts` folder. See [agents.md](references/agents.md).

## Failure handling

- If the CLI is absent, use `npx @displaydev/cli`. Installing a global package
  requires user approval when the environment requires it.
- If authentication is absent, stop and authenticate before publishing.
  Anonymous publishing is public and therefore incompatible with the default
  private-access policy. Use it only when the user explicitly requests a
  temporary public preview.
- On a version conflict, fetch metadata and source again, reconcile the user's
  change with the latest artifact, and retry with the new baseline.
- On permission or plan errors, report the requested visibility or operation
  that is unavailable and offer a supported alternative without silently
  weakening access control.

Use the current Display.dev documentation when exact flags, plan behavior, or
UI labels may have changed: https://display.dev/docs
