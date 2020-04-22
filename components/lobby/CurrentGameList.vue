<template>
  <div class="game-list">
    <media :query="{minWidth: 971}">
      <div class="media-wrapper">
    <filters/>
    <div class="game-list__items-games">
      <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom">
        <items-games button_text="Смотреть"/>
      </simplebar>
    </div>
      </div>
    </media>
    <media :query="{maxWidth: 970}">
      <div class="media-wrapper">
        <filters-mobile />
        <div class="game-list__items-games">
          <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom-mobile">
            <items-games-mobile button_text="Смотреть" />
          </simplebar>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
  import Filters from "./Filters";
  import Simplebar from 'simplebar-vue';
  import ItemsGames from "./ItemsGames";
  import ItemsGamesMobile from "~/components/lobby-mobile/ItemsGames";
  import FiltersMobile from "~/components/lobby-mobile/Filters";

  import Media from "vue-media";

  export default {
    props: ['currentGameList'],
    components: {Filters, Simplebar, ItemsGames, ItemsGamesMobile, Media, FiltersMobile}
  }
</script>

<style lang="scss">

</style>
