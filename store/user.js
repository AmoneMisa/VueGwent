export const state = () => ({
  data: null,
  stats: null
});

export const mutations = {
  set(state, data) {
    state.data = data;
  },
  setStats(state, stats) {
    state.stats = stats;
  }
};

export const actions = {
  async reload({commit}) {
    try {
      let user = await this.$axios.$get('/api/user/');
      commit('set', user);
    } catch (e) {
      commit('set', null);
    }
  },
  async logout({commit}) {
    commit('set', null);
  },
  async fetchStats({commit}) {
    try {
      let stats = await this.$axios.$get('/api/user/stats/');
      commit('setStats', stats);
    } catch (e) {
      commit('setStats', null);
    }
  }
};
