<template>
    <div class="game-session">
      <div class="game-session__game-name">{{gameSession.title}}</div>
      <div class="game-session__users-info">
        <div class="game-session__user-deck">{{fraction1.name}}</div>
        <div class="game-session__avatar">
          <img src="/imgs/lobby/opponent.png"
               class="game-session__avatar-img">
        </div>
        <div class="game-session__inner-text">VS</div>
        <div class="game-session__avatar">
          <img src="/imgs/lobby/your_turn.png"
               class="game-session__avatar-img">
        </div>
        <div class="game-session__user-deck">{{fraction2.name}}</div>
      </div>
      <div class="game-session__rate">10</div>
      <div class="game-session__action">
        <custom-button class="button_middle">{{ button_text }}</custom-button>
      </div>
    </div>
</template>

<script>
  import Button from "../Button";

  export default {
    props: ['button_text', 'game-session'],
    components: {
      'custom-button': Button
    },
    computed: {
      fraction1() {
        return this.$store.getters['fraction/getByCode'](this.gameSession.player1.fractionCode);
      },
      fraction2() {
        return this.$store.getters['fraction/getByCode'](this.gameSession.player2.fractionCode);
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/gameSession";

</style>
