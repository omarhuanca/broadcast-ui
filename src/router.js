import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import MessageManagement from './views/messages/MessageManagement';
import CategoryManagement from './views/categories/CategoryManagement';
import ClassChannelManagement from './views/classChannels/ClassChannelManagement';
import SubscriberManagement from './views/subscribers/SubscriberManagement';
import ClassMessageManagement from './views/classMessages/ClassMessageManagement';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/messagemanagement',
      name: 'messagemanagement',
      component: MessageManagement,
    },
    {
      path: '/categorymanagement',
      name: 'categorymanagement',
      component: CategoryManagement,
    },
    {
      path: '/classchannelmanagement',
      name: 'classchannelmanagement',
      component: ClassChannelManagement,
    },
    {
      path: '/subscribermanagement',
      name: 'subscribermanagement',
      component: SubscriberManagement,
    },
    {
      path: '/classmessagemanagement',
      name: 'classmessagemanagement',
      component: ClassMessageManagement,
    },
  ],
});
