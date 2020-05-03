import Vue from 'vue';

export const state = () => ({
  list: null,
  cards: {}
});

export const getters = {
  getByCode: (state) => (code) => state.list.find(fraction => fraction.code === code)
};

export const mutations = {
  set(state, list) {
    state.list = list;
  },
  setCards(state, {fractionCode, cards}) {
    Vue.set(state.cards, fractionCode, cards);
  }
};

export const actions = {
  async reload({commit}) {
    try {
      let fraction = await this.$axios.$get('/api/fraction/');
      commit('set', fraction);
    } catch (e) {
      commit('set', null);
    }
  },
  async fetchCards({commit}, fractionCode) {
    let cards = await this.$axios.$get('/api/fraction/' + fractionCode + '/card/');
    commit('setCards', {fractionCode, cards});
  }
};
