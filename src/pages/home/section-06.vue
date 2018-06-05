<template>
  <section ref="section">
    <img ref="symbol" class="deco-02" src="~@/assets/images/home/section-06/deco-02.png" alt=""/>
    <img class="deco-01" src="~@/assets/images/home/section-06/deco-01.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="section-content">
            <div class="title">Nous sommes plus qu'une compagnie aérienne</div>
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

      self.$refs.section.onEnter = function () { console.log('section-06 enter') }
      self.$refs.section.onLeave = function () { console.log('section-06 leave') }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #003865;
    height: 100vh;

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
        padding-left: 16rem;
        padding-right: 16rem;
      }
    }

    .deco-01 {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
    .deco-02 {
      position: absolute;
      top: 15%;
      right: 0%;
      transition: all 0.035s ease-in;
      // transform: translateY(-50%);
    }
  }
</style>
