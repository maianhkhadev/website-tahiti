<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted () {

      console.log(document.querySelector('#root').clientHeight)
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>
