import { user } from '@/helpers/auth'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/PostView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !user()) {
    next('/')
    return
  }
  if (to.name === 'login' && user()) {
    next('/posts')
    return
  }
  next()
})

export default router
