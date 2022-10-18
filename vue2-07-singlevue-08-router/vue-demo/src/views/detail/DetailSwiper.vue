<template>
  <!-- Slider main container -->
  <div class="swiper mySwiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  props: ['slidesPerView', 'myswipername'],
  mounted () {
    this.detailSwiper()
  },
  methods: {
    detailSwiper: function () {
      console.log(this.myswipername)
      // eslint-disable-next-line no-new
      new Swiper('.' + this.myswipername, {
        slidesPerView: this.slidesPerView,
        spaceBetween: 10,
        freeMode: true
      })
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide{
  text-align: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
