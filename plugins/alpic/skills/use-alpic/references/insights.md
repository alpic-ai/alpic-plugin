# User Insights

Use when the user wants to capture user intents, model/user feedback, or product
learning signals from an MCP app/server.

Primary docs:

- User intents: `https://docs.alpic.ai/user-insights/user-intents`
- User feedbacks: `https://docs.alpic.ai/user-insights/user-feedbacks`

Alpic uses `@alpic-ai/insights`.

```bash
pnpm add @alpic-ai/insights
```

## User intents

Intents add an extra tool parameter so the LLM explains the user's intent behind
a tool call while removing personally identifiable information.

Skybridge:

```typescript
import { intentMiddleware } from "@alpic-ai/insights";

server.mcpMiddleware(intentMiddleware());
```

MCP SDK:

```typescript
import { captureIntents } from "@alpic-ai/insights";

captureIntents(server);
```

## Feedback

Feedback adds a `send_feedback` tool and stores feedback in the Alpic dashboard.

Skybridge:

```typescript
import { feedbackMiddleware } from "@alpic-ai/insights";

server.mcpMiddleware(feedbackMiddleware());
```

MCP SDK:

```typescript
import { captureFeedback } from "@alpic-ai/insights";

captureFeedback(server);
```

Register middleware before tool/widget registrations, then deploy. Production
intents and feedback appear in the project Insights tab.
