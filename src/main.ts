import { createApp } from "vue";
import App from "./App";
import { loadAllPlugins } from "@/plugins";
import "./styles/index.scss";
import router from "./router";
import store from "./store";
const app = createApp(App);
app.use(router);
app.use(store);
loadAllPlugins(app);
app.mount("#app");
