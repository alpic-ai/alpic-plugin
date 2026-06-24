# Builds

Use when deployment fails because of build config, install/build/start commands,
output dirs, runtime setup, or MCP transport detection.

Primary docs:

- Builds: `https://docs.alpic.ai/build-deploy/builds`

Alpic detects MCP framework, build commands, and transport automatically. Config
priority:

1. `alpic.json`
2. Project settings
3. Detected defaults

## alpic.json

```json
{
  "$schema": "https://assets.alpic.ai/alpic.json",
  "buildCommand": "npm run build",
  "buildOutputDir": "dist",
  "installCommand": "npm ci",
  "startCommand": "npm run --silent start"
}
```

## Gotchas

- If "No MCP transport found", add explicit transport config/parameter.
- Python uses `uv` by default. Prefer `pyproject.toml`.
- For `main.py` + `requirements.txt`, override install command:

```json
{
  "$schema": "https://assets.alpic.ai/alpic.json",
  "installCommand": "uv venv && uv pip install -r requirements.txt"
}
```
