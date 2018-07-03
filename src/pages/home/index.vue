<template>
    <div class="sections">
      <section-01 id="section-01" class="section-01"></section-01>

      <section-02 id="section-02" class="section-02"></section-02>

      <section-03 id="section-03" class="section-03"></section-03>

      <section-04 id="section-04" class="section-04"></section-04>

      <section-05 id="section-05" class="section-05"></section-05>

      <section-06 id="section-06" class="section-06"></section-06>

      <section-07 id="section-07" class="section-07"></section-07>

      <section-08 id="section-08" class="section-08"></section-08>
    </div>
</template>

<script>
  import Scroll from '@/plugins/scroll'

  import Section01 from './section-01'
  import Section02 from './section-02'
  import Section03 from './section-03'
  import Section04 from './section-04'
  import Section05 from './section-05'
  import Section06 from './section-06'
  import Section07 from './section-07'
  import Section08 from './section-08'

  export default {
    data () {
      return {

      }
    },
    components: {
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04,
      'section-05': Section05,
      'section-06': Section06,
      'section-07': Section07,
      'section-08': Section08
    },
    mounted () {

      Scroll.init()
    }
  }
</script>

<style lang="scss" scoped>
  .sections {
    position: relative;
    height: 100vh;
    overflow: hidden;

    section {

      @media screen and (min-width: 1200px) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
</style>
