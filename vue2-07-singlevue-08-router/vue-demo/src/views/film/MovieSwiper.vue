<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="../../assets/carousel/c1.jpg" class="swiper-image"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/carousel/c2.jpg" class="swiper-image"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/carousel/c3.jpg" class="swiper-image"/>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
import Swiper, {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  mounted () {
    this.movieSwiper()
  },
  methods: {
    movieSwiper: function () {
      // eslint-disable-next-line no-new
      new Swiper('.swiper', {
        autoplay: {
          delay: 2000
        },
        modules: [Navigation, Pagination, Scrollbar, Autoplay],
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      })
    }
  }
}
</script>
<style scoped>
.swiper{
  width: 100%;
  /*width: 600px;*/
  height: 300px;
  overflow: hidden;
}
.swiper-image{
  width:100%;
}
</style>
