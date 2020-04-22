<template>
  <div class="lobby__user-place">
    <div class="user-place">
      <div class="user-place__avatar">
        <div class="user-place__avatar-img">
          <img src="/imgs/lobby/opponent.png" class="user-place__img">
        </div>
        <div class="user-place__avatar-text">Мастер</div>
      </div>
      <div class="user-place__info">
        <div class="info">
          <div class="info__item info__personal-rate">
            <div class="info__title">Пользователь</div>
            <div class="personal-rate">
              <div class="personal-rate__item">Место в еженедельном рейтинге:
                <span class="personal-rate__weekly">10000</span>
              </div>
              <div class="personal-rate__item">Место в общем рейтинге:
                <span class="personal-rate__top">2</span>
              </div>
            </div>
          </div>
          <div class="info__item info__art">
            <div class="info__art-filter"></div>
            <img class="info__img" src="/imgs/lobby/5acfc9ff34db7.png">
          </div>
          <div class="info__item info__deck">Текущая колода:
            <div class="info__deck-name">[Королевства Севера]</div>
          </div>
        </div>
      </div>
      <div class="user-place__buttons">
        <div class="user-place__little-buttons">
          <div class="little-buttons">
            <div class="little-button__item">
              <custom-button class="button_little">
                <img src="/imgs/lobby/co_gwent_book.png" class="little-button__icon">
              </custom-button>
              <div class="button__description">Данные</div>
            </div>
            <div class="little-button__item">
              <custom-button class="button_little">
                <img src="/imgs/lobby/achiev_gwint_master2.png" class="little-button__icon">
              </custom-button>
              <div class="button__description">Рейтинг</div>
            </div>
          </div>
        </div>
        <div class="user-place__button">
          <custom-button>Создать игру</custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "../Button";

  export default {
    components: {
      'custom-button': Button,
    }
  }
</script>

<style lang="scss">
  .lobby__user-place {
    border: 1px solid #0c0c0c;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  .user-place {
    display: flex;
    justify-content: space-between;
  }

  .user-place__avatar {
    flex: none;
    border: 1px solid;
    border-image: linear-gradient(
        to bottom, rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1))
    1 100%;;
    margin-right: 20px;
  }

  .user-place__avatar-img {
    width: 100px;
    height: 100px;
  }

  .user-place__img {
    max-width: 100%;
    max-height: 100%;
  }

  .user-place__avatar-text {
    width: 100px;
    color: #b18b48;
    font-size: 16px;
    margin-top: 5px;
    text-align: center;
  }

  .user-place__info {
    flex: auto;
    margin-right: 20px;
    border-right: 1px solid;
    border-image: linear-gradient(
        to bottom, rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1))
    1 100%;
    padding-right: 20px;
  }


  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info__title {
    color: #c6c6c6;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .info__item {
    margin-bottom: 5px;
    flex: none;
  }

  .personal-rate__item {
    font-size: 14px;
    color: #716556;
  }

  .personal-rate__weekly,
  .personal-rate__top {
    color: #c6c6c6;
    font-size: 16px;
  }

  .info__art {
    height: 150px;
    width: 300px;
    margin: 0 10px;
    position: relative;
    border-radius: 5px;
  }

  .info__art-filter {
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.9) inset;
    height: 150px;
    width: 300px;
    position: absolute;
  }

  .info__img {
    width: 100%;
    height: 100%;
  }

  .info__deck {
    font-size: 14px;
    color: #716556;
  }

  .info__deck-name {
    color: #b0b0ae;
    margin-top: 5px;
    font-size: 16px;
  }

  .user-place__buttons{
    flex: none;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .little-buttons {
    display: flex;
    width: 155px;
    justify-content: space-between;
  }

  .little-button__item {
    margin-bottom: 5px;
  }

  .little-button__icon {
    color: #b18b48;
    font-size: 24px;
    height: 100%;
    width: 100%;
  }

  .button__description {
    font-size: 16px;
    text-align: center;
    color: #716556;
  }

</style>
