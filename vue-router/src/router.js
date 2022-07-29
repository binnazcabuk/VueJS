import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/components/Home.vue"), name: "Home" },
  { 
    path: "/user",
    component: () => import("@/components/user/User"),
    name: "User",
    children: [
                { path: "", component: () => import("@/components/user/UserStart") }, //user
                { path: ":id", component: () => import("@/components/user/UserDetail") }, //user/12
                { path: ":id/edit", component: () => import("@/components/user/UserEdit"),name:"userEdit" } //user/12/edit
              ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
