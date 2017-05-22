// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './components/layout'
import indexPage from './pages/index'
import projectCenter from './pages/projectCenter'
import zonXueLife from './pages/zonXueLife'
import zonXueGood from './pages/zonXueGood'
import zonXueTank from './pages/zonXueTank'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
/* 注册路由组件重要 */
Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: indexPage },
    { path: './projectCenter', name: 'projectCenter', component: projectCenter },
    { path: './zonXueLife', name: 'zonXueLife', component: zonXueLife },
    { path: './zonXueGood', name: 'zonXueGood', component: zonXueGood },
    { path: './zonXueTank', name: 'zonXueTank', component: zonXueTank }
  ]
})
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
