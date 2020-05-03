<template>
  <div class="lobby-menu">
    <div class="lobby-menu__item">
      <custom-button type="button" class="button_middle">
        <nuxt-link to="/lobby/tours/">Турниры</nuxt-link>
      </custom-button>
    </div>
    <div class="lobby-menu__item">
      <custom-button type="button" class="button_middle">
        <nuxt-link to="/lobby/chat/">Чат</nuxt-link>
      </custom-button>
    </div>
    <div class="lobby-menu__item">
      <custom-button type="button" class="button_middle">
        <nuxt-link to="/lobby/shop/">Магазин</nuxt-link>
      </custom-button>
    </div>
  </div>
</template>

<script>
  import Button from "../Button";

  export default {
    components: {'custom-button': Button}
  }
</script>

<style lang="scss">

  .lobby-menu {
    border-radius: 5px;
    display: flex;
  }

  .lobby-menu__item {
    margin-left: 5px;
  }
</style>
