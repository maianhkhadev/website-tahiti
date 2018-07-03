<template>
  <div>
    <div class="nav-item">01</div>
    <div class="nav-item">02</div>
    <div class="nav-item">03</div>
    <div class="nav-item">04</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .slide-nav {

    .nav-item {
      position: relative;
      width: 2.5rem;
      color: #ffffff;
      font-size: 1.125rem;
      font-family: 'DomaineDisplay';
      font-weight: 500;
      line-height: 2.5rem;

      &::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        top: 50%;
        right: -2rem;
        width: 2rem;
        height: 0.125rem;
        transform: translate(-50%);
      }
    }
  }
</style>
