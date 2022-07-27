<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- Koşul İfadeleri -->
  <h2 v-if="show">Göründü...</h2>
  <h2 v-else>27/07/2022</h2>
  <button @click="show = !show">Göster/Gizle</button>
  <br /><br />
  <input type="text" v-model="sayi" />
  <p v-if="sayi == null"></p>
  <p v-else-if="sayi > 10">sayi büyük 10'dan</p>
  <p v-else-if="sayi < 10">sayi küçük 10'dan</p>
  <p v-else>Sayı eşit 10</p>
  <!-- ----------v-show --------------------------- -->
  <br /><br />
  <button @click="textShow = !textShow">Metin Göster/Gizle</button>
  <p v-if="textShow">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, natus
    excepturi fugit quisquam repudiandae omnis voluptatum reprehenderit quaerat
    incidunt sed! Enim velit aliquid, tempora fugiat similique quis cumque
    temporibus! Eveniet.
  </p>
  <br /><br />
  <!------------- v-for -----------------------------  -->
<p><strong>İsimler:</strong></p>
<center>
<table >
  <tr v-for="person in persons" :key="person">
    <td >{{person.name}}</td>
  </tr>
</table>
</center>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      textShow: false,
      sayi: null,
      persons: [
        { name: "Gökhan", age: 30 },
        { name: "Ali", age: 25 },
        { name: "Ayşe", age: 18 },
      ],
      products:["Bilgisayar","Masa","Sandalye"]
    };
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
#cont{
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
</style>
