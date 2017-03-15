import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

import App from './App'

const lazyLoading = (path, ext = '.vue') => {
  return (resolve) => {
    require([`${path}${ext}`], resolve)
  }
}

const routes = [
  { path: '/', component: lazyLoading('./MainView') }
]
const router = new Router({
  routes
})
console.log('main.js', 'router', router)

/*
router.map({
  '/': {
    name: 'Main',
    component: lazyLoading('./MainView')
  },
})
*/

//router.start(App, 'app')
const app = new Vue({
  router,
  ...App
}).$mount('app')
