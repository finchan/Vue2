<template>
  <div v-if="filmInfo">
    {{filmInfo.name}}<br/>
    <img :src="filmInfo.poster" class="poster"/>
  </div>
</template>
<script>
import axios from 'axios'
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
  }
}
</script>
<style scoped>
.poster{
  width: 100%;
}
</style>
