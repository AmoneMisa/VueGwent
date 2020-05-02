<template>
  <div class="last-games-board">
    <div class="last-games__title">Статистика последних 20 игр</div>
    <div class="last-games last-games_full">
    <last-game :full="full" v-for="i in 20" :key="i" />
    </div>
  </div>

</template>

<script>
import LastGame from "./LastGame";

export default {
  components: {LastGame},
  data() {
    return {
      full: true
    }
  }
}
</script>

<style lang="scss">
  .last-games_full {
    display: block;
  }
</style>
