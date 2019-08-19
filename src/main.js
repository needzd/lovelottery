// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios= axios
Vue.use(Vuex)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  store,
  qs,
  components: { App },
  template: '<App/>',
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if (token) {  // 判断当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
//              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
});
