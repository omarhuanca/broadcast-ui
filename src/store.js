import Vue from 'vue';
import Vuex from 'vuex';
import messageForm from './store/modules/messageForm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messageForm,
  },
});
