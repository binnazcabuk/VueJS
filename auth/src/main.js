import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
/* default export edildiğinde "{ }" içerisinde yazmıyoruz. 
Sabit bir değişkenden export edildiğinde createApp'deki gibi süslü içerisinde belirtiyoruz.
*/
const app= createApp(App)
app.use(router);
app.use(store)
app.mount('#app')
