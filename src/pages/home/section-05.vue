<template>
  <section ref="section">
    <div class="slides">
      <div class="slide slide-01 active">
        <div class="slide-content">
          <div class="title">Polynesian</div>
          <div class="content">Our people are our greatest assets – everything we do should continue to come from our hearth <br>and passion inside.</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-01.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-01.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-01.png" alt=""/>
      </div>
      <div class="slide slide-02">
        <div class="slide-content">
          <div class="title">Heartfelt</div>
          <div class="content">Our people are our greatest assets – everything we do should continue to come from our hearth <br>and passion inside.</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-02.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-02.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-02.png" alt=""/>
      </div>
      <div class="slide slide-03">
        <div class="slide-content">
          <div class="title">Exceptional</div>
          <div class="content">Our people are our greatest assets – everything we do should continue to come from our hearth <br>and passion inside.</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-03.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-03.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-03.png" alt=""/>
      </div>
      <div class="slide slide-04">
        <div class="slide-content">
          <div class="title">Positive</div>
          <div class="content">Our people are our greatest assets – everything we do should continue to come from our hearth <br>and passion inside.</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-04.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-04.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-04.png" alt=""/>
      </div>
    </div>
  </section>
</template>

<script>
  import { TweenLite, TimelineLite, Power1 } from 'gsap/all'

  export default {
    data () {
      return {

      }
    },
    methods: {
      nextSlide: function () {

        let slideOut = document.querySelector('.slides .active')
        slideOut = slideOut === null ? document.querySelector('.slides .slide:first-child') : slideOut
        let slideOutTitle = slideOut.querySelector('.title')
        let slideOutBack = slideOut.querySelector('.back')
        let slideOutMiddle = slideOut.querySelector('.middle')
        let slideOutFront = slideOut.querySelector('.front')
        let slideIn = slideOut.nextElementSibling === null ? document.querySelector('.slides .slide:first-child') : slideOut.nextElementSibling
        let slideInTitle = slideIn.querySelector('.title')
        let slideInBack = slideIn.querySelector('.back')
        let slideInMiddle = slideIn.querySelector('.middle')
        let slideInFront = slideIn.querySelector('.front')

        let frontSideTimeline = new TimelineLite()
        frontSideTimeline.to(slideInFront, 0.5, { y: '0%', opacity: 1, ease: Power1.easeInOut }, 0)
        frontSideTimeline.to(slideOutFront, 0.5, { y: '150%', ease: Power1.easeInOut }, 0)
        frontSideTimeline.set(slideOutFront, { y: '-150%', opacity: 0 })

        let backSideTimeline = new TimelineLite()
        backSideTimeline.to(slideInBack, 0.5, { y: '0%', opacity: 1, ease: Power1.easeInOut }, 0)
        backSideTimeline.to(slideOutBack, 0.5, { y: '-150%', ease: Power1.easeInOut }, 0)
        backSideTimeline.set(slideOutBack, { y: '150%', opacity: 0 })

        let middleSideTimeline = new TimelineLite()
        middleSideTimeline.set(slideIn, { className: '+=active' })
        middleSideTimeline.set(slideInTitle, { opacity: 1 })
        middleSideTimeline.set(slideOut, { className: '-=active' })
        middleSideTimeline.set(slideOutTitle, { opacity: 0 })
        middleSideTimeline.to(slideInMiddle, 0.75, { delay: 0.5, opacity: 1, ease: Power1.easeInOut }, 0)
        middleSideTimeline.to(slideOutMiddle, 0.75, { delay: 0.5, opacity: 0, ease: Power1.easeInOut }, 0)

        let letterTimeline = new TimelineLite()
        let spans = slideIn.querySelectorAll('.title .letter')
        spans.forEach(function (span) {
          letterTimeline.from(span, 0.25, { y: 100, opacity: 0 })
        })
        letterTimeline.play()
      }
    },
    mounted () {
      let self = this

      let timer = null
      let images = document.querySelectorAll('.slides .slide img')

      images.forEach(function(image) {
        TweenLite.set(image, { opacity: 0 })
      })

      let titles = document.querySelectorAll('.slides .slide .title')

      titles.forEach(function(title) {
        TweenLite.set(title, { opacity: 0 })
      })

      let texts = document.querySelectorAll('.slides .slide .title')

      texts.forEach(function(text) {
        window.sliceText(text)
      })


      self.$refs.section.onEnter = function () {
        timer = setInterval(function () {
          self.nextSlide()
        }, 5000)

        self.nextSlide()
      }
      self.$refs.section.onLeave = function () {
        clearTimeout(timer)
      }
    }
  }
</script>

<style lang="scss">
  .title {
    overflow: hidden;

    .letter {
      display: inline-block;
    }
  }
</style>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2d2926;
    height: 100vh;

    .slides {

      .slide {

        .slide-content {
          position: absolute;
          top: 50%;
          left: 12.5rem;
          width: calc(100vh - 12.5rem);
          transform: translateY(-50%);
          z-index: 100;

          .title {
            color: #ffffff;
            font-size: 6.25rem;
            font-family: 'DomaineDisplay';
            margin-bottom: 2.5rem;
          }

          .content {
            color: #ffffff;
            font-size: 0.875rem;
            font-family: 'Gotham';
            font-weight: 300;
          }
        }
        .front {
          position: absolute;
          top: 0;
          right: 28rem;
          z-index: 30;
        }
        .middle {
          position: absolute;
          top: 10%;
          right: 0;
          z-index: 11;
        }
        .back {
          position: absolute;
          top: 5%;
          right: 12rem;
          z-index: 1;
        }
      }
    }
  }
</style>
