import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import router from './router'

// Import Quasar css
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'

const app = createApp({
  router
})

app.use(Quasar, {
  plugins: {
    Notify
  }
})

app.mount('#q-app')
