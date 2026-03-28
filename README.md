# ⚛️ Quasar Electron App

> Quasar Electron Desktop App with Replit & GitHub Integration

[![GitHub](https://img.shields.io/github/package-json/v/krisshattanicole/quasar-electron-app)](https://github.com/krisshattanicole/quasar-electron-app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Replit](https://img.shields.io/badge/Replit-Import-F13A3A?logo=replit)](https://replit.com/github/krisshattanicole/quasar-electron-app)

## 🚀 Features

- ⚡ **Quasar Framework v2** - Build high-performance Vue.js apps
- 🖥️ **Electron** - Cross-platform desktop application
- 🔄 **GitHub Integration** - Automated CI/CD with GitHub Actions
- ☁️ **Replit Ready** - One-click import to Replit for cloud development
- 🎨 **Material Design** - Beautiful UI with Quasar components
- 📦 **Pre-configured** - Ready to build .exe for Windows

## 📦 Quick Start

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

1. Go to https://replit.com/github/krisshattanicole/quasar-electron-app
2. Click **Run** to start the development server
3. Start coding in the cloud!

See [`REPLIT-SETUP.md`](REPLIT-SETUP.md) for detailed instructions.

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start Electron dev server
npm run replit:dev       # Replit-optimized dev mode

# Building
npm run build            # Build Electron app
npm run build:win        # Build for Windows
npm run replit:build     # Replit-optimized build

# GitHub Integration
npm run github:release   # Create GitHub release
```

## 📁 Project Structure

```
quasar-electron-app/
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
├── src/                 # Vue.js source code
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── router/          # Vue Router config
│   └── main.js          # App entry point
├── src-electron/        # Electron main process
│   ├── electron-main.js # Main process
│   └── preload.js       # Preload script
├── public/              # Static assets
├── scripts/             # Helper scripts
├── replit.nix           # Replit environment
├── replit.toml          # Replit configuration
└── package.json         # Dependencies & scripts
```

## 🔗 GitHub + Replit Integration

### GitHub Actions Workflows

| Workflow | Description | Trigger |
|----------|-------------|---------|
| `ci.yml` | Lint, build, test | Push / PR |
| `release.yml` | Create releases with artifacts | Version tags |
| `replit-deploy.yml` | Auto-deploy to Replit | Push to main |

### Import to Replit

1. Visit https://replit.com
2. Click **Import from GitHub**
3. Select `krisshattanicole/quasar-electron-app`
4. Start coding instantly!

### Configure Secrets

Add these in Replit's **Secrets** tab:

```bash
GITHUB_TOKEN=your_github_personal_access_token
REPLIT_TOKEN=your_replit_api_token  # optional
```

## 📚 Documentation

- **[REPLIT-SETUP.md](REPLIT-SETUP.md)** - Complete Replit setup guide
- **[GITHUB-INTEGRATION.md](GITHUB-INTEGRATION.md)** - GitHub Actions & workflows
- **[.github/README.md](.github/README.md)** - GitHub configuration details

## 🧰 Tech Stack

- **Framework**: [Quasar v2](https://quasar.dev/)
- **Frontend**: [Vue 3](https://vuejs.org/)
- **Desktop**: [Electron](https://www.electronjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Components**: [Quasar Components](https://quasar.dev/vue-components/)
- **Icons**: [Material Icons](https://fonts.google.com/icons)

## 🚢 Deployment

### Windows Executable

```bash
# Build .exe
npm run build:win

# Output: dist/electron/Packaged/
```

### Replit Hosting

1. Click **Deploy** in Replit
2. Choose deployment region
3. App is live at `your-app.replit.app`

### GitHub Releases

```bash
# Create a release
npm run github:release
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub**: https://github.com/krisshattanicole/quasar-electron-app
- **Replit**: https://replit.com/github/krisshattanicole/quasar-electron-app
- **Quasar Docs**: https://quasar.dev/
- **Electron Docs**: https://www.electronjs.org/

---

**Built with ❤️ using Quasar & Electron**

🐊 *Laissez les bons temps rouler!*
