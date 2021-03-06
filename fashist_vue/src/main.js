import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router'
import store from './store'
import axios from   'axios'

axios.defaults.baseURL='http://127.0.0.1:8000'
createApp(App).use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"