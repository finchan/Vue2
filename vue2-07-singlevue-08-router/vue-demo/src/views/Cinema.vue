<template>
    <div class="cinema" :style="mystyle">
        <ul>
          <li v-for="data in dataList" :key="data.cinemaId">
            {{data.name}}
          </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
const auth = {  // eslint-disable-line
  hasLogin: function () {
    return false
  }
}

export default {
  mounted () {
    console.log(document.documentElement.clientHeight)
    this.mystyle.height = (document.documentElement.clientHeight - 58) + 'px'
    axios({
      url: '/gateway?cityId=110100&ticketFlag=1&k=6168865',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16653092443642703497658369","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.dataList = res.data.data.cinemas
      //  在下次 DOM 更新循环结束之后执行延迟回调。
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  },
  beforeRouteEnter (to, from, next) {
    //  不能放在mount组件中，需要在对应组件挂在前进行拦截
    console.log('局部守卫')
    // if (!auth.hasLogin()) {
    //   next('/login')
    // } else {
    //   next()
    // }
    next()
  },
  data () {
    return {
      dataList: [],
      mystyle: {
        height: '0px'
      }
    }
  }
}
</script>
<style>
.cinema{
  overflow: hidden;
  position: relative;
}
</style>
