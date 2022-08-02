import { createRouter, createWebHistory } from "vue-router";

const routes = [

  { path: "/", component: () => import("@/components/NewPost") },
  { path: "/new-post", component: () => import("@/components/Posts") },
 
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
