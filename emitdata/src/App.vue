<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <!-- child componentten "customChange"isimli bir event gelecek geldiğinde ilgili method çalışsın -->
    <InputText @customChange="handleCustomChange"/>
     <p>Uppercase: {{ uppercase }}</p>
</template>

<script>
import InputText from './components/InputText.vue'


export default {
  name: 'App',
  components: {
    InputText
},
   data() {
      return {
        uppercase: ''
      }
    },
    methods: {
      //gelen veriyi al
        handleCustomChange (s) {
          this.uppercase = s
        }
    }
}
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
