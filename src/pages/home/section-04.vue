<template>
  <section ref="section">
    <img ref="symbol" class="deco-02" src="~@/assets/images/home/section-04/deco-02.png" alt=""/>
    <img class="deco-01" src="~@/assets/images/home/section-04/deco-01.png" alt=""/>

    <div class="container">
    <div class="row">
      <div class="col-xl-7 mx-auto">
        <div class="section-content">
          <div class="title">Notre nouvelle marque est la vôtre</div>
          <div class="content">Notre marque est une plateforme vers un monde d'expériences, de découvertes et d'aventures exaltantes dans les îles polynésiennes.</div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
  import { TweenLite, Power1 } from 'gsap/all'

  export default {
    data () {
      return {

      }
    },
    mounted () {
      let self = this

      let width = window.innerWidth * 0.2
      let height = window.innerHeight * 0.2

      self.$refs.section.addEventListener('mousemove', function (e) {
        let x = e.clientX / width
        let y = e.clientY / height

        TweenLite.to(self.$refs.symbol, 0.035, { x: `-${x}%`, y: `-${y}%`, ease: Power1.easeOut });
      })

      self.$refs.section.onEnter = function () { console.log('section-04 enter') }
      self.$refs.section.onLeave = function () { console.log('section-04 leave') }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c63663;
    height: 100vh;
    animation: colors 10s infinite;

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 6.25rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 3.5rem;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 11rem;
        padding-right: 11rem;
      }
    }

    .deco-01 {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .deco-02 {
      position: absolute;
      top: 15%;
      left: -20%;
    }
  }

  @keyframes colors {
    0% { background: #a09074; }
    25% { background: #c63663; }
    50% { background: #2d2926; }
    75% { background: #003865; }
    100% { background: #c04c36; }
  }
</style>
