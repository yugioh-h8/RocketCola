import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import GameOver from '../views/GameOver.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/gameover',
    name: 'GameOver',
    component: GameOver
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !localStorage.access_token_1 && !localStorage.access_token_2) {
    next({
      name : 'Home'
    })
  } else {
    next();
  }
})

export default router
