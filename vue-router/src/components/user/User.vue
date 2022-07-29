<template>
  <div class="container">
    <h3>User Component</h3>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum
      libero odit optio repellendus sed soluta? Animi, atque blanditiis commodi
      consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr />
    <button class="btn btn-success" @click="navigateHome">
      Home Component
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateHome() {
      //$router ile router'e erişebiliyoruz. Push methodu ile ilgili adrese erişim sağlanır.
      //3.farklı şekilde tanımlama yapılabilir.
      // this.$router.push("/"); path içeriğini direk belirterek
      this.$router.push({ path: "/" }); //obje olarak path'ı vermek
      // this.$router.push({name:'Home'}); //router içersinde tanımlanan name ile 
    },
  },
};
</script>
