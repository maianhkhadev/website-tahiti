<template>
  <section ref="section">
    <div class="slides">
      <div class="slide slide-01" data-color="#2d2926">
        <div class="slide-content">
          <div class="title">Polynesian</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-01.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-01.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-01.png" alt=""/>
      </div>
      <div class="slide slide-02" data-color="#003865">
        <div class="slide-content">
          <div class="title">Heartfelt</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-02.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-02.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-02.png" alt=""/>
      </div>
      <div class="slide slide-03" data-color="#4e6548">
        <div class="slide-content">
          <div class="title">Exceptional</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-03.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-03.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-03.png" alt=""/>
      </div>
      <div class="slide slide-04" data-color="#2dccd3">
        <div class="slide-content">
          <div class="title">Positive</div>
        </div>

        <img class="back" src="~@/assets/images/home/section-05/back-04.png" alt=""/>
        <img class="middle" src="~@/assets/images/home/section-05/slide-04.png" alt=""/>
        <img class="front" src="~@/assets/images/home/section-05/front-04.png" alt=""/>
      </div>

      <slide-nav class="slide-nav"></slide-nav>
    </div>
  </section>
</template>

<script>
  import { TweenLite, TimelineLite, Power1 } from 'gsap/all'

  import SlideNav from '@/components/slide-nav'

  export default {
    data () {
      return {

      }
    },
    components: {
      'slide-nav': SlideNav
    },
    methods: {
      setDefaultSlide: function () {
        let self = this

        let slide = document.querySelector('.section-05 .slide')
        slide.classList.add('active')

        TweenLite.set(self.$refs.section, { backgroundColor: slide.dataset.color })

        let slideTitle = slide.querySelector('.title')
        TweenLite.set(slideTitle, { opacity: 1 })

        let slideFront = slide.querySelector('.front')
        TweenLite.set(slideFront, { y: '0%', visibility: 'visible' })

        let slideMiddle = slide.querySelector('.middle')
        TweenLite.set(slideMiddle, { visibility: 'visible' })

        let slideBack = slide.querySelector('.back')
        TweenLite.set(slideBack, { y: '0%', visibility: 'visible' })
      },
      slideGoTo: function (slideOut, slideIn) {
        let self = this

        slideIn.classList.add('active')
        slideOut.classList.remove('active')

        TweenLite.to(self.$refs.section, 0.5, { backgroundColor: slideIn.dataset.color, ease: Power1.easeInOut })

        let slideInFront = slideIn.querySelector('.front')
        TweenLite.set(slideInFront, { y: '150%', visibility: 'visible' })
        TweenLite.to(slideInFront, 0.5, { y: '0%', ease: Power1.easeInOut })

        let slideOutFront = slideOut.querySelector('.front')
        TweenLite.to(slideOutFront, 0.5, { y: '-150%', ease: Power1.easeInOut })
        TweenLite.set(slideOutFront, { delay: 0.5, y: '0%', visibility: 'hidden' })

        let slideInBack = slideIn.querySelector('.back')
        TweenLite.set(slideInBack, { y: '-150%', visibility: 'visible' })
        TweenLite.to(slideInBack, 0.5, { y: '0%', ease: Power1.easeInOut })

        let slideOutBack = slideOut.querySelector('.back')
        TweenLite.to(slideOutBack, 0.5, { y: '150%', ease: Power1.easeInOut })
        TweenLite.set(slideOutBack, { delay: 0.5, y: '0%', visibility: 'hidden' })

        let slideInMiddle = slideIn.querySelector('.middle')
        TweenLite.to(slideInMiddle, 0.5, { visibility: 'visible', ease: Power1.easeInOut })

        let slideOutMiddle = slideOut.querySelector('.middle')
        TweenLite.to(slideOutMiddle, 0.5, { visibility: 'hidden', ease: Power1.easeInOut })

        let slideInTitle = slideIn.querySelector('.title')
        TweenLite.set(slideInTitle, { opacity: 1 })

        let slideOutTitle = slideOut.querySelector('.title')
        TweenLite.set(slideOutTitle, { opacity: 0 })

        let timeline = new TimelineLite()
        let spans = slideIn.querySelectorAll('.title .letter')
        spans.forEach(function (span) {
          timeline.from(span, 0.125, { y: 100, opacity: 0 })
        })
        timeline.play()
      },
      nextSlide: function (from, to) {
        let self = this

        let slideOut = document.querySelector('.slides .active')
        let slideIn = slideOut.nextElementSibling === null ? document.querySelector('.slides .slide:first-child') : slideOut.nextElementSibling

        self.slideGoTo(slideOut, slideIn)
      }
    },
    mounted () {
      let self = this

      let timer = null
      let images = document.querySelectorAll('.slides .slide img')

      images.forEach(function(image) {
        TweenLite.set(image, { visibility: 'hidden' })
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

        self.setDefaultSlide()
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
    background-color: #2d2926;

    @media screen and (min-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .slides {
      position: relative;
      width: 100%;
      height: 100%;

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

      .slide-nav {
        position: absolute;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%);
        z-index: 1050;
      }
    }
  }
</style>
