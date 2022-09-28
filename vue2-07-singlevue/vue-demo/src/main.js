//这里是ES6的导入，也可以通过CommonJS导入
//var Vue = requrie("vue");
//var App = require("./App.vue")
import Vue from 'vue' 
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
