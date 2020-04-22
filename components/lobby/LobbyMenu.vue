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
  border-radius: 5px;
  display: flex;
  a {
    color: $buttonText;
    transition: color .2s ease-in-out;
    &:hover {
      color: $buttonTextHover;
    }
  }
  .lobby-menu__item {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: $button;
    transition: box-shadow .2s ease-in-out;
    color: $buttonText;
    border: 1px solid $button;
    border-radius: 5px;
    box-shadow: $customShadow;
    padding: 0 10px;
    width: 100px;
    font-size: 16px;
    margin-left: 10px;
  }
}
</style>
