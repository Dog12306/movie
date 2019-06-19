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
      path: '/cinema/map/:id',
      name: 'cinemaMap',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "cinema" */ '@/views/cinema/components/CinemaMap.vue'),
    },
    {
      path: '/cinema/detail/:id/seat/:id',
      name: 'chooseSeat',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "cinema" */ '@/views/cinema/components/ChooseSeat.vue'),
    },
    {
      path: '/order/confirm',
      name: 'confirmOrder',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "order" */ '@/views/order/ConfirmOrder.vue'),
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
		  path: '/main/message',
		  name: 'message',
		  meta:{
		    footShow:true
		  },
		  component: () => import(/* webpackChunkName: "message" */ '@/views/main/message/message.vue'),
		},
		{
		  path: '/main/message/chat/:id',
		  name: 'chat',
		  meta:{
		    footShow:false
		  },
		  component: () => import(/* webpackChunkName: "chat" */ '@/views/main/message/chat.vue'),
		},
// 		{
// 		  path: '/myorder',
// 		  name: 'myorder',
// 		  meta:{
// 		    footShow:false
// 		  },
// 		  component: () => import(/* webpackChunkName: "myorder" */ '@/views/main/myorder/myorder.vue'),
// 		},
// 		{
// 		  path: '/myorder/tickets/:id',
// 		  name: 'tickets',
// 		  meta:{
// 		    footShow:false
// 		  },
// 		  component: () => import(/* webpackChunkName: "tickets" */ '@/views/main/myorder/tickets.vue'),
// 		},
    {
      path: '/main/coupon',
      name: 'coupon',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "coupon" */ '@/views/main/coupon/coupon.vue'),
    },
    {
      path: '/mian/card',
      name: 'card',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "card" */ '@/views/main/card/card.vue'),
    },
    {
      path: '/main/card/buy',
      name: 'buy',
      meta:{
        footShow:false
      },
      component: () => import(/* webpackChunkName: "buy" */ '@/views/main/buy/buy.vue'),
      // path: '/mymessage',
      // name: 'mymessage',
      // component: () => import(/* webpackChunkName: "main" */ '@/views/main/mymessage/Mymessage.vue'),
    },
    {
      path: '/set',
      name: 'set',
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/set/Set.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        footShow: false
      },
      component: () => import(/* webpackChunkName: "Login" */ '@/views/login/Login.vue'),
    },
    {
      path: '/comment',
      name: 'comment',
      meta: {
        footShow: false
      },
      component: () => import(/* webpackChunkName: "comment" */ '@/views/comment/Comment.vue'),
    },
    // {
    //   path: '/location',
    //   name: 'location',
    //   meta: {
    //     footShow: false
    //   },
    //   component: () => import(/* webpackChunkName: "location" */ '@/views/location/Location.vue'),
    // },
    {
      path: '*',
      name: 'home',
      meta: {
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
  ]
})
