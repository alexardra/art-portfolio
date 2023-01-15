import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import clickOutside from './directives/clickOutside';
import VueLazyload from 'vue-lazyload'

import '@/styles/base.scss'
import '@/styles/fonts.css'

const app = createApp(App)

app.directive('click-outside', clickOutside);

app.use(VueLazyload, {
  lazyComponent: true
});

app.use(router)
app.mount('#app')
