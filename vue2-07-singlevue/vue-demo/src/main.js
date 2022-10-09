// 这里是ES6的导入，也可以通过CommonJS导入
// var Vue = requrie("vue");
// var App = require("./App.vue")
import Vue from 'vue'
import App from './App'
// 省略.js扩展名
import router from './router/index'

Vue.config.productionTip = false

new Vue({ //eslint-disable-line
  el: '#app',
  router, // 简写 router: router
  components: { App },
  template: '<App/>'
})
