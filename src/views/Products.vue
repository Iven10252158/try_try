<template>
<div class="container">
  <div class="row">
    <div class="col-4">
      <select v-model="category.type" @change="change">
        <option value="">全部</option>
        <option v-for="item in products" :key="item.id">
          {{item.category}}</option>
      </select>
    </div>
    <div class="col-8">
      <div class="card" v-for="(item,index) in typeProducts " :key="index">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.category}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import siderBar from '../components/siderBar.vue'
export default {
  data () {
    return {
      url: 'https://vue3-course-api.hexschool.io/',
      path: 'iven_vue3_course',
      products: [],
      category: {
        type: ''
      },
      typeProducts: []
    }
  },
  // components: {
  //   siderBar
  // },
  methods: {
    getProducts () {
      this.$http.get(`${this.url}api/${this.path}/products/all`)
        .then(res => {
          this.products = res.data.products
          this.category.type = this.products.map(item => Object.values(item)[0])
          // this.category.type = Object.values(res.data.products)
          // this.category.type = this.products.map(item=> Object.values(res.data.products).map((item) => {
          //   return item.category
          // })
          // console.log(this.category.type)
          // console.log(this.products.length)
        })
    },
    change () {
      this.typeProducts = this.products.filter(item => {
        if (this.category.type === '') {
          // console.log(item.category === this.category.type)
          // console.log(item.category)
          return this.products
        } else {
          return item.category === this.category.type
        }
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
