<template>
    <div class="card">
  <div class="card-body">
      <!-- {{user.name}}/{{user.uuid}} -->
    <innerComponent></innerComponent>
  </div>
</div>
</template>

<script>
import innerComponent from './innerComponent'
export default {
  components: {
    innerComponent
  }
//   inject: ['user']
}
</script>
