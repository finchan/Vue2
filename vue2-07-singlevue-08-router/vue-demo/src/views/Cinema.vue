<template>
    <div>
        Cinema
    </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    //  不能放在mount组件中，需要在对应组件挂在前进行拦截
    console.log('局部守卫')
    if (true) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>
