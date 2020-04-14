<template>
  <div class="fraction-cards__filters filters">
    <div class="filter" :class="{'filter_current' : false, 'filter_current' : currentFilter === 'filter-all'}"
         @click="() => this.$emit('set-current-filter', 'filter-all')">
      Все карты
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-warrior'}"
         @click="() => this.$emit('set-current-filter', 'filter-warrior')">
      Рукопашные отряды
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-archer'}"
         @click="() => this.$emit('set-current-filter','filter-archer')">
      Дальнобойные отряды
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-siege'}"
         @click="() => this.$emit('set-current-filter', 'filter-siege')">
      Осадные отряды
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-hero'}"
         @click="() => this.$emit('set-current-filter', 'filter-hero')">
      Герои
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-weather'}"
         @click="() => this.$emit('set-current-filter', 'filter-weather')">
      Погодные карты
    </div>
    <div class="filter" :class="{filter_current : false, 'filter_current' : currentFilter ==='filter-action'}"
         @click="() => this.$emit('set-current-filter', 'filter-action')">
      Специальные карты
    </div>
  </div>
</template>

<script>

  export default {
    props: ['currentFilter']
  }
</script>

<style lang="scss">
  @import "~/assets/_variables";

  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-image: $customBorder;
    width: 220px;
    background-color: black;
    z-index: 10;
    position: absolute;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
    left: 0;
    top: 40px;
    overflow: hidden;
  }

  .filter {
    color: $buttonDarkText;
    width: 200px;
    margin-bottom: 10px;
    padding: 0 10px;
    height: auto;
    background-color: $buttonDark;
    border-radius: 10px;
    text-align: center;
  }

</style>
