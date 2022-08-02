import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import axios  from 'axios';

axios.defaults.baseURL="https://apiresponse-21f81-default-rtdb.firebaseio.com"
const app= createApp(App);
app.use(router)
app.mount('#app');


