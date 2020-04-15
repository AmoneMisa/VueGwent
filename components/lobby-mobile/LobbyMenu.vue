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

<style lang="scss" scoped>
  @import "assets/variables";

.lobby-menu {
  position: absolute;
  left: 0;
  top: -40px;
  display: flex;
  border: none;
  padding: 0;
  a {
    color: $buttonText;
  }
  .lobby-menu__item {
    color: #a5a195;
    font-size: 14px;
    background-color: #1d1d18;
    cursor: pointer;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    border: 1px solid #1d1d18;
  }
}
</style>
