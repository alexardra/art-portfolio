import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/base.scss'
import '@/styles/clash-display.css'

createApp(App).use(router).mount('#app')
