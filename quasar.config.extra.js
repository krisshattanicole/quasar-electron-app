module.exports = {
  siteTitle: 'Quasar Electron App',
  siteDescription: 'Quasar Electron Desktop App with Replit & GitHub Integration',
  author: {
    name: 'krisshattanicole',
    url: 'https://github.com/krisshattanicole'
  },
  build: {
    distDir: 'dist',
    wwwDir: 'www',
    quasarDir: '.quasar'
  },
  electron: {
    inspectPort: 5858,
    bundler: 'builder',
    builder: {
      appId: 'com.quasar.electron-app',
      productName: 'QuasarElectronApp',
      directories: {
        output: 'dist/electron'
      },
      win: {
        target: ['portable'],
        icon: 'src-electron/icons/icon.png'
      }
    }
  },
  github: {
    owner: 'krisshattanicole',
    repo: 'quasar-electron-app',
    branch: 'main'
  },
  replit: {
    enabled: true,
    config: 'replit.toml',
    nix: 'replit.nix'
  }
}
