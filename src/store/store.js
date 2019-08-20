import Vue from 'vue';
import Vuex from 'vuex';
import greettings from './modules/greettings';
import global from './modules/global';
import messageForm from './modules/messageForm';
import categoryForm from './modules/categoryForm';
import classCategoryForm from './modules/classChannelForm';
import subscriberForm from './modules/subscriberForm';
import classMessageForm from './modules/classMessageForm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    greettings,
    global,
    messageForm,
    categoryForm,
    classCategoryForm,
    subscriberForm,
    classMessageForm,
  },
});
