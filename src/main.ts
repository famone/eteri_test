import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/css/style.css'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
// import { useLangStore } from '@/stores/lang'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3TouchEvents from 'vue3-touch-events';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueScrollTo)
app.use(Vue3TouchEvents)
app.mount('#app')
