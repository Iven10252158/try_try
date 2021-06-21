<template>
<div class="container">
  <div class="row">
    <div class="col-4">
      <select v-model="category.type">
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
        type: '全部'
      }
    }
  },
  // components: {
  //   siderBar
  // },
  methods: {
    getProducts () {
      this.$http.get(`${this.url}api/${this.path}/products`)
        .then(res => {
          this.products = res.data.products
          this.category.type = this.products.map(item => Object.values(item)[0])
          // console.log(this.products.category)
          // this.category.type = Object.values(res.data.products)
          // this.category.type = this.products.map(item=> Object.values(res.data.products).map((item) => {
          //   return item.category
          // })
          // console.log(this.category.type)
          // console.log(res)
        })
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    typeProducts () {
      const vm = this
      if (vm.category.type === '') {
        // console.log(vm.products)
        return vm.products
        // } else if (this.category.type === '登山新手') {
        //   console.log(this.products)
      } else {
        console.log(vm.category.type)
        // console.log(vm.products.category)
        // return vm.products.category
        vm.products.filter((item, index) => {
          console.log(item.category === vm.category.type)
          return item.category === vm.category.type
        })
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
