// 这里是ES6的导入，也可以通过CommonJS导入
// var Vue = requrie("vue");
// var App = require("./App.vue")
import Vue from 'vue'
import App from './App'
// 省略.js扩展名
import router from './router/index'
import store from './store'
import AllA from './module/moduleA' //  全部导入
import {A1 as myA1, A2} from './module/moduleB' //  只导入某几个接口

console.log(AllA, myA1, A2)

Vue.config.productionTip = false

new Vue({ //eslint-disable-line
  el: '#app',
  router, // 简写 router: router
  store, // 简写 store: store
  components: { App },
  template: '<App/>'
})
