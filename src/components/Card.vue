<template>
    <div class="card">
  <div class="card-body">
      {{user.name}}/{{user.uuid}}
    <innerComponent></innerComponent>
  </div>
</div>
</template>

<script>
const innerComponent = {
  template: `<div class="card">
    <div class="card-body">
        {{user.name}}/{{user.uuid}}
    </div>
</div>`,
  inject: ['user'],
  mounted () {
    console.log(this.user)
  }
}

export default {
  components: {
    innerComponent
  },
  inject: ['user']
}
</script>
