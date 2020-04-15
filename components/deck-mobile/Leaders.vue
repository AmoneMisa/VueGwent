<template>
  <div class="deck-stats__leader">
    <div class="leader">
      <div class="leader__title">Лидер</div>
      <div class="leader__card" @click="openLeadersPopup">
        <img src="/imgs/Нильфгаард.png" class="leader__img leader__img_chosen">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['info'],
    methods: {
      openLeadersPopup() {
        this.$store.dispatch('deck_page/openLeadersPopup')
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~/assets/_variables";

  .leader__title {
    color: #b18b48;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }

  .leader__card {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 90px;
    height: 170px;
    border: 1px solid rgba(#b18b48, 0.9);
    overflow: hidden;
  }

  .leader__img {
    width: 90px;
    height: 170px;
  }
</style>
