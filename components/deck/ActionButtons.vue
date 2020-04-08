<template>
  <div class="deck-page__actions">
    <div class="actions">
      <div class="actions__item actions__start-game">
        <button class="actions__button">
          <nuxt-link class="actions__text" to="/lobby/">Начать игру</nuxt-link>
        </button>
      </div>
      <div class="actions__item actions__change-leader" @click="openLeadersPopup">
        <button class="actions__button">Х</button>
        <span class="actions__text">Сменить лидера</span>
      </div>
      <div class="field-size actions__item">
        <i class="fas fa-sort-circle field-size__icon"></i>
        <span class="actions__text">Масштаб</span>
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
    margin-top: 20px;
    color: #716556;
  }

  .actions__item {
    margin-right: 20px;
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
    cursor: url(/cursors/TheWitcher3MousePointer.cur), default;
  }

  .actions__start-game {
    .actions__button {
      width: 120px;
      font-size: 16px;
    }
  }

  .actions__text {
    color: #b18b48;
    cursor: url(/cursors/TheWitcher3MousePointer.cur), default;
  }

  .field-size__icon {
    color: #655940;
    font-size: 30px;
    margin-right: 5px;
  }

</style>
