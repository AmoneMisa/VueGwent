<template>
  <div class="deck-page">
    <div class="deck-page__fractions">
      <fraction-slider />
    </div>
    <div class="deck-page__content">
      <div class="deck-page__fraction-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">title</div>
          <div class="cards-collection__current-filter">current-filter</div>
          <div class="cards-collection__filters">filters</div>
          <div class="cards-collection__cards">cards</div>
        </div>
      </div>
      <div class="deck-page__deck-stats">
        stats
      </div>
      <div class="deck-page__deck-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">title</div>
          <div class="cards-collection__current-filter">current-filter</div>
          <div class="cards-collection__filters">filters</div>
          <div class="cards-collection__cards">cards</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FractionSlider from "../components/deck/FractionSlider";

  export default {
    components: {FractionSlider},
    head: {
      title: 'Колода'
    }
  }
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
    height: 660px;
    flex: auto;
  }

  .deck-page__deck-stats {
    width: 280px;
    flex: none;
  }
</style>

