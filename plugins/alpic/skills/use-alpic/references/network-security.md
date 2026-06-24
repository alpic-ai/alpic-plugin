# Network Security

Use this when the user asks about fixed outbound IPs, allowlisting Alpic traffic in an external API, restricting access to an MCP server, or limiting access to ChatGPT/Claude/corporate networks.

Primary docs:

- IP whitelisting: `https://docs.alpic.ai/secure/ip-whitelisting`
- Fixed outbound IP: `https://docs.alpic.ai/secure/fixed-outbound-ip`

## Fixed outbound IP

Fixed outbound IP routes the MCP server's outbound traffic through predictable addresses. Use it when an external API requires source IP allowlisting.

Constraints:

- Available on the Enterprise plan only.
- Enabled from project Settings with the Fixed Outbound IP switch.
- Activation can take a few minutes.
- Current Alpic IP ranges are published at `https://assets.alpic.ai/ip-ranges.json`.
- IPs are stable and should not change without advance notice.

## IP whitelisting

IP whitelisting restricts inbound access to an MCP server. Requests from unapproved IPs or clients receive `403 Forbidden`.

Use it to allow known MCP clients such as ChatGPT or Claude, or to restrict usage to a corporate network.

Important:

- IP whitelisting is configured per environment.
- Alpic maintains client IP lists for ChatGPT and Claude.
- ChatGPT IPs are fetched from OpenAI's published list and refreshed regularly.
- Claude IPs are based on Anthropic's published addresses and updated with Alpic releases.
- Users can add up to 20 custom IP addresses or CIDR ranges per environment.

## Dashboard workflow

1. Open the project in the Alpic dashboard.
2. Go to Distribution, then Trusted IPs.
3. Enable IP whitelisting.
4. Select MCP clients and/or add custom IPs.
5. Save.

Restrictions apply immediately to new requests.
