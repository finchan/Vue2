<template>
  <div>
    <ul>
<!--      <li v-for="data in $store.state.comingList" :key="data.filmId">-->
      <li v-for="data in $store.getters.commingListGetter" :key="data.filmId">
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
export default{
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
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
