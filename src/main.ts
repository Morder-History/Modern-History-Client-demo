import { createApp } from "vue";
// 清除默认样式
import "normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store).use(router).mount("#app");
