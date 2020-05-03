<template>
  <div class="game-list">
    <media :query="{minWidth: 971}">
      <div class="media-wrapper">
        <filters/>
        <div class="game-list__game-sessions">
          <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom">
            <game-session button_text="Смотреть" v-for="(gameSession, i) in gameSessions" :key="i" :game-session="gameSession"/>
          </simplebar>
        </div>
      </div>
    </media>
    <media :query="{maxWidth: 970}">
      <div class="media-wrapper">
        <filters-mobile/>
        <div class="game-list__game-sessions game-list__items-games_mobile">
          <simplebar data-simplebar-auto-hide="false" class="simple-bar-custom-mobile">
            <game-session-mobile button_text="Смотреть" v-for="(gameSession, i) in gameSessions" :key="i" :game-session="gameSession"/>
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
  .simple-bar-custom {
    height: 600px;
  }

  .game-list__game-sessions {
    height: 600px;
    overflow: hidden;
  }

  .game-list__items-games_mobile {
    height: 350px;
  }

  .simple-bar-custom-mobile {
    height: 350px;
  }


</style>
