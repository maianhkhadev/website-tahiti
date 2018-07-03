<template>
  <section ref="section">
    <a class="logo" href="#">
      <img src="~@/assets/images/logo.png" alt=""/>
    </a>
    <svg viewBox="0 0 1920 1280">
      <defs>
        <radialGradient id="maskGradient">
          <stop offset="50%" stop-color="#fff"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
        <mask id="theMask">
          <circle ref="circle" r="0" fill="url(#maskGradient)" cx="1500" cy="500" />
          <image xlink:href="~@/assets/images/home/section-01/flower.png" x="450" y="-400" width="1845" height="1779" />
        </mask>
      </defs>
      <image xlink:href="~@/assets/images/home/section-01/overlay.jpg" x="0" y="0" width="1920" height="1280"/>
      <g mask="url(#theMask)" >
        <image xlink:href="~@/assets/images/home/section-01/main.jpg" x="0" y="0" width="1920" height="1280" />
      </g>
    </svg>

    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section-content">
            <div class="title">Ia Orana</div>
            <div class="subtitle">Embarquez pour une nouvelle aventure.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { TimelineLite, Power2 } from 'gsap/all'

  export default {
    data () {
      return {

      }
    },
    mounted () {
      let self = this

      var tl = new TimelineLite()

      tl.to(self.$refs.circle, 2, { attr: { r: 2400 }, ease: Power2.easeIn });
      tl.reversed(true);

      self.$refs.section.addEventListener('mousedown', function () {
        tl.reversed(false);
      })
      self.$refs.section.addEventListener('mouseup', function () {
        tl.reversed(true);
      })

      self.$refs.section.onEnter = function () { console.log('section-01 enter') }
      self.$refs.section.onLeave = function () { console.log('section-01 leave') }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    background-color: #000000;

    @media screen and (min-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

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

    svg {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 13rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
      }
      .subtitle {
        color: #ffffff;
        font-size: 0.875rem;
        font-family: 'Gotham';
        font-weight: 300;
      }
    }
  }
</style>
