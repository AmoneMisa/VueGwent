<template>
  <div class="cards-list">
    <div class="cards-list__item" v-for="card in cards" :key="card.id" @click="() => cardClick(card)">
      <div class="cards-list__item-inner">
        <img class="cards-list__item-img" :src="card.imageUrl" :alt="card.code"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['cards'],
    methods: {
      cardClick(card) {
        this.$emit('card-click', card)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/_variables";

  .cards-list {
    display: flex;
    flex-flow: row wrap;
    padding-right: 30px;
    width: calc(70vw - 10px);
    justify-content: center;
    align-items: center;
  }

  .cards-list__item {
    width: calc(100% / 4);
    padding-top: 10px;
    padding-right: 10px;
    flex: none;
  }

  .cards-list__item-inner {
    margin-right: 20px;
    margin-left: 20px;
    height: 200px;
    width: 100px;
    transition: box-shadow .2s ease-in-out;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 0 10px 3px rgba(#feaf5c, 0.56);
    }
  }

  .cards-list__item-img {
    height: 200px;
    width: 100px;
  }
</style>
