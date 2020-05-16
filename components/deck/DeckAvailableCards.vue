<template>
  <div class="media-wrapper">
    <media :query="{minWidth: 971}">
      <cards-list v-if="cards" :cards="cards" @card-click="cardClick"/>
    </media>
    <media :query="{maxWidth: 970}">
      <cards-list-mobile v-if="cards" :cards="cards" @card-click="cardClick"/>
    </media>
  </div>

</template>

<script>
  import CardsList from "./CardsList";
  import CardsListMobile from "~/components/deck-mobile/CardsList";
  import Media from "vue-media";

  export default {
    components: {CardsList, CardsListMobile, Media},
    props: ['fraction', 'filter'],
    async serverPrefetch() {
      if (!this.fraction) {
        return;
      }

      await Promise.all([
        this.$store.dispatch('user/deck/fetchAvailableCards', {fractionCode: this.fraction.code, filter: this.filter}),
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
        this.$store.dispatch('user/deck/fetchAvailableCards', {fractionCode: this.fraction.code, filter: this.filter}),
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
          this.$store.dispatch('user/deck/fetchAvailableCards', {fractionCode: fraction.code, filter: this.filter}),
          this.$store.dispatch('user/deck/fetchInfo', fraction.code)
        ]);
      },
      async filter(filter) {
        await Promise.all([
          this.$store.dispatch('user/deck/fetchAvailableCards', {fractionCode: this.fraction.code, filter: filter}),
        ]);
      }
    }
  }
</script>

<style scoped>

</style>
