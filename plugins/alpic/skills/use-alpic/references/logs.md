# Viewing Runtime Logs

`alpic logs` shows runtime logs. For build/deployment logs, use
`alpic deployment logs --deployment-id <id>`.

Primary docs:

- Runtime logs: `https://docs.alpic.ai/cli/logs`
- Deployment logs: `https://docs.alpic.ai/cli/deployment-logs`

## Commands

```bash
alpic environment list
alpic logs --environment-id <id>
alpic logs --environment-id <id> --follow
alpic logs --environment-id <id> --since 1h
alpic logs --environment-id <id> --level ERROR
alpic logs --environment-id <id> --search 'timeout'
```

Flags:

- `--environment-id`: target environment
- `--since` / `--until`: `1h`, `30m`, `2d`, or ISO 8601
- `--limit` / `-n`: max entries, cannot combine with `--follow`
- `--follow` / `-f`: poll continuously
- `--level`: `INFO`, `ERROR`, `WARNING`, `DEBUG`; repeatable
- `--search`: text or regex pattern
- `--no-color`: disable color
