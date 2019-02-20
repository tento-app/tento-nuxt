<template id="">
<div class="swiper-container" v-swiper:mySwiper = 'swiperOption'>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
    <div class="swiper-slide">Slide 6</div>
    <div class="swiper-slide">Slide 7</div>
    <div class="swiper-slide">Slide 8</div>
    <div class="swiper-slide">Slide 9</div>
    <div class="swiper-slide">Slide 10</div>
  </div>

  <div class="swiper-pagination"></div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>


</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
         el: ".swiper-pagination"
        },
        loop: true,
        slidesPreview: 2
      }
    }
  }
}
</script>
