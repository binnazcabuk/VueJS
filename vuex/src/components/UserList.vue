<template>

<!-- getters içerisindeki veriyi ekrana yazma -->
<ul>
      <li v-for="(item, index) in woodItems" :key="index">
        {{ item.title }}
      </li>
    </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  //mapGetters ile getters içerisinde tanımlanan veriye erişilebilir. $store.getters yazmadan direkt değişken adını yazarak değere ulaşılır.
  computed: {
    ...mapGetters(["woodItems"]),  
  },
  //Kendimiz farklı computed'lar eklemeyeceksek bu şekilde tanımlayabilirz.
  //computed:mapGetters(["woodItems","activeUser"])
};
</script>
