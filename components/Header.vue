<template>
  <div class="header">
    <div class="wrapper header__wrapper">
      <div class="header__logo">
        <a href="/index.html">
          <img src="/imgs/logo/logo.png">
        </a>
      </div>
      <div class="header__menu">
        <div class="menu__item"><a href="/pages/card-decks/index.html">Колоды</a></div>
        <div class="menu__item">Лобби</div>
        <div class="menu__item"><a href="/pages/game-field/index.html">Игра</a></div>
        <div class="menu__item">Правила игры</div>
        <div class="menu__item">Связь с нами</div>
      </div>
      <div class="personal-area">
        <div class="personal-area__img">
          <img src="#" class="personal-area__user-logo">
          <i class="fa fa-user-plus personal-area__icon"></i>
        </div>
        <div class="personal-area__text">
          <div class="personal-area__username">Здравствуй,
            <span class="personal-area__user" v-if="user">{{ user.login }}</span>
            <span class="personal-area__user" v-else>Гость</span>
          </div>
          <div class="personal-area__actions" v-if="user">
            <span class="personal-area__enter text__item personal-area__action"><a href="/pages/personal-area/index.html">Личный кабинет</a></span>
            <span class="personal-area__exit text__item personal-area__action" @click="logout">Выйти</span>
          </div>
          <div class="personal-area__actions" v-else>
            <span class="personal-area__exit text__item personal-area__action"><a href="./index.html">Войти</a></span>
            <span class="personal-area__registration text__item personal-area__action"><a href="./index.html">Зарегистрироваться</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    },
    methods: {
      logout: async function () {
        await this.$axios.$post('/api/logout/');
        await this.$store.dispatch('user/logout');
      }
    }
  }
</script>

<style lang="scss">
  .header {
    background-color: #1e1c16;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    position: sticky;
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .header__logo {
    width: 200px;
    padding: 0 20px;
  }

  .header__menu {
    display: flex;
    margin: 30px 20px;
    justify-content: space-between;
  }

  .menu__item {
    color: rgba(240, 165, 38, 0.6);
    font-size: 16px;
    margin-left: 20px;
    cursor: pointer;
    transition: color .3s ease-in-out;

    a {
      color: rgba(240, 165, 38, 0.6);
      transition: color .3s ease-in-out;
    }
  }

  .menu__item:first-child {
    margin-left: 0;
  }

  .personal-area {
    color: white;
    display: flex;
    width: 300px;
    flex: none;
    justify-content: space-evenly;
    border-left: 2px solid #8b7f67;
  }

  .personal-area__img {
    width: 50px;
    height: 50px;
    border-radius: 360px;
    background-color: white;
    margin-top: 20px;
    text-align: center;
  }

  .personal-area__icon {
    font-size: 26px;
    color: rgba(240, 165, 38, 0.6);
    margin-top: 10px;
  }

  .personal-area__text {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    margin-left: 10px;
    flex: none;
  }

  .personal-area__actions {
    margin-top: 5px;
  }

  .personal-area__action {
    margin-left: 10px;
    cursor: pointer;

    a {
      transition: color .3s ease-in-out;
    }
  }

  .personal-area__action:first-child {
    margin-left: 0;
  }

  .personal-area__username {
    cursor: default;
  }

  .personal-area__user {
    font-size: 18px;
    color: rgba(193, 102, 29, 0.5);
  }

  .personal-area__action:hover a,
  .menu__item:hover a {
    color: rgba(193, 102, 29, 0.5);
  }

  .personal-area__text_login {
    display: none;
  }

  .personal-area__user-logo {
    display: none;
  }
</style>
