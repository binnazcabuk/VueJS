<template>
  <component :is="activeComponent">

  </component>
</template>
<script>
import Card from "./components/Card.vue";
import Celebrate from "./components/Celebrate.vue";
import DefaultCard from "./components/DefaultCard.vue";
import Failure from "./components/Failure.vue";
import GameCards from "./components/GameCards.vue";
export default {
  data() {
    return{
      activeComponent: "GameCards"
    }

  },
  components: {
    Card,
    Celebrate,
    DefaultCard,
    Failure,
    GameCards,
  },
};
</script>
<style>
body{
       font-family: sans-serif;
}
</style>
