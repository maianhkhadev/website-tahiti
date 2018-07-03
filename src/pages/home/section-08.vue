<template>
  <section ref="section">
    <img class="deco-04" src="~@/assets/images/home/section-08/deco-04.png" alt=""/>
    <img class="deco-03" src="~@/assets/images/home/section-08/deco-03.png" alt=""/>
    <img class="deco-02" src="~@/assets/images/home/section-08/deco-02.png" alt=""/>
    <img class="deco-01" src="~@/assets/images/home/section-08/deco-01.png" alt=""/>
    <img class="deco-05" src="~@/assets/images/home/section-08/deco-05.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-6 mx-auto">
          <div class="section-content">
            <div class="title">Nous partageons Tahiti avec<br>le <span ref="text" class="slice-text">monde</span></div>
            <div class="content">Le voyage continue…</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-footer">
      <a class="link" href="#">discover the experience</a>
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
      let spans = document.querySelectorAll('.section-08 .slice-text span')
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
  .section-08 {

    .slice-text {
      overflow: hidden;

      .letter {
        display: inline-block;
        color: #2dccd3;
      }
    }
  }
</style>

<style lang="scss" scoped>
  section {
    background-color: #4e6548;

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
        font-size: 6.25rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 1.5rem;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
      }
    }

    .section-footer {
      position: absolute;
      left: 50%;
      bottom: 3.25rem;
      transform: translateX(-50%);

      .link {
        color: #ffffff;
        font-size: 0.625rem;
        font-family: 'Gotham Book';
        text-transform: uppercase;
        border-bottom: 0.0625rem solid #ffffff;
        padding-bottom: 0.25rem;

        &:hover {
          text-decoration: unset;
        }
      }
    }

    .deco-01 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .deco-02 {
      position: absolute;
      bottom: 0;
      left: 30%;
      transform: translateX(-50%);
    }
    .deco-03 {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .deco-04 {
      position: absolute;
      top: 0;
      left: 40%;
      transform: translateX(-50%);
    }
    .deco-05 {
      position: absolute;
      top: 60%;
      right: 15%;
      transform: translateY(-50%);
    }
  }
</style>
