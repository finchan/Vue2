<template>
  <div>
    DETAIL
  </div>
</template>
<script>
export default {
  mounted () {
    //  获取传入的参数
    console.log(this.$route.params.id)
  }
}
</script>
