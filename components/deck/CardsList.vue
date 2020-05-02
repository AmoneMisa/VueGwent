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

<style lang="scss">
  @import "~/assets/_variables";

  .cards-list {
    display: flex;
    flex-flow: row wrap;
    padding-right: 30px;
  }

  .cards-list__item {
    width: calc((100% - 20px) / 3);
    padding-top: 20px;
    padding-right: 20px;
    flex: none;
  }

  .cards-list__item-inner {
    margin-right: 20px;
    margin-left: 20px;
    height: 300px;
    width: 150px;
    transition: box-shadow .2s ease-in-out;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 0 10px 3px rgba(#feaf5c, 0.56);
    }
  }

  .cards-list__item-img {
    height: 300px;
    width: 150px;
  }
</style>
