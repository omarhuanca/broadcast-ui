// actions
const actions = {
  messageFormChangeModel({ commit }, newModel) {
    commit('setModel', newModel);
  },
  messageFormChangeClassMessage({ commit }, newClassMessage) {
    commit('setClassMessage', newClassMessage);
  },
};

// mutations
const mutations = {
  setModel(state, newModel) {
    state.model = newModel;
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
