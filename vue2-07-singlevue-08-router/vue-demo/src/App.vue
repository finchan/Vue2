<template>
  <div>
    <div class="practice">
      Hello Vue
      <input type='text' ref='mytext'/>
      <button @click='handleClick'>Add</button>
      <ul>
        <li v-for='data in dataList' :key='data'>
          {{data}}
        </li>
      </ul>
      <!--使用组件-->
      <navbar>
        <button @click='isShow = !isShow'>Click</button>
      </navbar>
    </div>
    <sidebar v-if='isShow'></sidebar>
    <router-view></router-view>
<!--    <tabbar v-if="showTabbar"></tabbar>-->
    <tabbar v-show="$store.state.isTabbarshow"></tabbar>
  </div>
</template>

<script>
// 1. 导入组件
import axios from 'axios'
import navbar from './components/Navbar.vue'
import sidebar from './components/Sidebar.vue'
import tabbar from '@/components/Tabbar'
// import bus from '@/bus' //  /index.js or index可以省略

// 全局注册组件
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)

// 下面是ES6导出的语法，相当于CommonJS的 module.exports
export default {
  data () {
    return {
      dataList: [],
      isShow: false
      // showTabbar: true
    }
  },
  methods: {
    handleClick: function () {
      this.dataList.push(this.$refs.mytext.value)
      console.log('Add clicked')
    }
  },
  components: {
    'navbar': navbar,
    'sidebar': sidebar,
    'tabbar': tabbar
  },
  // beforeMount () {
  //   bus.$on('maizuo', (data) => {
  //     console.log('Get notified ', data)
  //     this.showTabbar = data
  //   })
  // },
  mounted () {
    // Ajax放在这里做组件变更异步请求
    axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
  @import url('./assets/aliiconfont/iconfont.css');
  li{
    list-style: none;
  }
  html, body{
    height: 100%;
    margin:0;
    padding:0;
  }
  .practice{
    display: none;
  }
</style>
