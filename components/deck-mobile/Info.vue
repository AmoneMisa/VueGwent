<template>
  <div class="media-wrapper">
    <media :query="{minWidth: 971}">
      <div class="deck-stats">
        <leaders/>
        <leaders-popup v-if="isOpenLeadersPopup"/>
        <stats :info="info"/>
      </div>
    </media>
    <media :query="{maxWidth: 970}">
      <div class="deck-stats">
        <leaders-mobile/>
        <leaders-popup-mobile v-if="isOpenLeadersPopup"/>
        <stats :info="info"/>
      </div>
    </media>
  </div>
</template>

<script>
  import Leaders from "./Leaders";
  import Stats from "./Stats";
  import LeadersPopup from "./LeadersPopup";

  import LeadersPopupMobile from "~/components/deck-mobile/LeadersPopup";
  import LeadersMobile from "~/components/deck-mobile/Leaders";
  import Media from "vue-media";


  export default {
    components: {Leaders, Stats, LeadersPopup, LeadersMobile, LeadersPopupMobile, Media},
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
