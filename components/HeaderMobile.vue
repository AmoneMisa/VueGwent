<template>
  <div class="header-mobile">
    <div class="wrapper-mobile header-mobile__wrapper">
      <div class="header-mobile__logo">
        <nuxt-link class="logo" to="/">Гвинт</nuxt-link>
      </div>
      <div class="header-mobile__menu">
        <div class="header-mobile__menu-title" @click="changeStateMenu">{{ menuText }}
          <div class="menu_mobile" v-if="isOpenMenu">
            <div class="menu__item_mobile">
              <nuxt-link to="/deck/">Колоды</nuxt-link>
            </div>
            <div class="menu__item_mobile">
              <nuxt-link to="/lobby/">Лобби</nuxt-link>
            </div>
            <div class="menu__item_mobile">
              <nuxt-link to="/game-field/">Игра</nuxt-link>
            </div>
            <div class="menu__item_mobile">
              <nuxt-link to="/rules/">Правила игры</nuxt-link>
            </div>
            <div class="menu__item_mobile"><a href="#">Связь с нами</a></div>
          </div>
        </div>
      </div>
      <div class="header-mobile__personal-area">
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
    data() {
      return {
        isOpenMenu: false,
        menuText: "Открыть меню"
      }
    },
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    },
    methods: {
      logout: async function () {
        await this.$axios.$post('/api/user/logout/');
        await this.$store.dispatch('user/logout');
        this.$nuxt.context.redirect('/');
      },

      changeStateMenu() {
        this.isOpenMenu = !this.isOpenMenu;
        if (this.menuText === 'Закрыть меню') {
          this.menuText = 'Открыть меню';
        } else {
          this.menuText = 'Закрыть меню';
        }
        return this.isOpenMenu, this.menuText;
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/variables";

  .header-mobile {
    background-color: #1e1c16;
  }

  .header-mobile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .header-mobile__logo {
    flex: none;
    margin-right: 45px;
  }

  .header-mobile__menu {
    flex: auto;
    position: relative;
  }

  .header-mobile__menu-title {
    color: #bc8e46;
    transition: color .3s ease-in-out;
  }

  .header-mobile__personal-area {
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

  .menu_mobile {
    display: flex;
    border: 1px solid;
    border-image: $customBorder;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: -25px;
    background-color: black;
    z-index: 5;
  }

  .menu__item_mobile {
    font-size: 16px;
    background-color: $button;
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;
    a {
      color: #bc8e46;
    }
  }

  @media (max-width: 750px) {
    .menu_mobile {
      height: 150px;
      width: 140px;
      top: 45px;
    }
    .menu__item_mobile {
      width: 120px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 751px) and (max-width: 950px) {
    .menu_mobile {
      height: 160px;
      width: 160px;
      top: 40px;
    }

    .menu__item_mobile {
      width: 140px;
      margin-top: 10px;
      margin-bottom: 0;
    }
  }
</style>
