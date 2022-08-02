import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "./store/store";
import axios  from 'axios';
import "@/assets/loading.css"

axios.defaults.baseURL="https://apiresponse-21f81-default-rtdb.firebaseio.com"
const app = createApp(App);
app.use(router)
app.use(store);
app.mount('#app');