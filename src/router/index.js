import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
    children: [
      {
        path: 'new',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'test',
        component: () => import('../views/Products.vue')
      }
    ]
  },
  {
    path: '/try',
    component: () => import('../views/Try.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
