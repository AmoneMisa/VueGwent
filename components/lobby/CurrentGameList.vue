<template>
  <div class="game-list current-games">
    <filters/>
    <div class="game-list__items-games">
      <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom">
        <items-games button-text="Смотреть" />
      </simplebar>
    </div>
  </div>
</template>

<script>

  import Filters from "./Filters";
  import Simplebar from 'simplebar-vue';
  import ItemsGames from "./ItemsGames";

  export default {
    components: {Filters, Simplebar, ItemsGames}
  }
</script>

<style lang="scss">

</style>
