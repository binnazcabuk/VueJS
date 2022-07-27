<template>
  <div>
    <p>User Component</p>
    <!-- method bir değişken alıyor. İsmi method içinde gönder -->
    <button @click="getUser(userName)">Send Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "Ali",
    };
  },
  //getUser ismiyle bana bir method gelecek
  props: {
    getUser: Function,
  },
};
</script>
