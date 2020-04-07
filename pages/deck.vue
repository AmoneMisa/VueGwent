<template>
  <div class="deck-page">
    <div class="deck-page__fractions">
      <fraction-slider :current-fraction-index="currentFractionIndex"
                       :set-current-fraction-index="(value) => this.currentFractionIndex = value"/>
    </div>
    <div class="deck-page__content">
      <div class="deck-page__fraction-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">Коллекция карт</div>
          <div class="cards-collection__current-filter">current-filter</div>
          <div class="cards-collection__filters">
            <filters />
          </div>
          <div class="cards-collection__cards">
            <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards">
              <deck-available-cards :fraction="currentFraction" v-if="user"/>
              <fraction-cards :fraction="currentFraction" v-else/>
            </simplebar>
          </div>
        </div>
      </div>
      <div class="deck-page__deck-stats">
        <info :fraction="currentFraction" v-if="user"/>
      </div>
      <div class="deck-page__deck-cards">
        <div class="cards-collection">
          <div class="cards-collection__title cards-collection__title-right">Карты колоды</div>
          <div class="cards-collection__current-filter cards-collection__current-filter-right">current-filter</div>
          <div class="cards-collection__filters">
            <filters />
          </div>
          <div class="cards-collection__cards">
            <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards">
              <deck-cards :fraction="currentFraction" v-if="user"/>
            </simplebar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FractionSlider from "~/components/deck/FractionSlider";
  import FractionCards from "~/components/deck/FractionCards";
  import DeckCards from "~/components/deck/DeckCards";
  import Filters from "~/components/deck/Filters";
  import Info from "~/components/deck/Info";
  import DeckAvailableCards from "~/components/deck/DeckAvailableCards";

  import Simplebar from 'simplebar-vue';


  export default {
    data() {
      return {
        currentFractionIndex: 0
      }
    },
    components: {
      DeckAvailableCards,
      DeckCards, FractionSlider, FractionCards, Filters, Simplebar, Info
    },
    head: {
      title: 'Колода'
    },
    computed: {
      fractions: function () {
        return this.$store.state.fraction.list;
      },
      currentFraction: function () {
        return this.fractions[this.currentFractionIndex];
      },
      user: function () {
        return this.$store.state.user.data;
      }
    }
  };
</script>
<style lang="scss">
  @import "~/assets/_variables";

  .deck-page__content {
    display: flex;
  }

  .deck-page__fractions {
    display: flex;
    justify-content: center;
  }

  .deck-page__fraction-cards,
  .deck-page__deck-cards {
    /*height: 660px;*/
    flex: 1;
    overflow: hidden;
    padding-left: 15px;
  }

  .deck-page__fraction-cards {
    border-right: 1px solid;
    border-image: linear-gradient(
        to bottom, rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1)) 1 100%;;
  }

  .deck-page__deck-stats {
    width: 280px;
    flex: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .cards-collection__cards {
    margin-top: 30px;
    overflow: hidden;
    height: 660px;
    padding-right: 15px;
  }

  .simple-bar-cards {
    height: 660px;
  }

  .main-content-game__game-list {
    border-radius: 5px;
    border: 1px solid #0c0c0c;
    padding: 10px;
    margin-bottom: 20px;
  }

  .cards-collection__title {
    text-transform: uppercase;
    font-size: 18px;
    color: #b0b0ae;
  }

  .cards-collection__current-filter {
    margin-top: 5px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: $title;
  }

  .cards-collection__title-right {
    text-align: right;
  }

  .cards-collection__current-filter-right {
    text-align: right;
  }
</style>

