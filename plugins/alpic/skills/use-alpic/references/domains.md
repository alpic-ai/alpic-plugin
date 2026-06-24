# Custom Domains

Use custom domain guidance when the user wants to serve an MCP server from their own domain instead of the default Alpic domain.

Primary docs:

- Domains: `https://docs.alpic.ai/distribution/domains`

## Constraints

- Custom domains are available on the Pro plan and above.
- Alpic supports custom CNAMEs for MCP server environments.
- Root domains such as `example.com` and wildcard domains such as `*.example.com` are not supported.

## Dashboard workflow

1. Open the Alpic dashboard and go to the project.
2. Open the project Settings tab.
3. Go to the Domains section and click Add.
4. Enter the custom domain and select the target environment.
5. Copy the CNAME records shown by Alpic into the DNS provider.
6. After DNS is configured, click Save & Deploy.
7. Wait a few minutes and check the domain status in the Domains section.

## Cloudflare

For Cloudflare-managed domains, set the CNAME to DNS only while saving in Alpic. Do not leave it proxied during validation, because the proxy replaces the public CNAME target and Alpic cannot verify ownership.

After validation, only re-enable the Cloudflare proxy if the user intentionally wants traffic routed through Cloudflare rather than directly to Alpic.

## Playground URL

When a custom domain is configured, the playground is available at:

```text
https://your-custom-domain.com/try
```
