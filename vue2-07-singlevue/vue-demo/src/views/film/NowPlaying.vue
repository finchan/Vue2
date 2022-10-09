<template>
  <div>
    Now Playing
    <ul>
        <li v-for="data in dataList" :key="data" @click="handleChangePage(data)">
            {{data}}
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: ['111', '222', '333']
    }
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
