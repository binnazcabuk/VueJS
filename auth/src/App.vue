<template>
  <div>
    <Header />
  <router-view></router-view>
  </div>
</template>
<script>
  import Header from "./components/Header";
  import Auth from "./pages/auth/Auth"
  import Homepage from "./pages/HomePage"
  import About from "./pages/About"
  export default {
    components: {
        Header,
        Auth,
        Homepage,
        About
    },
  }
</script>
