<template>
  <div class="media-wrapper">
    <media :query="{minWidth: 971}">
      <cards-list v-if="cards" :cards="cards"/>
    </media>
    <media :query="{maxWidth: 970}">
      <cards-list-mobile v-if="cards" :cards="cards"/>
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

      await this.$store.dispatch('fraction/fetchCards', {fractionCode: this.fraction.code, filter: this.filter});
    },
    async mounted() {
      if (!this.fraction) {
        return;
      }

      if (this.cards) {
        return;
      }

      await this.$store.dispatch('fraction/fetchCards', {fractionCode: this.fraction.code, filter: this.filter});
    },
    computed: {
      cards() {
        if (!this.fraction) {
          return null;
        }

        return this.$store.state.fraction.cards[this.fraction.code];
      }
    },
    watch: {
      async fraction(fraction) {
        await this.$store.dispatch('fraction/fetchCards', {fractionCode: fraction.code, filter: this.filter});
      },
      async filter(filter) {
        await this.$store.dispatch('fraction/fetchCards', {fractionCode: this.fraction.code, filter: filter});
      }
    }
  }
</script>

<style scoped>

</style>
