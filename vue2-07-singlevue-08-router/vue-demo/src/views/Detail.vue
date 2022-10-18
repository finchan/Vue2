<template>
  <div v-if="filmInfo">
    {{filmInfo.name}}<br/>
    <img :src="filmInfo.poster" class="poster"/>
    <br/>
    <h3>演员列表</h3>
    <swiper slidesPerView="4" class="actorswiper" myswipername="actorswiper">
      <div class="swiper-slide" v-for="data in filmInfo.actors" :key="data.name">
        <img :src="data.avatarAddress"/>
        <div>{{data.name}}</div>
        <div>{{data.role}}</div>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper slidesPerView="3" class="sceneswiper" myswipername="sceneswiper">
      <div class="swiper-slide" v-for="(data,index) in filmInfo.photos" :key="index">
        <img :src="data"/>
      </div>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import swiper from './detail/DetailSwiper'
export default {
  props: ['id'],
  data () {
    return {
      filmInfo: null
    }
  },
  mounted () {
    //  获取传入的参数
    console.log(this.$route.params.id)
    axios({
      url: `/gateway?filmId=${this.id}&k=5996217`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16653092443642703497658369","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
      console.log(this.filmInfo)
    })
  },
  components: {
    'swiper': swiper
  }
}
</script>
<style scoped>
.poster{
  width: 100%;
  height: 300px;
}
</style>
