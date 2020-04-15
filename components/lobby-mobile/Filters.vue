<template>
  <div class="game-list__filters">
    <div class="game-list__filter">
      <label for="game-name" class="filter-name">Название игры:
        <input class="game-list__field" id="game-name" v-model="gameName">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="deck-name" class="filter-name">Колода:
        <input class="game-list__field" id="deck-name" v-model="deckName">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="rate-count" class="filter-name">Ставка:
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

<style lang="scss" scoped>

  .game-list__filters {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0;
    color: #b18b48;
    font-size: 16px;
  }
  .game-list__filter {
    width: 195px;
    margin-right: 5px;
  }
  .filter-name {
    font-size: 14px;
  }
  .game-list__field {
    margin-left: 0;
    width: 195px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(#262020, 0.5);
    border: 1px solid rgba(#262020, 0.5);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    color: #a5a195;
  }
</style>
