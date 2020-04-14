<template>
  <div class="deck-stats__statistic" v-if="info" >
    <div class="statistic">
      <div class="statistic__item statistic__all-cards">
        <div class="statistic__title">Карты в колоде:
          <span class="all-cards__count statistic__count">{{ info.count_cards }}</span>
        </div>
      </div>
      <div class="statistic__item statistic__fight-cards">
        <div class="statistic__title">Карты отрядов:
          <span class="fight-cards__count statistic__count">{{ info.count_creature_cards }}</span>
        </div>
      </div>
      <div class="statistic__item statistic__special-cards">
        <div class="statistic__title">Специальные карты:
          <span class="special-cards__count statistic__count">{{ info.count_special_cards }}</span>
        </div>
      </div>
      <div class="statistic__item statistic__power">
        <div class="statistic__title">Общая сила отрядов:
          <span class="power__count statistic__count">{{ info.total_power }}</span>
        </div>
      </div>
      <div class="statistic__item statistic__heroes">
        <div class="statistic__title">Герои:
          <span class="heroes__count statistic__count">{{ info.count_hero_cards }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info'],
  }
</script>

<style lang="scss">
  .statistic__item {
    text-align: center;
  }

  .statistic__title {
    margin-top: 10px;
    vertical-align: middle;
    color: #b0b0ae;
    font-size: 14px;
  }

  .statistic__count {
    color: #b18b48;
    font-size: 14px;
    vertical-align: bottom;
  }

</style>
