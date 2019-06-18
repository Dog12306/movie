import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: {
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
    },
    {
      path: '/ticket',
      name: 'ticket',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "ticket" */ '@/views/ticket/Ticket.vue'),
    },
    {
      path: '/cinema',
      name: 'cinema',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "cinema" */ '@/views/cinema/Cinema.vue'),
    },
    {
      path: '/cinema/details/:id',
      name: 'details',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "cinema" */ '@/views/cinema/details/Details.vue'),
    },
    {
      path: '/main',
      name: 'main',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/Main.vue'),
    },
    {
      path: '/main/order/:id',
      name: 'order',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/order/Order.vue'),
    },
    {
      path: '/main/order/:id/tick/:id',
      name: 'tick',
      meta: {
        footShow: false
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/tick/tick.vue'),
    },
    {
      path: '*',
      redirect: '/home'
    },

  ]
})
