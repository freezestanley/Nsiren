import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }
]

export default new Router({
  // mode: 'history',
  routes: router
})
