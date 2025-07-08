import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
app.use(VueScrollTo) 
app.mount('#app')

