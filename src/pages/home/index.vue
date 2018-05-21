<template>
    <div>
      <section-01></section-01>

      <section-02></section-02>

      <section-03></section-03>

      <section-04></section-04>

      <section-05></section-05>

      <section-06></section-06>

      <section-07></section-07>

      <section-08></section-08>
    </div>
</template>

<script>
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
      
    }
  }
</script>

<style scoped>
</style>
