<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">產品列表</router-link> |
     <router-link to="/try">TRY</router-link>
  </div>

  <router-view/>
</template>

<style lang="scss">
@import './assets/all';
</style>
