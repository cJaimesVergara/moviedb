import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"



const app = createApp(App).use(store);
app.use(VueAxios, axios);
app.mount("#app");
