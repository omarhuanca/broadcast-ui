import Vue from 'vue';
import Vuex from 'vuex';
import messageForm from './store/modules/messageForm';
import categoryForm from './store/modules/categoryForm';
import classChannelForm from './store/modules/classChannelForm';
import subscriberForm from './store/modules/subscriberForm';
import classMessageForm from './store/modules/classMessageForm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messageForm,
    categoryForm,
    classChannelForm,
    subscriberForm,
    classMessageForm,
  },
});
