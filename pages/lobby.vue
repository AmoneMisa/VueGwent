<template>
  <div class="lobby">
    <div class="lobby__wrapper">
      <div class="lobby__user-place-wrapper" v-if="user">
        <media :query="{minWidth: 971}">
          <user-place :user="user"/>
        </media>
        <media :query="{maxWidth: 970}">
          <user-place-mobile :user="user"/>
        </media>
      </div>
      <div class="lobby__user-place" v-else>
        <div class="user-place_unlogin">
          <span class="user-place__text_unlogin">Пожалуйста,
            <nuxt-link to="/"> авторизируйтесь</nuxt-link>,
            чтобы иметь возможность играть и общаться в чате.
            Без авторизации Вы можете просматривать текущие игры,
            читать чат, просматривать магазин.</span>
        </div>
      </div>
      <div class="lobby__main-content-game">
        <div class="main-content-game">
          <div class="main-content-game__actions">
            <div class="main-content-game__titles">
              <div class="main-content-game__title"
                   @click="() => currentGameList = 'games'"
                   :class="{'main-content-game__title_current' : currentGameList === 'games'}">Список игр
              </div>
              <div class="main-content-game__title"
                   @click="() => currentGameList = 'current-games'"
                   :class="{'main-content-game__title_current' : currentGameList === 'current-games'}">Текущие игры
              </div>
            </div>
            <media :query="{minWidth: 971}">
              <lobby-menu/>
            </media>
            <media :query="{maxWidth: 970}">
              <lobby-menu-mobile/>
            </media>
          </div>
          <div class="main-content-game__current-game-list main-content-game__game-list">
            <game-list v-if="currentGameList === 'games'" :user="user"/>
            <current-game-list v-if="currentGameList === 'current-games'" :user="user"/>
          </div>
        </div>
      </div>
      <media :query="{minWidth: 971}">
        <chat/>
      </media>
      <media :query="{maxWidth: 970}">
        <chat-mobile/>
      </media>
    </div>
  </div>
</template>

<script>
  import Chat from "~/components/lobby/Chat";
  import UserPlace from "~/components/lobby/UserPlace";
  import GameList from "~/components/lobby/GameList";
  import CurrentGameList from "~/components/lobby/CurrentGameList";
  import LobbyMenu from "~/components/lobby/LobbyMenu";

  import ChatMobile from "~/components/lobby-mobile/Chat";
  import UserPlaceMobile from "~/components/lobby-mobile/UserPlace";
  import LobbyMenuMobile from "~/components/lobby-mobile/LobbyMenu";

  import Media from "vue-media"

  export default {
    components: {
      Chat, UserPlace, GameList, CurrentGameList, LobbyMenu, Media,
      ChatMobile, UserPlaceMobile, LobbyMenuMobile
    },
    head: {
      title: 'Лобби игры Гвинт'
    },
    data() {
      return {
        currentGameList: 'games'
      }
    },
    computed: {
      user() {
        return this.$store.state.user.data;
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/variables";

  .lobby {
    position: relative;
  }

  .user-place_unlogin {
      text-align: center;
    padding: 20px 0;
  }

  .user-place__text_unlogin {
    color: $defaultText;
    a {
      color: $title;
    }
  }

  .lobby__main-content-game {
    margin-top: 20px;
  }

  .main-content-game__actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .main-content-game__titles {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 18px;
  }

  .main-content-game__title {
    color: rgba(#b0b0ae, 0.5);
    background-color: rgba(#262020, 0.5);
    border: 1px solid rgba(#262020, 0.5);
    cursor: pointer;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset, 0 0 5px 2px rgba(#feaf5c, 0.3);
    }
  }

  .main-content-game__title_current {
    color: #c6c6c6;
    background-color: #262020;
    border: 1px solid #262020;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    }
  }

  @media (max-width: 970px) {
    .main-content-game__title {
      height: 30px;
      width: 110px;
      font-size: 16px;
    }

    .main-content-game__game-list {
      border-radius: 5px;
      border: 1px solid #0c0c0c;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
</style>
