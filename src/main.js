import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from './router/index.js'
import store from './store/FavoritesStore.js'
createApp(App).use(router).use(store).mount('#app')
