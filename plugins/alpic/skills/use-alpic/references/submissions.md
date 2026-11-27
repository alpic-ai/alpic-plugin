# ChatGPT and Claude Directory Submissions

Use submission packages when the user wants to list an MCP app in the ChatGPT
or Claude directory. Alpic prepares the package; the user still submits it in
the store's own form.

Primary docs:

- Submissions: `https://docs.alpic.ai/distribution/submissions`
- CLI submission update: `https://docs.alpic.ai/cli/submission-update`

## Prerequisites

- The environment has a successful deployment.
- The MCP server does not require authentication. The pre-fill cannot connect
  to an OAuth-protected server and returns an empty package.

## Create

```bash
alpic submission create --platform chatgpt --environment-id <id> --json
```

`--platform` is `chatgpt` or `claudeai`, and is required in non-interactive
mode. Creating a package also starts a Beacon audit of the environment.

## Edit A Saved Package

Find the package, export its fields, edit them, and write them back:

```bash
alpic submission list --project-id <id>
alpic submission inspect --submission-id <id> --json | jq .formData > submission.json
alpic submission update --submission-id <id> --form-data-file submission.json
```

- Updates merge: only the fields passed change. Send `""` or `[]` to blank a
  field.
- Unknown field names are rejected, so a typo fails the call.
- `--form-data '<json>'` passes fields inline; `--form-data-file -` reads
  standard input.
- The platform is fixed when the package is created.

Uploading logos and screenshots, verifying policy URLs, and the store handoff
happen in the dashboard's **Submissions** tab.
