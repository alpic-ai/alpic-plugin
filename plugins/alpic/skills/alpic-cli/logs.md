# Viewing Runtime Logs

`alpic logs` shows **runtime logs** (server output while handling requests).
For **build/deployment logs**, use `alpic deployment logs --deployment-id <id>` instead.

## Get the environment ID

```
alpic environment list
```

## Basic usage

```
alpic logs --environment-id <id>
```

## Common workflows

Tail live logs:
```
alpic logs --environment-id <id> --follow
```

Last hour of logs:
```
alpic logs --environment-id <id> --since 1h
```

Errors only:
```
alpic logs --environment-id <id> --level ERROR
```

Search for a pattern:
```
alpic logs --environment-id <id> --search 'timeout'
```

## All flags

| Flag | Description |
|------|-------------|
| `--environment-id` | Target environment |
| `--since` | Start time: `1h`, `30m`, `2d`, or ISO 8601 |
| `--until` | End time: same format. Cannot be used with `--follow` |
| `--limit` / `-n` | Max entries (1–1000). Cannot be used with `--follow` |
| `--follow` / `-f` | Poll for new logs continuously |
| `--level` | `INFO`, `ERROR`, `WARNING`, `DEBUG`. Repeatable |
| `--search` | Text or regex pattern |
| `--no-color` | Disable color |
