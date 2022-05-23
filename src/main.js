import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { store } from './store/user'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(store)
app.use(router).mount('#app')
app.config.globalProperties.HOST = "http://202.31.200.219:8080"