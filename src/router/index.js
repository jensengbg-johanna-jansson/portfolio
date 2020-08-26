import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WorksItem from '../views/WorksItem.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/work/:id',
    name: 'Work',
    component: WorksItem
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {selector: to.hash}
  } else if (savedPosition) {
    return savedPosition
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 10)
    })
  }
}
})

export default router
