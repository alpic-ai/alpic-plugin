# Connecting a Git Repository

Connects a GitHub repository to an Alpic project so pushes can trigger automatic deployments.

## Prerequisites

- Directory must be linked to an Alpic project (done by `alpic deploy`)
- Directory must be a git repository with at least one GitHub remote

## Connect

```bash
alpic git connect
```

The CLI detects GitHub remotes, prompts to select one, and links it to the project.

Non-interactive:
```bash
alpic git connect --non-interactive --remote-name origin
```

After connecting, install the **Alpic GitHub App** on the repository to enable automatic deploys on push. The CLI prints a reminder with the link.

## Disconnect

```bash
alpic git disconnect
```

Removes the source repository link. Automatic deployments stop; the project itself is unaffected.

## Common issues

**"This directory is not linked to an Alpic project"**
Run `alpic deploy` first.

**"No GitHub remotes found"**
Only GitHub is supported. Add a remote: `git remote add origin https://github.com/your-org/your-repo.git`
