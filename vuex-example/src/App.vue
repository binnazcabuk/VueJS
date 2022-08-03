<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ProductPurchase from "./components/ProductPurchase.vue";
import ProductSell from "./components/ProductSell.vue";
import ProductList from "./components/ProductList.vue";
export default {
  components: { Header, Footer, ProductPurchase, ProductSell, ProductList },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  },
};
</script>
<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity.3s ease-out;
}
.fade-leave-active {
  transition: opacity.3s ease-out;
  opacity: 0;
}
</style>
