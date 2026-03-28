# GitHub Integration for Quasar Electron App

## 🔄 Automated GitHub Actions

This project includes GitHub Actions workflows for:

### 1. CI/CD Pipeline (`.github/workflows/ci.yml`)
- **On Push**: Lint, build, and test
- **On Pull Request**: Full validation
- **Artifacts**: Built Electron app (.exe)

### 2. Release Automation (`.github/workflows/release.yml`)
- Creates GitHub releases on version tags
- Uploads built executables as release assets
- Generates changelog automatically

### 3. Dependency Updates (`.github/workflows/dependabot.yml`)
- Automatic dependency updates
- Security patch alerts

## 🚀 Replit Integration

### Import to Replit

1. Go to https://replit.com
2. Click **"Import from GitHub"**
3. Select: `krisshattanicole/quasar-electron-app`
4. Replit will auto-detect the Node.js project

### Configure Replit Secrets

After importing, add these secrets in Replit:

```
GITHUB_TOKEN=your_github_personal_access_token
REPLIT_TOKEN=your_replit_api_token (optional)
```

### Replit Features

- **Multiplayer**: Collaborate in real-time
- **Deploy**: One-click deployment
- **GitHub Sync**: Automatic sync with GitHub repository
- **AI Assistant**: Replit AI for code help

## 📦 Setup Steps

### Local Development

```bash
# Clone the repository
git clone https://github.com/krisshattanicole/quasar-electron-app.git
cd quasar-electron-app

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
```

### Replit Development

1. Import from GitHub
2. Run `npm install` in Shell
3. Run `npm run dev` to start
4. Use Replit's built-in browser preview

## 🔗 GitHub + Replit Workflow

```
Local Development → Push to GitHub → Import to Replit → Deploy
                         ↓
                  GitHub Actions CI/CD
                         ↓
                  Build & Release Assets
```

## 📝 Environment Variables

Create `.env` file for local development:

```env
# GitHub Integration
GITHUB_TOKEN=your_token_here

# App Configuration
APP_NAME=QuasarElectronApp
APP_VERSION=1.0.0
```

## 🛠️ Troubleshooting

### GitHub Authentication Issues
1. Generate Personal Access Token: https://github.com/settings/tokens
2. Scopes: `repo`, `workflow`, `read:user`
3. Add token to environment variables

### Replit Import Fails
1. Ensure repository is public or grant Replit access
2. Check `replit.nix` and `replit.toml` exist
3. Verify `package.json` has correct scripts

### Build Errors
1. Clear node_modules: `rm -rf node_modules`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`
