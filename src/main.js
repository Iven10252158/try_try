import { createApp } from 'vue'
import * as VueAos from 'vue-aos'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

AOS.init()
const app = createApp(App)
app.use(VueAos)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
