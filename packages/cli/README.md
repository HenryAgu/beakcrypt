# beakcrypt

Secure environment variable management with end-to-end encryption. Secrets are encrypted on your machine before leaving it — beakcrypt never sees plaintext values.

## Installation

```bash
npm install -g beakcrypt
```

Requires Node.js 20 or later.

## Quick start

```bash
# Log in with GitHub
beakcrypt login

# Link your project directory
beakcrypt link

# Push your local .env.local to the cloud
beakcrypt push

# Pull secrets back down on another machine
beakcrypt pull
```

## Commands

### Auth

```
beakcrypt login           Log in via GitHub OAuth
beakcrypt logout          Log out and remove local credentials
beakcrypt whoami          Show the currently logged-in user
```

### Project

```
beakcrypt link            Link the current directory to a project
```

### Secrets

```
beakcrypt pull [file]     Pull secrets to a local .env file (default: .env.local)
beakcrypt push [file]     Push secrets from a local .env file (default: .env.local)
beakcrypt run -- <cmd>    Run a command with secrets injected as environment variables
```

All secret commands accept these flags:

```
-o, --org <slug>          Organization slug
-p, --project <name>      Project name
-e, --env <name>          Environment name
-y, --yes                 Skip confirmation prompts (push, logout)
```

### Secrets management

```
beakcrypt secrets list                  List secrets (values masked)
beakcrypt secrets set <KEY=VALUE...>    Set one or more secrets
beakcrypt secrets remove <KEY...>       Remove secrets by key
beakcrypt secrets clear                 Delete all secrets in an environment
```

### Organizations

```
beakcrypt org list         List your organizations
```

### Environments

```
beakcrypt env list         List environments for the linked project
```

## Examples

```bash
# Inject secrets into a dev server
beakcrypt run -- npm run dev

# Push a specific env file to a named environment
beakcrypt push .env.production -e production

# Set individual secrets directly
beakcrypt secrets set API_KEY=abc123 DATABASE_URL=postgres://...

# Pull into a custom file
beakcrypt pull .env.staging -e staging
```
