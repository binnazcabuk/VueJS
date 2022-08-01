<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
   <NewUser/>
   <UserList/>
  </div>
</template>

<script>
import NewUser from "@/components/NewUser.vue";
import UserList from "./components/UserList.vue";
export default {
  name: "App",
  components: {
    UserList,
    NewUser,
},
  created() {
    console.log(this.$store.state.person);
    //getter'daki veri
    console.log(this.$store.getters.woodItems);
    //getter veriyi alma(password bilgisi yok )
    console.log(this.$store.getters.activeUser);
    //mapGetters ile veriyi alma
       console.log(this.activeUser);
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
