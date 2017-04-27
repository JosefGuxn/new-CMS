import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(ElementUI)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})
*/
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
