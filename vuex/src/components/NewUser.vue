<template>
  <button @click="updateName">Yeni item ekle</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    updateName() {
      //  yeni bir veri eklendiğinde state içindeki veri getters içine get edilir ve ilgili filtreye tabi tutulur.

      //mutations içerisindeki metoda erişmek için commit yazılır.
      //ilk değişken mutation metodunun adı, ikinci değişken ise gönderilecek veri
    //   this.$store.commit("newItem", {
    //     id: new Date().getTime(),
    //     title: "Raf" + new Date().getSeconds(),
    //     type: "mobilya",
    //   });

      //   this.$store.state.itemList.push({
      //     id: new Date().getTime(),
      //     title: "Raf" + new Date().getSeconds(),
      //     type: "mobilya",
      //   });

//actions'lar dispatch edilir.
      this.$store.dispatch("newItem",{
        id: new Date().getTime(),
        title: "Raf" + new Date().getSeconds(),
        type: "mobilya",
      })
    },
  },
  computed: {
    ...mapGetters(["woodItems"]),
  },
};
</script>
