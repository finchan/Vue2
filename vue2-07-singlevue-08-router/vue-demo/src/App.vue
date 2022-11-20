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
<!--    <tabbar v-show="$store.state.isTabbarshow"></tabbar>-->
    <tabbar v-show="isTabbarshow"></tabbar>
  </div>
</template>

<script>
// 1. 导入组件
import axios from 'axios'
import navbar from './components/Navbar.vue'
import sidebar from './components/Sidebar.vue'
import tabbar from '@/components/Tabbar'
import {mapState} from 'vuex' //  mapState是ES6的导出功能
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
  // computed: {
  //   isTabbarshow () {
  //     return this.$store.state.isTabbarshow
  //   }
  // },
  // computed: mapState(['isTabbarshow']), //  导出多个属性用逗号分隔，这里只能用一个
  computed: {
    ...mapState(['isTabbarshow']) //  ES6展开合并运算符
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
