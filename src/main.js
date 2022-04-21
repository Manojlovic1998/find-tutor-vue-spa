import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

const app = createApp(App);

// Vuex Store
app.use(store);
// Vue Router
app.use(router);

// Mount
app.mount("#app");
