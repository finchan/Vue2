<template>
  <div>
    Hello Vue
    <input type="text" ref="mytext"/>
    <button @click="handleClick">Add</button>

    <ul>
      <li v-for="data in dataList" :key="data">
        {{data}}
      </li>
    </ul>
    <!--使用组件-->
    <navbar>
      <button @click="isShow = !isShow">Click</button>
    </navbar>
    <sidebar v-if="isShow"></sidebar>
  </div>
</template>

<script>
//1. 导入组件
import Vue from "vue" //模块化开发组件需要用到的，需要引入
import navbar from "./components/Navbar.vue"
import sidebar from "./components/Sidebar.vue"

//全局注册组件
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)

//下面是ES6导出的语法，相当于CommonJS的 module.exports
export default{
  data() {
    return {
      dataList:[],
      isShow: false
    }
  },
  methods: {
    handleClick: function() {
      this.dataList.push(this.$refs.mytext.value)
      console.log("Add clicked")
    }
  },
  components: {
    "navbar": navbar,
    "sidebar": sidebar
  },
  mounted() {
    //Ajax放在这里做组件变更异步请求
  }
}
</script>

<style>
  li{
    background-color: yellow;
  }
</style>