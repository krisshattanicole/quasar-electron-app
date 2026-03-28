# Replit Setup Guide

## 🚀 Quick Start

### 1. Import to Replit

1. Go to https://replit.com
2. Click **"Import from GitHub"**
3. Select repository: `krisshattanicole/quasar-electron-app`
4. Replit will automatically detect the Node.js project

### 2. Configure Environment

Replit will use the `replit.nix` file to set up:
- Node.js 20.x
- npm package manager
- Git

### 3. Install Dependencies

Open the **Shell** in Replit and run:

```bash
npm install
```

### 4. Run the App

```bash
# Development mode
npm run dev

# Or use the Replit-specific command
npm run replit:dev
```

### 5. Build for Production

```bash
# Build Electron app
npm run build

# Or use Replit command
npm run replit:build
```

## 📁 Project Structure

```
quasar-electron-app/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── src/                    # Vue.js source code
├── src-electron/           # Electron main process
├── public/                 # Static assets
├── replit.nix              # Replit environment config
├── replit.toml             # Replit project config
├── package.json            # Dependencies & scripts
└── GITHUB-INTEGRATION.md   # Full integration guide
```

## 🔗 GitHub + Replit Integration

### Automatic Sync

When you push to GitHub:
1. GitHub Actions runs CI/CD pipeline
2. Code is automatically available in Replit
3. Optional: Auto-deploy to Replit hosting

### Manual Sync in Replit

1. Open **Version Control** panel
2. Click **Pull** to get latest changes
3. Click **Push** to commit changes

## 🔐 Secrets Configuration

Add these in Replit's **Secrets** tab:

```
GITHUB_TOKEN=your_github_personal_access_token
REPLIT_TOKEN=your_replit_api_token
```

### Getting Your GitHub Token

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Select scopes: `repo`, `workflow`, `read:user`
4. Copy and save the token
5. Add to Replit Secrets

## 🛠️ Development Tips

### Multiplayer Collaboration

- Click **Invite** to collaborate in real-time
- Multiple people can edit code simultaneously
- Built-in chat and voice call support

### Replit AI Assistant

- Press `Ctrl+Space` for AI code completion
- Use `@replit/ai` package for AI features
- Ask AI to explain code or generate tests

### Debugging

- Use Replit's built-in debugger
- Set breakpoints in the code editor
- View console output in the Shell

## 📦 Deployment Options

### 1. Replit Hosting

- Click **Deploy** button
- Choose deployment region
- App is live at `your-app.replit.app`

### 2. GitHub Pages

- Build static assets
- Deploy to GitHub Pages
- Free hosting for web version

### 3. Download Executable

- Build Electron app
- Download `.exe` from Releases
- Distribute to users

## 🐛 Troubleshooting

### Dependencies Won't Install

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Check Node.js version
node --version

# Should be 18, 20, or 22
# If not, update in replit.nix
```

### GitHub Sync Issues

```bash
# Force pull from GitHub
git fetch origin
git reset --hard origin/main
```

## 📚 Resources

- [Replit Documentation](https://docs.replit.com/)
- [Quasar Framework](https://quasar.dev/)
- [Electron Docs](https://www.electronjs.org/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🆘 Support

- Check `GITHUB-INTEGRATION.md` for detailed GitHub setup
- Open an issue on GitHub for bugs
- Join Replit Discord for community help
