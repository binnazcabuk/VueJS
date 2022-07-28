<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>Filter Message:</h3>
  <p>{{ toUpperCase }}</p>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      message: "Selamlar vue3 Eğitimi",
    };
  },
  // filters:{ filters vue3 de yok },
  //3.x'te filtreler kaldırılır ve artık desteklenmez. 
  //Bunun yerine, bunları yöntem çağrıları veya hesaplanmış özelliklerle değiştirmenizi öneririz.

  // data içerisindeki verilerden biri değiştiğinde computed render edilir.
  computed: {
    toUpperCase() {
      return this.message.toUpperCase();
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
