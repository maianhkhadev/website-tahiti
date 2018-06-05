<template>
  <section ref="section">
    <video autoplay muted loop>
      <source src="~@/assets/videos/section-02.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <div class="overlay"></div>

    <div class="container">
      <div class="row">
        <div class="col-xl-6 mx-auto">
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
      let tl = new TimelineLite()

      window.sliceText(self.$refs.text)

      self.$refs.section.onEnter = function () {
        tl.restart()
        tl.play()
      }
      self.$refs.section.onLeave = function () {
        tl.stop()
      }

      let spans = document.querySelectorAll('.section-02 .slice-text span')
      spans.forEach(function (span) {
        tl.from(span, 0.5, { y: 100, opacity: 0 })
      })
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a09074;
    height: 100vh;

    video {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
    }

    .overlay {
      position: absolute;
      background-color: rgba(#000000, 0.25);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
  }
</style>
