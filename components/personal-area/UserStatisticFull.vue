<template>
  <div class="last-games last-games_full">
    <div class="last-games__title">Статистика последних 20 игр</div>
    <div class="last-game">
      <span class="game-dame">20.02.2020</span>
      <span class="opponent__username">User1</span>
      <span class="opponent__fraction">[Nilfgaard]</span>
      : <span class="opponent__status status_fail">fail</span>
      - <span class="user__username">{{ user.login }}</span>
      <span class="user__fraction">[Skellige]</span>
      : <span class="user__status  status_win">win</span>
      <span class="game-time">0 ч. 38 мин.</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user: function () {
      return this.$store.state.user.data;
    }
  }
}
</script>

<style lang="scss">
  .last-games_full {
    display: block;
  }
</style>
