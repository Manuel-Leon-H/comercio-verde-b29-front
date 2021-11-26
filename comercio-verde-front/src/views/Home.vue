<template>
  <div class="home my-3">
    <b-container>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      fade
      background="#000000"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://comercioverde.herokuapp.com/media/images/slider1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://comercioverde.herokuapp.com/media/images/slider2.jpg"></b-carousel-slide>
    </b-carousel>
    </b-container>
  </div>
</template>

<script>
import {BCarousel,BCarouselSlide,BImg} from 'bootstrap-vue'

export default {
  name: 'Home',
  components: {
    BCarousel,BCarouselSlide,BImg
  },data() {
      return {
        slide: 0,
        sliding: null
      }
    },methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>