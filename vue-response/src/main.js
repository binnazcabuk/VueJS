import { createApp } from "vue";
import App from "./App.vue";
 import VueResource from "vue-resource";

const app = createApp(App);


 app.use(VueResource);
 app.http.options.root ="https://apiresponse-21f81-default-rtdb.firebaseio.com/";
 app.http.interceptors.push((request, next) => {
    // if(request.method == "POST"){
    //   request.method = "PUT"
    // }
    next(response => {
      response.json = () => {
        return {
          userList : response.body
        }
      }
    });
  });
app.mount("#app");



