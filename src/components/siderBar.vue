<template>

    <div class="list-group" id="list-tab" role="tablist" v-for="item in items" :key="item">
      <a class="list-group-item list-group-item-action" data-bs-toggle="list">{{item.category}}</a>
    </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent" v-for="item in items" :key="item">
      <div class="tab-pane fade show active" role="tabpanel">{{item}}</div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['items']
}
</script>
