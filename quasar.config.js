/* eslint-env node */

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      warnings: false,
      errors: false
    },

    boot: [],

    css: [],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },

      vueRouterMode: 'hash',
      
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
      }
    },

    framework: {
      config: {},
      plugins: []
    },

    devServer: {
      open: false
    },

    sourceFiles: {
      electronMain: 'src-electron/electron-main.js',
      electronPreload: 'src-electron/preload.js'
    }
  }
});
