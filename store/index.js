import axios from "axios";

export const state = () => ({
  counter: 0
});

export const mutations = {
  increment (state) {
    state.counter++;
  }
};

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await Promise.all([dispatch('user/reload'), dispatch('fraction/reload')]);
  }
};
