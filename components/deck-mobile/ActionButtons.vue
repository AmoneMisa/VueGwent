<template>
  <div class="deck-page__actions">
    <div class="actions">
      <div class="actions__item actions__start-game">
        <button class="actions__button">
          <nuxt-link class="actions__text" to="/lobby/">Начать игру</nuxt-link>
        </button>
      </div>
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

<style lang="scss">

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    color: #716556;
  }

  .actions__item {
    margin-right: 30px;
  }

  .actions__button {
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

  .actions__start-game {
    .actions__button {
      width: 100px;
      font-size: 14px;
    }
  }

  .actions__text {
    color: #b18b48;
  }

  .field-size__icon {
    color: #655940;
    font-size: 30px;
    margin-right: 5px;
  }

</style>
