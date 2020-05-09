<template>
  <div class="game-list__filters">
    <div class="game-list__filter">
      <label for="game-name">Поиск:
        <input class="game-list__field" id="game-name" v-model="gameName">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="deck-name">Колода:
        <input class="game-list__field" id="deck-name" v-model="deckName">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="rate-count">Ставка:
        <input class="game-list__field" id="rate-count" v-model="rateCount">
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gameName: '',
        deckName: '',
        rateCount: ''
      }
    },
  }
</script>

<style lang="scss">
@import "assets/lobbyFilters";

</style>
