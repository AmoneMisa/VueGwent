<template>
  <cards-list v-if="cards" :cards="cards" @card-click="cardClick"/>
</template>

<script>
  import CardsList from "./CardsList";

  export default {
    components: {CardsList},
    props: ['fraction'],
    async serverPrefetch() {
      if (!this.fraction) {
        return;
      }

      await Promise.all([
        this.$store.dispatch('user/deck/fetchAvailableCards', this.fraction.code),
        this.$store.dispatch('user/deck/fetchInfo', this.fraction.code)
      ]);
    },
    async mounted() {
      if (!this.fraction) {
        return;
      }

      if (this.cards) {
        return;
      }

      await Promise.all([
        this.$store.dispatch('user/deck/fetchAvailableCards', this.fraction.code),
        this.$store.dispatch('user/deck/fetchInfo', this.fraction.code)
      ]);
    },
    computed: {
      cards() {
        if (!this.fraction) {
          return null;
        }

        return this.$store.state.user.deck.available_cards[this.fraction.code];
      }
    },
    methods: {
      async cardClick(card) {
        await this.$store.dispatch('user/deck/addCard', {fractionCode: this.fraction.code, card});
        await this.$store.dispatch('user/deck/fetchInfo', this.fraction.code);
      }
    },
    watch: {
      async fraction(fraction) {
        await Promise.all([
          this.$store.dispatch('user/deck/fetchAvailableCards', fraction.code),
          this.$store.dispatch('user/deck/fetchInfo', fraction.code)
        ]);
      }
    }
  }
</script>

<style scoped>

</style>
