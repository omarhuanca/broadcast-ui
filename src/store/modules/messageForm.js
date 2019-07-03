// actions
const actions = {
  messageFormChangeData({ commit }, newData) {
    commit('setData', newData);
  },
  messageFormChangeClassMessage({ commit }, newClassMessage) {
    commit('setClassMessage', newClassMessage);
  },
};

// mutations
const mutations = {
  setData(state, newData) {
    state.model = newData;
  },
  setClassMessage(state, newClassMessage) {
    state.classMessage = newClassMessage;
  },
};

// initial state
const state = {
  model: {},
  classMessage: {},
};

export default {
  state,
  actions,
  mutations,
};
