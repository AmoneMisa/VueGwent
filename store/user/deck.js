import Vue from 'vue';

export const state = () => ({
  infos: {},
  cards: {}
});

export const mutations = {
  setCards(state, {fractionCode, cards}) {
    Vue.set(state.cards, fractionCode, cards);
  }
};

export const actions = {
  async fetchCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/user/deck/' + fractionCode + '/card/');
    commit('setCards', {fractionCode, cards});
  }
};
