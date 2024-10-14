import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/* webpackChunkName: "home" */ './pages/home.vue'),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue'),
  },
];

export default routes;
