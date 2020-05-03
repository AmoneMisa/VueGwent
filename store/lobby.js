export const state = () => ({
  gameSessions: {}
});

export const mutations = {
  setGameSessions(state, {gameSessions}) {
   state.gameSessions = gameSessions;
  }
};

export const actions = {
  async fetchGameSessions({commit}) {
    try {
      let gameSessions = await this.$axios.$get('/api/user/game-session/');
      commit('setGameSessions', {gameSessions});
    } catch (e) {
      commit('setGameSessions', null);
    }
  },
  async createGameSession({state, commit}, {gameSession}) {
    await this.$axios.$put('/api/user/game-session/', {'gameSession': gameSession})
  }
};
