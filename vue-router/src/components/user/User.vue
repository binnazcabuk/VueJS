<template>
  <div class="container">
    <router-view>

    </router-view>
    <hr/>
    <button class="btn btn-success" @click="navigateHome">
      Back Home
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //route'a gönderilen id'yi okuyup değişkene atama
      id: this.$route.params.id,
    };
  },
  methods: {
    navigateHome() {
      //$router ile router'e erişebiliyoruz. Push methodu ile ilgili adrese erişim sağlanır.
      //3.farklı şekilde tanımlama yapılabilir.
      // this.$router.push("/"); path içeriğini direk belirterek
      this.$router.push({ path: "/" }); //obje olarak path'ı vermek
      // this.$router.push({name:'Home'}); //router içersinde tanımlanan name ile
    },
  },
  watch: {
    //routeda id değişince çalışır.
    $route(to) {
      this.id = to.params.id;
    },
  },
};
</script>
