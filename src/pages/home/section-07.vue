<template>
  <section ref="section">
    ffsdfsd
  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      let self = this

      self.$refs.section.onEnter = function () { console.log('section-07 enter') }
      self.$refs.section.onLeave = function () { console.log('section-07 leave') }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    background-color: #c04c36;

    @media screen and (min-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  }
</style>
