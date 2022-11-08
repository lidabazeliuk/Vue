import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import store-view from './store-view'

createApp(App)
.use(store)
.mount('#app')