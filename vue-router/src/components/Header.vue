<template>
  <div class="container">
    <!-- seçili olan sekme active isimli style'a sahip olur -->
     <router-link  class="nav-link" active-class="active" to="/"> Home</router-link>      
     <router-link  class="nav-link" active-class="active" to="/user"> User</router-link>
  </div>
</template>


<style scoped>
.nav-link{
    padding: 5px 10px;
    text-decoration: none;
    border:1px solid #fa6558;
    color:rgb(3, 3, 3);
    margin-right: 5px;
}
.active{
    background-color: #fa6558;
}
</style>