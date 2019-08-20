// actions
const actions = {
  subscriberFormChangeModel({ commit }, newModel) {
    commit('setModel', newModel);
  },
};

// mutations
const mutations = {
  setModel(state, newModel) {
    state.model = newModel;
  },
};

// initial state
const state = {
  model: {},
};

export default {
  state,
  actions,
  mutations,
};
