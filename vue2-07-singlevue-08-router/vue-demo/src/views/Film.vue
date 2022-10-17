<template>
    <div>
        <div>
          <movie-swiper ref="myswiper"></movie-swiper>
        </div>
        <div>
          <film-header :class="isFixed?'fixed':''"></film-header>
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
      isFixed: false
    }
  },
  components: {
    'film-header': FilmHeader,
    'movie-swiper': MovieSwiper
  },
  mounted () {
    window.onscroll = this.handleScroll
  },
  destroyed () {
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        //  吸顶
        this.isFixed = true
      } else {
        //  去吸顶
        this.isFixed = false
      }
    }
  }
}
</script>
