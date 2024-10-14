

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ '../views/page2.vue')
  }
]

export default routes
