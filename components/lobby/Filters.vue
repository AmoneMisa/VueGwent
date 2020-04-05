<template>
  <div class="game-list__filters">
    <div class="game-list__filter">
      <label for="game-name">Название игры:
        <input class="game-list__field" id="game-name">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="deck-name">Колода:
        <input class="game-list__field" id="deck-name">
      </label>
    </div>
    <div class="game-list__filter">
      <label for="rate-count">Ставка:
        <input class="game-list__field" id="rate-count">
      </label>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">

  .game-list__filters {
    display: flex;
    justify-content: space-evenly;
    margin: 15px auto 20px;
    color: #b18b48;
    font-size: 16px;
  }

  .game-list__field {
    width: 200px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 10px;
    background-color: rgba(#262020, 0.5);
    border: 1px solid rgba(#262020, 0.5);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    color: #a5a195;
  }
</style>
