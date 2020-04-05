<template>
  <div class="deck-page">
    <div class="deck-page__fractions">
      <fraction-slider :current-fraction-index="currentFractionIndex"
                       :set-current-fraction-index="(value) => this.currentFractionIndex = value"/>
    </div>
    <div class="deck-page__content">
      <div class="deck-page__fraction-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">title</div>
          <div class="cards-collection__current-filter">current-filter</div>
          <div class="cards-collection__filters">
            <filters/>
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
        <leaders />
        <stats />
      </div>
      <div class="deck-page__deck-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">title</div>
          <div class="cards-collection__current-filter">current-filter</div>
          <div class="cards-collection__filters">
            <filters/>
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
  import FractionSlider from "../components/deck/FractionSlider";
  import FractionCards from "../components/deck/FractionCards";
  import DeckCards from "../components/deck/DeckCards";
  import Filters from "../components/deck/Filters";
  import Stats from "../components/deck/Stats";
  import Leaders from "../components/deck/Leaders";
  import LeadersPopup from "../components/deck/LeadersPopup";

  import Simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';
  import DeckAvailableCards from "../components/deck/DeckAvailableCards";

  export default {
    data() {
      return {
        currentFractionIndex: 0
      }
    },
    components: {
      DeckAvailableCards,
      DeckCards, FractionSlider, FractionCards, Filters, Simplebar, Stats, LeadersPopup, Leaders},
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
<style>
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
    rgba(47, 37, 23, 0.1))
  1 100%;;
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

  .simplebar-vertical {
    background-color: #0b0b0b;
    width: 2px !important;
    overflow: visible;
  }

  .simplebar-scrollbar {
    width: 10px;
    background-color: #5e4e2d;
    left: -4px;
  }

  .simplebar-scrollbar:before {
    background: #5e4e2d !important;
  }

  .main-content-game__game-list {
    border-radius: 5px;
    border: 1px solid #0c0c0c;
    padding: 10px;
    margin-bottom: 20px;
  }
</style>

