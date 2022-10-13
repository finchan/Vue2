<template>
  <div>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img src="../assets/carousel/c1.jpg" class="swider-image"/>
        </div>
        <div class="swiper-slide">
          <img src="../assets/carousel/c2.jpg" class="swider-image"/>
        </div>
        <div class="swiper-slide">
          <img src="../assets/carousel/c3.jpg" class="swider-image"/>
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
  </div>
</template>
<script>
import Swiper,{Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  mounted () {
    this.movieSwiper()
  },
  methods: {
    movieSwiper: function () {
      const swiper = new Swiper('.swiper', {
        speed: 500,
        spaceBetween: 200,
        autoplay: {
          delay: 3000,
        },
        modules: [Navigation, Pagination, Scrollbar, Autoplay],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
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
.swider-image{
  width:100%;
}
</style>
