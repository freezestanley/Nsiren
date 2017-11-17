import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Hello'
import aa from '@/components/aa'
import bb from '@/components/bb'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/share/bb',
      name: 'bb',
      component: bb
    }
  ]
})
