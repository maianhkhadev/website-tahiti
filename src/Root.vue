<template>
  <div id="root">
    <a class="logo" href="#">
      <img src="~@/assets/images/logo.png" alt=""/>
    </a>
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted () {

    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>

<style lang="scss" scoped>
  .logo {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    
    img {
      width: 14rem;
      height: auto;
    }
  }
</style>
