import Vue from 'vue';

export const state = () => ({
  info: {},
  cards: {},
  available_cards: {},
});

export const mutations = {
  setInfo(state, {fractionCode, info}) {
    Vue.set(state.info, fractionCode, info);
  },
  setCards(state, {fractionCode, cards}) {
    Vue.set(state.cards, fractionCode, cards);
  },
  setAvailableCards(state, {fractionCode, cards}) {
    Vue.set(state.available_cards, fractionCode, cards);
  }
};

export const actions = {
  async fetchInfo({commit}, fractionCode) {
    let info = await this.$axios.$get('/api/user/deck/' + fractionCode + '/');
    commit('setInfo', {fractionCode, info});
  },
  async fetchCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/user/deck/' + fractionCode + '/card/');
    commit('setCards', {fractionCode, cards});
  },
  async fetchAvailableCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/user/deck/' + fractionCode + '/card/available/');
    commit('setAvailableCards', {fractionCode, cards});
  },
  async addCard({state, commit}, {fractionCode, card}) {
    await this.$axios.$put('/api/user/deck/' + fractionCode + '/card/', {'cardCode': card.code});
    let availableCards = state.available_cards[fractionCode].filter(_card => card !== _card);
    commit('setAvailableCards', {fractionCode, cards: availableCards});
    let cards = [...state.cards[fractionCode], card];
    commit('setCards', {fractionCode, cards});
  },
  async removeCard({state, commit}, {fractionCode, card}) {
    await this.$axios.$delete('/api/user/deck/' + fractionCode + '/card/' + card.code + '/');
    let cards = state.cards[fractionCode].filter(_card => card !== _card);
    commit('setCards', {fractionCode, cards});
    let availableCards = [...state.available_cards[fractionCode], card];
    commit('setAvailableCards', {fractionCode, cards: availableCards});
  }
};
