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
            <div class="info__title">{{ user.login }}</div>
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
          <custom-button type="button" @click="createGameSession">Создать игру</custom-button>
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
      'custom-button': Button,
    },
    methods: {
      createGameSession() {

      }
    }
  }
</script>

<style lang="scss">

</style>
