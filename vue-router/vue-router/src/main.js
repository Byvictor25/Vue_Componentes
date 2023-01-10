import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import "/node_modules/bootstrap/dist/css/bootstrap.css"
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
