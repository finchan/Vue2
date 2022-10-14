<template>
  <div id="nowplaying">
    <ul>
        <li v-for="data in dataList" :key="data.filmId" @click="handleChangePage(data.filmId)">
          <div id="left-image">
            <img :src="data.poster"/>
          </div>
          <div id="right-content">
            电影名称：{{data.name}}<br/>
            电影评分：{{data.grade}}<br/>
            电影分类：{{data.category}}<br/>
            演员名单：{{data.actors | getActors}}<br/>
            电影介绍：{{data.synopsis}}<br/>
            地区国家：{{data.nation}}
          </div>
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
  },
  filters: {
    getActors: function (value) {
      let actors = value.map(actor => {
        return actor.name
      })
      return actors.join(' ')
    }
  }
}
</script>

<style scoped>
ul li {
  display: block;
  height: 140px;
  margin: 10px;
}
#left-image{
  clear: both;
  overflow: hidden;
  float:left;
  width: 100px;
  height: 140px;
  margin-right: 30px;
}
img {
  overflow: hidden;
  width: 100px;
  height: 140px;
}
#right-content{
  height: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
