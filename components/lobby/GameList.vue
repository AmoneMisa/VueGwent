<template>
  <div class="game-list">
    <media :query="{minWidth: 971}">
      <div class="media-wrapper">
        <filters/>
        <div class="game-list__game-sessions">
          <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom">
            <div class="game-sessions__list">
              <game-session button_text="Играть" :game-session="gameSession"
                           v-for="(gameSession, i) in gameSessions" :key="i"/>
            </div>
          </simplebar>
        </div>
      </div>
    </media>
    <media :query="{maxWidth: 970}">
      <div class="media-wrapper">
        <filters-mobile/>
        <div class="game-list__game-sessions">
          <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom_mobile">
            <div class="game-sessions__list_mobile">
              <game-session-mobile button_text="Играть" :game-session="gameSession"
                                  v-for="(gameSession, i) in gameSessions"
                                  :key="i"/>
            </div>
          </simplebar>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
  import Filters from "./Filters";
  import Simplebar from 'simplebar-vue';
  import GameSession from "./GameSession";
  import GameSessionMobile from "~/components/lobby-mobile/GameSession";
  import FiltersMobile from "~/components/lobby-mobile/Filters";

  import Media from "vue-media";

  export default {
    props: ['currentGameList', 'user'],
    components: {Filters, Simplebar, GameSession, GameSessionMobile, Media, FiltersMobile},
    async serverPrefetch() {
      await Promise.all([
        this.$store.dispatch('lobby/fetchGameSessions')
      ]);
    },
    async mounted() {
      if (this.gameSessions) {
        return;
      }

      await Promise.all([
        this.$store.dispatch('lobby/fetchGameSessions')
      ]);
    },
    computed: {
      gameSessions() {
        return this.$store.state.lobby.gameSessions;
      }
    }
  }
</script>

<style lang="scss">
  .game-list__game-sessions {
    height: 470px;
    padding-right: 20px;
  }

  .game-list__game-sessions_mobile {
    height: calc(100vh / 4);
    padding-right: 20px;
  }


  .simple-bar-custom {
    height: 470px;
  }

  .game-sessions__list {
    height: 470px;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }

  .game-sessions__list_mobile {
    height: calc(100% / 5);
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }

  .simple-bar-custom_mobile {
    height: calc(100% / 5);
  }
</style>
