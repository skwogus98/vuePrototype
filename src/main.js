import { createApp } from "vue";
import App from "./App.vue";
import router from "./js/router";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { store } from "./store/user";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

const app = createApp(App);
app.use(BootstrapVue3);
app.component("b-icon", BootstrapIcon);
app.use(store);
app.use(router).mount("#app");
<<<<<<< HEAD
// app.config.globalProperties.HOST = "http://202.31.200.215:8080";
=======
>>>>>>> 0eaf676bbf454a218946f6c3bd2ef7ad78264c22
app.config.globalProperties.HOST = "http://117.20.209.64:8080"; // 종렬 테스트
