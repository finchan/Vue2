<template>
    <div>
        <div>
          <movie-swiper></movie-swiper>
        </div>
        <div>
            Film Header
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import MovieSwiper from '../components/MovieSwiper'
export default{
  data () {
    return {

    }
  },
  components: {
    'movie-swiper': MovieSwiper
  }
}
</script>
