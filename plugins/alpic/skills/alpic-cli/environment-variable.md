# Managing Environment Variables

Variables are scoped to an **environment**. Get the environment ID with `alpic environment list`.

## List

```
alpic environment-variable list --environment-id <id>
```

Secret variables show as `<secret>`.

## Add

Interactive:
```
alpic environment-variable add --environment-id <id>
```

Non-interactive:
```
alpic environment-variable add --key DATABASE_URL --value postgres://host/db --environment-id <id>
```

Variables are secret by default. To make a variable visible:
```
alpic environment-variable add --key PORT --value 3000 --no-secret --environment-id <id>
```

Import from a `.env` file (mutually exclusive with `--key`/`--value`):
```
alpic environment-variable add --env-file .env --environment-id <id>
```

## Update

```
alpic environment-variable update --key DATABASE_URL --value postgres://new-host/db --environment-id <id>
```

Toggle secret status:
```
alpic environment-variable update --key PORT --no-secret --environment-id <id>
```

## Remove

```
alpic environment-variable remove --key DATABASE_URL --environment-id <id>
```

## After changes

Environment variable changes take effect on the **next deployment**:
```
alpic deploy --environment-id <id>
```
