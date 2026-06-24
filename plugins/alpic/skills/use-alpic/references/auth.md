# App Authentication

Use when an MCP app/server needs user-specific data, OAuth/account linking,
DCR, or API-key protection.

Alpic is not an IdP. The MCP server implements auth; Alpic hosts it, detects
OAuth metadata, and can proxy DCR when the upstream IdP lacks DCR support.

Primary docs:

- OAuth setup: `https://docs.alpic.ai/secure/auth/oauth-setup`
- DCR proxy: `https://docs.alpic.ai/secure/auth/dcr-proxy`
- OAuth providers: `https://docs.alpic.ai/secure/auth/oauth-providers`
- API key auth: `https://docs.alpic.ai/secure/auth/token-bearer-setup`

## Workflow

1. Choose OAuth for user identity/account linking, or `x-api-key` for simple
   header auth.
2. Expose OAuth metadata and protect MCP routes with bearer-token verification.
3. Deploy and confirm Alpic detects the server as protected.
4. If the IdP lacks DCR, configure Alpic DCR proxy in Settings ->
   Authentication.
5. Verify unauthenticated, authenticated, expired-token, denied-permission, and
   reconnect paths.

## OAuth shapes

- OAuth 2.1 + DCR IdP: include the IdP `registration_endpoint`; clients register
  directly with the IdP.
- OAuth/OIDC without DCR: omit `registration_endpoint`; use Alpic DCR proxy
  after deployment.

Typical metadata: `issuer`, `authorization_endpoint`, `token_endpoint`,
optional `registration_endpoint`, `response_types_supported: ["code"]`,
`code_challenge_methods_supported: ["S256"]`, and
`token_endpoint_auth_methods_supported`.

## Alpic DCR proxy

Use when the IdP has OAuth/OIDC endpoints but no DCR support.

Setup:

1. Deploy server metadata without `registration_endpoint`.
2. Create one OAuth client in the upstream IdP.
3. In Alpic Settings -> Authentication, create the DCR client pool.
4. Enter upstream client ID, client secret, scopes, and the callback URL shown
   by Alpic.

Alpic then advertises its own registration endpoint and issues per-client
credentials while proxying token requests through the upstream OAuth client.

Update the DCR client pool for credential rotation. Delete only when
decommissioning or intentionally breaking existing client registrations.

## Auth endpoints

- `/.well-known/protected-resource-metadata`
- `/.well-known/oauth-authorization-server`
- `/register`, `/authorize`, `/token`, `/callback` when DCR proxy is active

Public MCP endpoints remain `/` and `/mcp`; protect MCP routes in code so
unauthenticated requests receive HTTP 401 before tool handlers run.

## Notes

- Use `ALPIC_HOST` only when deployed-host discovery is needed in OAuth
  metadata.
- Store client secrets/API keys as Alpic environment variables.
- For `x-api-key`, read the request header in middleware/tool handlers and
  return a clear missing/invalid-key error.
- Use the build MCP apps OAuth reference for framework-level code examples.
