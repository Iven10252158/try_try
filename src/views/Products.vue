
<template>
<div class="container">
  <div class="row">
    <div class="col-4">
      <!-- <select v-model="category.type" @change="change">
        <option value="">全部</option>
        <option v-for="item in productName" :key="item.id">
          {{item}}</option>
      </select> -->
      <ul class="list-group pe-auto">
        <li class="list-group-item list-group-item-action"  @click="change(item)">全部商品</li>
        <li class="list-group-item list-group-item-action" v-for="(item, index) in productName" :key="index" @click="change(item)">{{item}}</li>
      </ul>
      <!-- <ul class="list-group pe-auto" @click="changeProducts">
        <li class="list-group-item list-group-item-action active">全部商品</li>
        <li class="list-group-item list-group-item-action">測試分類</li>
        <li class="list-group-item list-group-item-action">戶外的家</li>
        <li class="list-group-item list-group-item-action">新手登山</li>
      </ul> -->
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
      // renderDatas: [],
      // 篩選產品列表
      typeProducts: {
        // all: [], // 全部商品
        // new: [], // 登山新手
        // home: [], // 戶外的家
        // test: [] // 測試分類
      },
      productName: []
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
          // this.filterDates(this.products)
          this.products.filter(item => {
            // console.log(item)
            // indexOf === -1 為找不到該元素
            // 拿空的陣列productName去做indexOf，indexOf對象為item.category
            // 如果在productName找不到元素的話，就push進去productName裡面
            if (this.productName.indexOf(item.category) === -1) {
              this.productName.push(item.category)
              // console.log(this.productName)
            }
          })
          this.category.type = this.products.map(item => Object.values(item)[0])
        })
    },
    change (item) {
      // console.log(item)
      // this.typeProducts = item
      this.typeProducts = this.products.filter(el => {
        if (item === el.category) {
          return el
        }
      })
      // this.typeProducts = this.products.filter(item => {
      //   if (this.category.type === '') {
      //     // console.log(item.category === this.category.type)
      //     // console.log(item.category)
      //     return this.products
      //   } else {
      //     return item.category === this.category.type
      //   }
      // })
    }
    // 產品分類
    // filterDates (allProducts) {
    //   allProducts.forEach(item => {
    //     // console.log(item.category)
    //     if (item.category === '新手登山') {
    //       this.typeProducts.new.push(item)
    //     } else if (item.category === '戶外的家') {
    //       this.typeProducts.home.push(item)
    //     } else if (item.category === '測試分類') {
    //       this.typeProducts.test.push(item)
    //     } else {
    //       this.typeProducts.all = this.products
    //     }
    //   })
    // },
    // 表單篩選
    // changeProducts (e) {
    //   if (e.target.innerText === '全部商品') {
    //     this.products = this.typeProducts.all
    //   } else if (e.target.innerText === '新手登山') {
    //     this.products = this.typeProducts.new
    //   } else if (e.target.innerText === '戶外的家') {
    //     this.products = this.typeProducts.home
    //   } else if (e.target.innerText === '測試分類') {
    //     this.products = this.typeProducts.test
    //   }
    // }
    // change () {
    //   this.typeProducts = this.products.filter(item => {
    //     if (this.category.type === '') {
    //       // console.log(item.category === this.category.type)
    //       // console.log(item.category)
    //       return this.products
    //     } else {
    //       return item.category === this.category.type
    //     }
    //   })
    // }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
