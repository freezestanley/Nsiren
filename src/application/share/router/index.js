import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Hello'
import aa from '@/components/aa'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
