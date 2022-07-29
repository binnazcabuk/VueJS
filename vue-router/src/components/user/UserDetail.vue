<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>
      <router-link class="btn btn-primary"
      :to="{name:'userEdit',params:{id:$route.params.id},query:{name:'gokhan',lastName:'kndr'}}"
      >
Kullanıcıyı düzenle
      </router-link>
    </p>
   
  </div>
</template>
<script>
  export default {}
</script>
