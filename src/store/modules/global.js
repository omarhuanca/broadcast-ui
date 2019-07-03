// actions
const actions = {
  globalChangeNotifySnackBar({ commit }, snackBar) {
    commit('globalSetNotifySnackBar', snackBar);
  },
  changePaginationDataTableX({ commit }, newPagination) {
    commit('changePaginationDataTableX', newPagination);
  },
};

// mutations
const mutations = {
  globalSetNotifySnackBar(state, snackBar) {
    state.snackBar = snackBar;
  },
  changePaginationDataTableX(state, newPagination) {
    state.paginationDataTableX = newPagination;
  },
};

// initial state
const state = {
  snackBar: {
    color: 'info',
    duration: 4000,
    active: false,
    message: '',
  },
  paginationDataTableX: {
    page: 1,
    rowsPerPage: 10,
  },
};

export default {
  state,
  actions,
  mutations,
};
