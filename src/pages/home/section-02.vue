<template>
  <section ref="section">
    <img class="deco-02" src="~@/assets/images/home/section-02/deco-02.png" alt=""/>
    <img class="deco-01" src="~@/assets/images/home/section-02/deco-01.png" alt=""/>
    <img class="deco-03" src="~@/assets/images/home/section-02/deco-03.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-6 mr-auto">
          <div class="section-content">
            <div class="subtitle">notre identité visuelle</div>
            <div class="title">Nous sommes la force et l'esprit de <span ref="text" class="slice-text">nos îles</span></div>
            <div class="content">Inspirée de notre histoire collective, de notre dynamique, de nos aspirations, notre marque est unique. Son objectif est de créer des expériences exceptionnelles et authentiques permettant de construire un avenir positif et durable pour notre pays et notre peuple.Nous sommes la force et l'esprit de nos îles</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { TimelineLite } from 'gsap/all'

  export default {
    data () {
      return {

      }
    },
    mounted () {
      let self = this

      window.sliceText(self.$refs.text)

      let timeline = new TimelineLite()
      let spans = document.querySelectorAll('.section-02 .slice-text span')
      spans.forEach(function (span) {
        timeline.from(span, 0.5, { y: 100, opacity: 0 })
      })

      self.$refs.section.onEnter = function () {
        timeline.restart()
        timeline.play()
      }
      self.$refs.section.onLeave = function () {
        timeline.stop()
      }
    }
  }
</script>

<style lang="scss">
  .section-02 {

    .slice-text {
      overflow: hidden;

      .letter {
        display: inline-block;
        color: #fce300;
      }
    }
  }
</style>

<style lang="scss" scoped>
  section {
    background-color: #a09074;

    @media screen and (min-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 4.75rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 3.5rem;
      }
      .subtitle {
        color: #ffffff;
        font-size: 0.625rem;
        font-family: 'Gotham Book';
        text-transform: uppercase;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 6.25rem;
        padding-right: 6.25rem;
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
      bottom: 0;
      right: 0;
    }
    .deco-03 {
      position: absolute;
      top: 25%;
      right: 40%;
      transform: translateY(-50%);
    }
  }
</style>
