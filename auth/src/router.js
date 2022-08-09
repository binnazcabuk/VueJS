import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/HomePage.vue"), name: "Home" },
  { path: "/about", component: () => import("@/pages/About.vue"), name: "About" },
  { path: "/auth", component: () => import("@/pages/auth/Auth.vue"), name: "Auth" },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
