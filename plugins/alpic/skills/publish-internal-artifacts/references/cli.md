# Display.dev CLI

Check the installed command surface before relying on flags:

```bash
dsp --help
dsp <command> --help
```

Run without a global install:

```bash
npx @displaydev/cli --help
```

Authenticate interactively:

```bash
dsp login --email user@example.com
```

The user must supply the OTP outside chat. For automation, use
`DISPLAYDEV_API_KEY` from a secret store.

## Publish

New file or directory:

```bash
dsp publish ./artifact.html --name "Artifact name" --visibility private
dsp publish ./dist/ --name "Artifact name" --visibility private
```

Inspect the target first. A directory upload includes its contents, so exclude
source maps, environment files, credentials, private source, and unrelated
files.

Anonymous publishing is possible when no credential is configured:

```bash
npx @displaydev/cli publish ./artifact.html
```

It creates a public, expiring preview and a one-shot claim URL, so it is not a
fallback for private publishing. Use it only when the user explicitly requests
a temporary public preview after being told it is public. Preserve both URLs
because an anonymous artifact is not discoverable in a dashboard until claimed.

## Safe update

Always fetch the current baseline:

```bash
dsp get <shortId>
dsp export <shortId> > /tmp/display-current.html
dsp publish ./updated.html --id <shortId> --base-version <currentVersion>
```

Pass `--name` only when renaming during the update. Use `--reload` only for
author iteration where interrupting an open viewer is acceptable.

On a version conflict, do not retry blindly. Fetch the latest source and
metadata, reconcile the content, then publish against the latest version.

## Manage

```bash
dsp find "query"
dsp get <shortId> --include versions
dsp rename <shortId> --name "New name"
dsp share <shortId> --visibility company
dsp share <shortId> --add-users person@example.com
dsp share <shortId> --remove-users person@example.com
dsp export <shortId>
```

For permanent deletion, first run `dsp get <shortId>` and show the resolved
artifact to the user. Only after explicit confirmation:

```bash
dsp delete <shortId> --confirm
```

Official reference: https://display.dev/docs/cli-reference
