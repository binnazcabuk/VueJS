<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr />
    <div
      class="d-flex flex-wrap flex-row justify-content-center align-items-center"
    >
      <div class="card m-1" v-for="post in list" :key="post">
        <img
          class="card-img-top"
          :src="post.thumbnail"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">
           {{post.previewText}}
          </p>
        </div>
      </div>   
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      list:[]
    }
  },
  created() {
    axios
      .get("/posts.json")
      .then((response) => {
        let data=response.data;
        for(let key in data){
          this.list.push({...data[key],id:key})
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style>
.card {
  width: 300px;
}
</style>
