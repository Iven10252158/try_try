<template>
    <div class="card">
        <div class="card-body">
            我是內層元件
            {{user.name}}/{{user.uuid}}
        </div>
    </div>
</template>
<script>
export default {
  inject: ['user']
}
</script>
