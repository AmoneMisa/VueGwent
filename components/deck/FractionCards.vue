<template>
  <cards-list v-if="cards" :cards="cards"/>
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

      await this.$store.dispatch('fraction/fetchCards', this.fraction.code);
    },
    async serverPrefetch() {
      if (!this.fraction) {
        return;
      }

      await this.$store.dispatch('fraction/fetchCards', this.fraction.code);
    },
    computed: {
      cards() {
        if (!this.fraction) {
          return null;
        }

        return this.$store.state.fraction.cards[this.fraction.code];
      }
    }
  }
</script>

<style scoped>

</style>
