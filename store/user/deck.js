import Vue from 'vue';

export const state = () => ({
  infos: {},
  cards: {},
  available_cards: {},
});

export const mutations = {
  setCards(state, {fractionCode, cards}) {
    Vue.set(state.cards, fractionCode, cards);
  },
  setAvailableCards(state, {fractionCode, cards}) {
    Vue.set(state.available_cards, fractionCode, cards);
  }
};

export const actions = {
  async fetchCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/user/deck/' + fractionCode + '/card/');
    commit('setCards', {fractionCode, cards});
  },
  async fetchAvailableCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/user/deck/' + fractionCode + '/available_card/');
    commit('setAvailableCards', {fractionCode, cards});
  }
};
