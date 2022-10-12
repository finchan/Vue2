<template>
  <div>
    Now Playing
    <ul>
        <li v-for="data in dataList" :key="data.filmId" @click="handleChangePage(data.filmId)">
            {{data.name}}<br/>
<!--          <img :src="data.poster" width="200" height="250"/>-->
        </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=1&k=6712065',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16655427453748269498826753"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.dataList = res.data.data.films
    })
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      //    编程式导航 ${id} ES6字符串模板
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>
div {
  background-color: green;
}
</style>
