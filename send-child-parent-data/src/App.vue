<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- user component'ine "getUserName" isimli methodu gönderiyoruz. -->
  <User :getUser="getUserName" />
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    getUserName(name) {
      this.name = name;
      alert(name);
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
