import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)
createApp(App).mount('#app')
