<template>
<div class="container">
  <div data-aos="fade-down" data-aos-duration="3000">
    <p>{{user}}</p>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
<input type="date">
<card></card>
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

import card from '@/components/Card.vue'
// install Swiper modules
SwiperCore.use([Navigation])
export default {
  components: {
    card,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      url: 'https://vue3-course-api.hexschool.io/',
      path: 'iven_vue3_course',
      products: [],
      user: {
        name: '小明',
        uuid: 78163
      }
    }
  },
  provide: {
    user: {
      name: '小明',
      uuid: 78163
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
