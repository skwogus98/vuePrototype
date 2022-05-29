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
app.config.globalProperties.HOST = "http://202.31.200.215:8080";
