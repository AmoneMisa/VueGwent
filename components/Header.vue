<template>
  <div class="header">
    <div class="wrapper header__wrapper">
      <div class="header__logo">
        <nuxt-link class="logo" to="/">Гвинт</nuxt-link>
      </div>
      <div class="header__menu">
        <div class="menu">
          <div class="menu__item"><nuxt-link to="/deck/">Колоды</nuxt-link></div>
          <div class="menu__item"><nuxt-link to="/lobby/">Лобби</nuxt-link></div>
          <div class="menu__item"><nuxt-link to="/game-field/">Игра</nuxt-link></div>
          <div class="menu__item"><a href="#">Правила игры</a></div>
          <div class="menu__item"><a href="#">Связь с нами</a></div>
          <div class="menu__item"><a href="#">Страница</a></div>
        </div>
      </div>
      <div class="header__personal-area">
        <div class="personal-area">
          <nuxt-link class="personal-area__avatar" to="/personal-area/" v-if="user">
            <img src="#" class="personal-area__avatar-img">
            <i class="fa fa-user personal-area__avatar-icon"></i>
          </nuxt-link>
          <div class="personal-area__content">
            <div class="personal-area__links" v-if="user">
              <nuxt-link class="personal-area__link" to="/personal-area/">{{ user.login }}</nuxt-link>
              <span class="personal-area__link" @click.prevent="logout">Выйти</span>
            </div>
            <div class="personal-area__links" v-else>
              <nuxt-link class="personal-area__link" to="/">Вход</nuxt-link>
              <nuxt-link class="personal-area__link" to="/register/">Регистрация</nuxt-link>
            </div>
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
        this.$nuxt.context.redirect('/');
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
    align-items: center;
    height: 50px;
  }

  .header__logo {
    margin-right: 40px;
    flex: none;
  }

  .header__menu {
    margin-right: 20px;
    flex: auto;
  }

  .header__personal-area {
    flex: none;
  }

  .logo {
    display: inline-block;
    vertical-align: top;
    font-size: 24px;
  }

  .logo__img {
    vertical-align: top;
  }

  .menu {
    display: flex;
  }

  .menu__item {
    font-size: 16px;
    margin-right: 20px;

    a {
      color: #bc8e46;
      transition: color .3s ease-in-out;

      &:hover {
        color: #886633;
      }
    }
  }

  .menu__item:first-child {
    margin-left: 0;
  }

  .personal-area {
    color: white;
    display: flex;
    align-items: center;
  }

  .personal-area__avatar {
    width: 32px;
    height: 32px;
    border-radius: 360px;
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .personal-area__avatar-icon {
    font-size: 14px;
    color: rgba(240, 165, 38, 0.6);
  }

  .personal-area__avatar-img {
    display: none;
  }

  .personal-area__content {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    flex: none;
  }

  .personal-area__links {
    display: flex;
  }

  .personal-area__link {
    margin-left: 10px;
    cursor: pointer;
  }

  .personal-area__actions {
    margin-top: 5px;
  }

  .personal-area__action {
    margin-right: 10px;
    cursor: pointer;

    a {
      transition: color .3s ease-in-out;

      &:hover {
        color: rgba(193, 102, 29, 0.5);
      }
    }
  }

  .personal-area__username {
    cursor: default;
  }

  .personal-area__user {
    font-size: 18px;
    color: rgba(193, 102, 29, 0.5);
  }
</style>
