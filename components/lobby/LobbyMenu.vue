<template>
    <div class="lobby-menu">
      <div class="lobby-menu__item">
        <nuxt-link to="/lobby/tours/">Турниры</nuxt-link>
      </div>
      <div class="lobby-menu__item">
        <nuxt-link to="/lobby/chat/">Чат</nuxt-link>
      </div>
      <div class="lobby-menu__item">
        <nuxt-link to="/lobby/shop/">Магазин</nuxt-link>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  @import "assets/variables";

.lobby-menu {
  position: absolute;
  left: -160px;
  border-radius: 5px;
  border: 1px solid $borderDeck;
  padding: 10px 20px;
  a {
    color: $buttonText;
    transition: color .2s ease-in-out;
    &:hover {
      color: $buttonTextHover;
    }
  }
  .lobby-menu__item {
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: $button;
    width: 100px;
    text-align: center;
  }
}
</style>
