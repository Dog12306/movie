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
      meta:{
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
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
    },
	{
		 path: '/movie/release',
		 name: 'release',
		 meta:{
		   footShow:true
		 },
		 component: () => import(/* webpackChunkName: "release" */ '@/views/movie/release/release.vue'),
	},
	{
		 path: '/movie/release/performer',
		 name: 'performer',
		 meta:{
		   footShow:true
		 },
		 component: () => import(/* webpackChunkName: "performer" */ '@/views/movie/performer/performer.vue'),
	},
	{
		 path: '/movie/release/score',
		 name: 'score',
		 meta:{
		   footShow:false
		 },
		 component: () => import(/* webpackChunkName: "score" */ '@/views/movie/score/score.vue'),
	},
	{
		 path: '/movie/release/boxOffice',
		 name: 'boxOffice',
		 meta:{
		   footShow:false
		 },
		 component: () => import(/* webpackChunkName: "boxOffice" */ '@/views/movie/boxOffice/boxOffice.vue'),
	},
    {
      path: '/ticket',
      name: 'ticket',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "ticket" */ '@/views/ticket/Ticket.vue'),
    },
    {
      path: '/cinema',
      name: 'cinema',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "cinema" */ '@/views/cinema/Cinema.vue'),
    },
    {
      path: '/main',
      name: 'main',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/Main.vue'),
    },
    {
      path: '*',
      redirect: '/movie/release/performer'
    },
	
    

  ]
})
