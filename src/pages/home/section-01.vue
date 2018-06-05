<template>
  <section ref="section">
    <svg id="demo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <radialGradient id="maskGradient">
          <stop offset="50%" stop-color="#fff"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
        <mask id="theMask">
          <circle id="masker" r="150" fill="url(#maskGradient)" cx="800" cy="450" />
        </mask>
      </defs>
      <image id="lines" xlink:href="~@/assets/images/home/section-01/overlay.jpg" x="0" y="0" width="1600" height="900" />
      <g id="maskReveal" mask="url(#theMask)" >
        <image id="regular" xlink:href="~@/assets/images/home/section-01/main.jpg" x="0" y="0" width="1600" height="900" />
      </g>
      <circle id="ring" r="20" fill="none" stroke="#dc143c" stroke-width="2" cx="800" cy="450" />
      <circle id="dot" r="4" fill="#dc143c" cx="800" cy="450" />
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
  import { TweenMax, Power2 } from 'gsap/all'

  export default {
    data () {
      return {

      }
    },
    mounted () {
      let self = this

      console.clear();
      var svg = document.querySelector("#demo");
      var tl = new TimelineMax();
      var pt = svg.createSVGPoint();
      var ratio = 0.5625;

      tl.to("#masker", 2, {attr:{r:2400}, ease:Power2.easeIn});
      tl.reversed(true);

      function mouseHandler() {
        tl.reversed(!tl.reversed());
      }

      function getPoint(evt){
        pt.x = evt.clientX;
        pt.y = evt.clientY;
        return pt.matrixTransform(svg.getScreenCTM().inverse());
      }

      function newSize() {
        var w = window.innerWidth ;
        var h = window.innerHeight;
        if (w > h * (16/9) ) {
          TweenMax.set("#demo", { attr: { width: w, height: w * ratio } });
        } else {
          TweenMax.set("#demo", { attr: { width: h / ratio, height: h } });
        }
        var data = svg.getBoundingClientRect();
        TweenMax.set("#demo", {x:w/2 - data.width/2});
        TweenMax.set("#demo", {y:h/2 - data.height/2});
      }

      window.addEventListener("mousedown", mouseHandler)
      window.addEventListener("mouseup", mouseHandler)

      newSize()

      self.$refs.section.onEnter = function () { console.log('section-01 enter') }
      self.$refs.section.onLeave = function () { console.log('section-01 leave') }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    #demo {
      cursor: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
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
