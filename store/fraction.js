export const state = () => ({
  list: null
});

export const mutations = {
  set (state, list) {
    state.list = list;
  }
};

export const actions = {
  async reload ({ commit }) {
    try {
      let fraction = await this.$axios.$get('/api/fraction/');
      commit('set', fraction);
    } catch (e) {
      commit('set', null);
    }
  }
};
