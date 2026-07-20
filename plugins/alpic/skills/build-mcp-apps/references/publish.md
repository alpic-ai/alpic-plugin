# Publish to Directories

## 1. Audit Annotations

**Common cause of rejection.** Ensure all tools and views have correct annotations. See [fetch-and-render-data.md](fetch-and-render-data.md).

## 2. Audit CSP

Ensure all external domains are declared in the tool's `view.csp`. See [csp.md](csp.md).

## 3. Submit

### ChatGPT
Guide the user to the [plugin submission portal](https://platform.openai.com/plugins). For an MCP-backed app, create a **With MCP** submission and provide the public production MCP server URL. Do not submit an existing ChatGPT app ID.

If the portal requests domain verification, OpenAI verifies ownership via `/.well-known/openai-apps-challenge`. Guide the user to Alpic **Distribution** → **OpenAI Apps Verification Token**, then paste the token from OpenAI.

### Claude
Guide user to submit the app on the [Anthropic Connectors Directory FAQ](https://support.claude.com/en/articles/11596036-anthropic-connectors-directory-faq).
