export const state = () => ({
  data: null
});

export const mutations = {
  set (state, data) {
    state.data = data;
  }
};

export const actions = {
  async reload ({ commit }) {
    try {
      let user = await this.$axios.$get('/api/user/');
      commit('set', user);
    } catch (e) {
      commit('set', null);
    }
  },
  async logout ({ commit }) {
    commit('set', null);
  }
};
