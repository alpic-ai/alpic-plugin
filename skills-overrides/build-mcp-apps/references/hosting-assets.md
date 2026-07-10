# Hosting Assets

Use this when building a ChatGPT App or MCP App whose UI needs static assets such as JavaScript, CSS, images, or bundled frontend files.

Alpic can host both the MCP server and the UI assets used by ChatGPT/MCP Apps. Deployed servers expose static files at:

```text
/assets
```

## Asset sources

Alpic populates `/assets` from:

1. An `assets/` folder at the project root.
2. An `assets/` folder inside the build output directory. The default output directory is `dist`, so this is usually `dist/assets`.

If both locations contain files, Alpic merges them. Freshly built assets from the output directory take priority on conflicts.

## App code

Reference assets from MCP tools and resources with relative paths:

```text
/assets/my-widget.js
/assets/logo.png
```

Use this path shape in widget resource HTML, CSS references, image references, and component bundles.

## OpenAI cache note

OpenAI heavily caches ChatGPT App assets. In development mode, clear the cache by opening ChatGPT Settings, Apps & Connectors, selecting the app, and clicking Refresh.
