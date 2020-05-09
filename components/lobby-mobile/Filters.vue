<template>
  <div class="game-list__filters game-list__filters_mobile">
    <div class="game-list__filter game-list__filter_mobile">
      <label for="game-name" class="filter-name filter-name_mobile">Название игры:
        <input class="game-list__field game-list__field_mobile" id="game-name" v-model="gameName">
      </label>
    </div>
    <div class="game-list__filter game-list__filter_mobile">
      <label for="deck-name" class="filter-name filter-name_mobile">Колода:
        <input class="game-list__field game-list__field_mobile" id="deck-name" v-model="deckName">
      </label>
    </div>
    <div class="game-list__filter game-list__filter_mobile">
      <label for="rate-count" class="filter-name filter-name_mobile">Ставка:
        <input class="game-list__field game-list__field_mobile" id="rate-count" v-model="rateCount">
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


</style>
