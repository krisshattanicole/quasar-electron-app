# GitHub Configuration

This directory contains GitHub Actions workflows and configuration for the Quasar Electron App.

## Workflows

### ci.yml - CI/CD Pipeline
- Runs on every push and pull request
- Lints, builds, and tests the application
- Uploads build artifacts for download

### release.yml - Automated Releases
- Triggered by version tags (e.g., `v1.0.0`)
- Builds the Electron app
- Creates GitHub release with executable attachments

### replit-deploy.yml - Replit Integration
- Automatically deploys to Replit on push to main
- Requires `REPLIT_TOKEN` secret to be configured

## Setup

### 1. Configure Secrets

Go to your repository settings and add these secrets:

```
GITHUB_TOKEN: (automatically provided by GitHub Actions)
REPLIT_TOKEN: (optional, for Replit auto-deploy)
```

### 2. Enable GitHub Actions

- Go to **Actions** tab
- Enable workflows if disabled
- Workflows run automatically on push/PR

### 3. Create a Release

```bash
# Update version in package.json
npm version patch  # or minor/major

# Push tag to trigger release workflow
git push --tags
```

## Artifacts

Build artifacts are stored for 30 days and include:
- Windows executable (.exe)
- Installer packages
- Build logs and metadata

## Replit Integration

The workflows integrate with Replit for:
- Cloud development environment
- Collaborative coding
- One-click deployment

See `REPLIT-SETUP.md` in the root for more details.
