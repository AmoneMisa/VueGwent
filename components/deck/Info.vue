<template>
  <div class="deck-stats">
    <leaders/>
    <leaders-popup v-if="isOpenLeadersPopup"/>
    <stats :info="info"/>
  </div>
</template>

<script>
  import Leaders from "./Leaders";
  import Stats from "./Stats";
  import LeadersPopup from "./LeadersPopup";

  export default {
    components: {Leaders, Stats, LeadersPopup},
    props: ['fraction'],
    async serverPrefetch() {
      if (!this.fraction) {
        return;
      }

      await this.$store.dispatch('user/deck/fetchInfo', this.fraction.code);
    },
    computed: {
      info() {
        if (!this.fraction) {
          return null;
        }

        return this.$store.state.user.deck.info[this.fraction.code];
      },
      isOpenLeadersPopup() {
        return this.$store.state.deck_page.isOpenLeadersPopup;
      }
    },
    watch: {
      async fraction(fraction) {
        await this.$store.dispatch('user/deck/fetchInfo', fraction.code);
      }
    }
  }
</script>

<style lang="scss">
  .deck-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    position: relative;
  }
</style>
