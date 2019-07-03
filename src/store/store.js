import Vue from 'vue';
import Vuex from 'vuex';
import greettings from './modules/greettings';
import global from './modules/global';
import messageForm from './modules/messageForm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    greettings,
    global,
    messageForm,
  },
});
