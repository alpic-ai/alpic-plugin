# Agent compatibility

The skill follows the portable Agent Skills layout:

```text
publish-internal-artifacts/
├── SKILL.md
└── references/
```

Its operational path is the same in every agent:

1. Inspect the local artifact with filesystem tools.
2. Run `dsp` through the agent's terminal.
3. Pause for human authentication when needed.
4. Verify the returned URL and metadata.

## Claude Code

When installed as part of this Claude plugin, Claude discovers the skill under
the plugin's `skills/` directory. Invoke it by asking Claude to use
`publish-internal-artifacts` or by requesting a private artifact publish.

Claude should use its shell tool for `dsp`. Display MCP is optional.

## Hermes Agent

Hermes supports `SKILL.md` folders and progressive reference loading. Either
copy the complete `publish-internal-artifacts` folder under
`~/.hermes/skills/`, or configure the plugin's skills directory as an external directory in
`~/.hermes/config.yaml`:

```yaml
skills:
  external_dirs:
    - /absolute/path/to/alpic-plugin/plugins/alpic/skills
```

Then verify discovery:

```bash
hermes skills list
```

Invoke it as `/publish-internal-artifacts <task>` or ask Hermes to publish an
artifact or internal site privately.
Ensure Hermes has its terminal toolset enabled because the default workflow
runs `dsp`.

## Codex

When installed as a Codex plugin, Codex discovers the skill from the plugin's
configured `skills` directory. Invoke it as `$publish-internal-artifacts` or
make a request that matches its description.

Codex should use its terminal tool for `dsp`. Configure Display MCP only when
the user wants persistent Display tools rather than the CLI-first workflow.

## Other agents

For an Agent Skills-compatible host, install the complete folder in the host's
skills directory. If the host accepts only a single `SKILL.md`, inline the
relevant reference instructions or use its supported bundle mechanism;
otherwise relative references will be unavailable.

Agent-specific permissions remain authoritative. Never encode a blanket bypass
for command approvals or destructive actions.

Official Hermes references:

- https://github.com/NousResearch/hermes-agent/blob/main/website/docs/guides/work-with-skills.md
- https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md
