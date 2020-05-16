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

<style lang="scss">
  @import "assets/variables";

  .leader__title {
    color: #b18b48;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }

  .leader__card {
    margin: 0 auto;
    margin-bottom: 52px;
    width: 117px;
    height: 220px;
    border: 1px solid rgba(#b18b48, 0.9);
    overflow: hidden;
  }

  .leader__img {
    width: 117px;
    height: 220px;
  }
</style>
