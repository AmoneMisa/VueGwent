<template>
  <div class="leader__popup-container">
    <div class="popup-container">
      <div class="popup-container__wrapper">
        <div class="popup-container__title">Выбери лидера</div>
        <div class="popup-container__cards">
          <div class="cards">
            <div class="cards__item_hidden"></div>
            <div class="cards__item_hidden"></div>
          </div>
        </div>
        <div class="popup-container__description">
          <div class="description">
            <div class="popup-container__text">Умение лидера</div>
            <div class="popup-container__skill">Фольтест топ. ТОП!</div>
          </div>
        </div>
        <button class="popup-container__button" @click="closeLeadersPopup">
          <span class="button__text">[Esc]</span>Закрыть
          <i class="fal fa-window-close button__close"></i>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      methods: {
        closeLeadersPopup() {
          this.$store.dispatch('deck_page/closeLeadersPopup')
        }
      }
    }
</script>

<style lang="scss">
  @import "assets/variables";

  .leader__popup-container {
    position: absolute;
    z-index: 1;
    width: 98vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    border: none;
    overflow: hidden;
    top: -60px;
  }
    .popup-container__wrapper {
      width: 1200px;
      height: 60vh;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
    }
    .popup-container__title {
      background-color: rgba(0, 0, 0, 1);
      color: #bc8e46;
      text-align: center;
      font-size: 24px;
      padding-bottom: 40px;
      border-radius: 10px;
    }
    .popup-container__cards {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 1450px;
      position: relative;
      transition: transform .2s ease-in-out;
      padding: 20px 0;
      height: 275px;
    }
    .cards__item_neighbor-left {
      height: 245px;
      .leader__card {
        width: 125px;
        height: 245px;
      }
    }
    .cards__item_neighbor-right {
      height: 245px;
      .leader__card {
        width: 125px;
        height: 245px;
      }
    }
    .cards__item_current {
      position: relative;
      border-radius: 10px;
      height: 275px;
      box-shadow: 0 0 15px 5px rgba(239, 163, 38, 0.56);

      .leader__img {
        width: 145px;
        height: 275px;
      }
    }
    .cards__item_hidden {
      pointer-events: none;
      width: 117px;
      height: 220px;
    }

  .popup-container__description {
    background-color: rgba(0, 0, 0, 1);
    color: #bc8e46;
    text-align: center;
    padding: 50px 0;
    border-radius: 10px;
  }
  .popup-container__skill {
    color: #675e4c;
  }
  .popup-container__button {
    display: block;
    width: 140px;
    text-align: center;
    line-height: 40px;
    margin: 20px;
    color: #bc8e46;
    background-color: #171918;
    border: 2px solid #171918;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .button__text {
    color: #a19e8e;
    margin-right: 5px;
  }
  .button__close {
    border: 2px solid #675E4C;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.9);
    background-color: #675e4c;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    color: #1c1616;
    margin-left: 5px;
  }

</style>
