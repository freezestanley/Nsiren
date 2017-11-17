import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aa from '@/components/aa'
import bb from '@/components/bb'

Vue.use(Router)

let router = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/aa',
    name: 'aa',
    component: aa
  },
  {
    path: '/bb',
    name: 'bb',
    component: bb
  }
]

export default new Router({
  mode: 'history',
  routes: router
})
