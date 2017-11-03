// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/application/base'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import {axioshttp} from '@/widget'
import Vuex from 'vuex'
import { ToastPlugin } from 'vux'
import VueI18n from 'vue-i18n'

Vue.use(Vuex)
Vue.use(ToastPlugin)
Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.config.devtools = true

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは{msg}、世界'
    }
  }
}
window.app = {}
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
})
window.app.i18n = i18n

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  template: '<App/>',
  components: { App }
})

axioshttp(app)