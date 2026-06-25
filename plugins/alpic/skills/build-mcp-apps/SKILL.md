---
name: build-mcp-apps
description: Guide developers through creating and updating MCP servers, MCP apps, and ChatGPT apps with Skybridge. Covers brainstorming, bootstrapping, implementing tools/views, debugging, running dev servers, and preparing apps for deployment. Use when a user wants to create or update a ChatGPT app, MCP app, MCP server, or use the Skybridge framework.
---

# Building MCP Apps

MCP apps are conversational experiences that extend AI assistants through tools and custom UI views. They are built as MCP servers invoked during conversations.

Important: The app is consumed by two users at once: the **human** and the **AI Assistant LLM**. They collaborate through the view-the human interacts with it, the LLM sees its state. Internalize this before writing code: the view is your shared surface.

Skybridge docs are the product source of truth. Use this skill's references for
agent workflow, and use `https://docs.skybridge.tech/` for canonical framework
behavior and API details.

SPEC.md keeps track of the app's requirements and design decisions. Keep it up to date as you work on the app.

**No SPEC.md?** -> Read [discover.md](references/discover.md) first. Nothing else until SPEC.md exists.

**SPEC.md exists?** -> Read SPEC.md, then follow [architecture.md](references/architecture.md) to design the change. Update SPEC.md, then read the relevant Implementation references below before writing code.

**Migrating from Skybridge `< 0.36.x`?** → Read [migrate-to-v1.md](references/migrate-to-v1.md) first. Users may reference `skybridge >= 0.36.x` as v1.

## Setup

1. **Copy template** -> [copy-template.md](references/copy-template.md): when starting a new project with ready SPEC.md
2. **Run locally** -> [run-locally.md](references/run-locally.md): when ready to test, need dev server, use devtools to render views, or connect to ChatGPT/Claude
3. **Use DevTools UI** -> [devtools.md](references/devtools.md): when testing tools/views through Skybridge DevTools, opening the Alpic playground, starting a tunnel, or deploying from the DevTools UI

## Architecture

Design or evolve UX flows and API shape -> [architecture.md](references/architecture.md)

## Implementation

- **Fetch and render data** -> [fetch-and-render-data.md](references/fetch-and-render-data.md): when implementing server handlers and view data fetching
- **State and context** -> [state-and-context.md](references/state-and-context.md): when persisting view UI state and updating LLM context
- **Prompt LLM** -> [prompt-llm.md](references/prompt-llm.md): when view needs to trigger LLM response
- **UI guidelines** -> [ui-guidelines.md](references/ui-guidelines.md): display modes, layout constraints, theme, device, and locale
- **External links** -> [open-external-links.md](references/open-external-links.md): when redirecting to external URLs or setting "open in app" target
- **Download file** -> [download-file.md](references/download-file.md): when saving content to the user's filesystem
- **OAuth** -> [oauth.md](references/oauth.md): when tools need user authentication to access user-specific data
- **CSP** -> [csp.md](references/csp.md): when declaring allowed domains for fetch, assets, redirects, or iframes
- **Hosting assets** -> [hosting-assets.md](references/hosting-assets.md): when a ChatGPT/MCP app needs static JS, CSS, images, or built UI assets hosted on Alpic

## Deploy

- **Prepare for production** -> [deploy.md](references/deploy.md): when the app is ready and needs a deployment handoff to `use-alpic`
- **Publish to app directories** -> [publish.md](references/publish.md): when ready to submit for review

## Skybridge Docs

- Docs home: [https://docs.skybridge.tech/](https://docs.skybridge.tech/)
- Full API reference: [https://docs.skybridge.tech/api-reference.md](https://docs.skybridge.tech/api-reference.md)
- Release notes & changelog: [https://skybridge.tech/changelog.md](https://skybridge.tech/changelog.md)
- Use the API reference when implementing server APIs, tools, views, resources,
  UI context, or SDK behavior that is not fully specified in these local
  references.
