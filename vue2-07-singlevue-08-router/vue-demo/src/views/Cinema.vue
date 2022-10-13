<template>
    <div>
        Cinema
    </div>
</template>
<script>
const auth = {  // eslint-disable-line
  hasLogin: function () {
    return false
  }
}

export default {
  beforeRouteEnter (to, from, next) {
    //  不能放在mount组件中，需要在对应组件挂在前进行拦截
    console.log('局部守卫')
    // if (!auth.hasLogin()) {
    //   next('/login')
    // } else {
    //   next()
    // }
    next()
  }
}
</script>
