import { createRouter, createWebHistory } from "vue-router";

const routes=[
    {path:"/",component:()=>import("@/components/ProductList.vue"), name:"ProductList"},
    {path:"/urun-islemleri",component:()=>import("@/components/ProductPurchase.vue"), name:"ProductPurchase"},
    {path:"/urun-cikisi",component:()=>import("@/components/ProductSell.vue"), name:"ProductSell"},


];

const router = createRouter({
    routes,
    history: createWebHistory(),
  });
  
  export default router;