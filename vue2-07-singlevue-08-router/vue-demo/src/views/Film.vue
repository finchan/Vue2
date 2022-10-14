<template>
    <div>
        <div>
          <movie-swiper></movie-swiper>
        </div>
        <div>
          <film-header></film-header>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import MovieSwiper from '../components/MovieSwiper'
import FilmHeader from '../components/FilmHeader'
export default {
  data () {
    return {

    }
  },
  components: {
    'film-header': FilmHeader,
    'movie-swiper': MovieSwiper
  },
  mounted () {
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop)
    }
  }
}
</script>
