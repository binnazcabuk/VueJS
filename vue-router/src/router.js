import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: ()=>import("@/components/Home.vue"),name:'Home'},
  { path: "/user", component: ()=> import("@/components/user/User") ,name:'User'},
];

const router = createRouter({
  routes,
  history:createWebHistory()
});

export default router;