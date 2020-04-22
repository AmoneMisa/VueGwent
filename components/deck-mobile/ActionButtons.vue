<template>
  <div class="deck-page__actions">
    <div class="actions">
          <nuxt-link class="actions__text" to="/lobby/">Начать игру</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openLeadersPopup() {
        this.$store.dispatch('deck_page/openLeadersPopup');
      }
    }
  }
</script>

<style lang="scss" scoped>

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    color: #716556;
  }

  .actions__item {
    margin-right: 30px;
  }

  .actions__text {
    display: block;
    margin-right: 5px;
    background-color: #1d1d18;
    color: #a5a195;
    border: 1px solid #1d1d18;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0) inset;
    width: 30px;
    height: 30px;
    font-size: 20px;
  }

</style>
