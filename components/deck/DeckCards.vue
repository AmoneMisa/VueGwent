<template>
  <cards-list v-if="cards" :cards="cards"  @card-click="cardClick"/>
</template>

<script>
  import CardsList from "./CardsList";
  export default {
    components: {CardsList},
    props: ['fraction'],
    async updated() {
      if (this.cards) {
        return;
      }

      await this.$store.dispatch('user/deck/fetchCards', this.fraction.code);
    },
    async serverPrefetch() {
      if (!this.fraction) {
        return;
      }

      await this.$store.dispatch('user/deck/fetchCards', this.fraction.code);
    },
    computed: {
      cards() {
        if (!this.fraction) {
          return null;
        }

        return this.$store.state.user.deck.cards[this.fraction.code];
      }
    },
    methods: {
      async cardClick(card) {
        await this.$axios.$delete('/api/user/deck/' + this.fraction.code + '/card/' + card.code + '/');
        await this.$store.dispatch('user/deck/fetchCards', this.fraction.code);
      }
    }
  }
</script>

<style scoped>

</style>
