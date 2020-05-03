<template>
  <div class="lobby__user-place lobby__user-place_mobile">
    <div class="user-place">
      <div class="user-place__avatar">
        <div class="user-place__avatar-img user-place__avatar-img_mobile">
          <img src="/imgs/lobby/opponent.png" class="user-place__img">
        </div>
        <div class="user-place__avatar-text user-place__avatar-text_mobile">Мастер</div>
      </div>
      <div class="user-place__info">
        <div class="info info_mobile">
          <div class="info__item info__personal-rate">
            <div class="info__title info__title_mobile">{{ user.login }}</div>
            <div class="personal-rate">
              <div class="personal-rate__item">Место в еженедельном рейтинге:
                <span class="personal-rate__weekly">10000</span>
              </div>
              <div class="personal-rate__item">Место в общем рейтинге:
                <span class="personal-rate__top">2</span>
              </div>
            </div>
          </div>
          <div class="info__item info__deck">Текущая колода:
            <span class="info__deck-name"> [Королевства Севера]</span>
          </div>
        </div>
      </div>
      <div class="user-place__buttons user-place__buttons_mobile">
        <div class="user-place__little-buttons">
          <div class="little-buttons little-buttons_mobile">
            <div class="little-button__item">
              <custom-button class="button_mobile button_mobile_icon">
                <img src="/imgs/lobby/co_gwent_book.png" class="little-button__icon">
              </custom-button>
              <div class="button__description button__description_mobile">Данные</div>
            </div>
            <div class="little-button__item">
              <custom-button class="button_mobile button_mobile_icon">
                <img src="/imgs/lobby/achiev_gwint_master2.png" class="little-button__icon">
              </custom-button>
              <div class="button__description button__description_mobile">Рейтинг</div>
            </div>
          </div>
        </div>
        <div class="user-place__button">
          <custom-button class="button_mobile button_mobile_middle" type="button">Создать
            игру
          </custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "../Button";

  export default {
    props: ['user'],
    components: {
      'custom-button': Button
    }
  }
</script>

<style lang="scss">
  @import "assets/userPlace";
</style>
