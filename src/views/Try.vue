<template>
<div class="container">
<h1>swiper</h1>
<swiper ref="{swiperRef}" :slidesPerView="3" :centeredSlides="true" :spaceBetween="30"
:navigation="true" class="mySwiper text-center border p-5">
  <swiper-slide  v-for="(item,index) in products " :key="index">
    <div class="card" style="width: 18rem;">
        <div class="bg-cover  product_image position-relative" :style="{backgroundImage:'url(' +item.imageUrl+ ')',height:'200px' }"></div>
    <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.category}}</p>
    </div>
    </div>
  </swiper-slide>
</swiper>
</div>
</template>
<style lang="scss">
    .bg-cover{
        background-position: center center;
        background-size:cover;
    }
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
// import './style.css'
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      url: 'https://vue3-course-api.hexschool.io/',
      path: 'iven_vue3_course',
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${this.url}api/${this.path}/products`)
        .then(res => {
          this.products = res.data.products
          console.log(res)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
