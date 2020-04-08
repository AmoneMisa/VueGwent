export const state = () => ({
  isOpenLeadersPopup: false
});

export const mutations = {
  setIsOpenLeadersPopup(state, isOpenLeadersPopup) {
    state.isOpenLeadersPopup = isOpenLeadersPopup;
  }
};

export const actions = {
  openLeadersPopup({commit}) {
    commit('setIsOpenLeadersPopup', true);
  },
  closeLeadersPopup({commit}) {
    commit('setIsOpenLeadersPopup', false);
  }
};
