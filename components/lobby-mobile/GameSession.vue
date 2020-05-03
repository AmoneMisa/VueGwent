<template>
    <div class="game-session game-session_mobile">
      <div class="game-session__game-name game-session__game-name_mobile">{{gameSession.title}}</div>
      <div class="game-session__users-info">
        <div class="game-session__user-deck_mobile">{{fraction1.name}}</div>
        <div class="game-session__avatar game-session__avatar_mobile">
          <img src="/imgs/lobby/opponent.png"
               class="game-session__avatar-img_mobile">
        </div>
        <div class="game-session__inner-text game-session__inner-text_mobile">VS</div>
        <div class="game-session__avatar game-session__avatar_mobile">
          <img src="/imgs/lobby/your_turn.png"
               class="game-session__avatar-img_mobile">
        </div>
        <div class="game-session__user-deck_mobile">{{fraction2.name}}</div>
      </div>
      <div class="game-session__rate game-session__rate_mobile">10</div>
      <div class="game-session__action game-session__action_mobile">
        <custom-button class="button_mobile button_mobile_middle">{{ button_text }}</custom-button>
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

</style>
