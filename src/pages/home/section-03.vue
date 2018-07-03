<template>
  <section ref="section">
    <img class="deco-01" src="~@/assets/images/home/section-03/deco-01.png" alt=""/>
    <img class="deco-02" src="~@/assets/images/home/section-03/deco-02.png" alt=""/>

    <div class="container">
      <div class="row">
        <div class="col-xl-7 ml-auto">
          <div class="section-content">
            <div class="subtitle">notre marque</div>
            <div class="title">Nous déployons<br>nos ailes<br>depuis <span ref="text" class="slice-text">1996</span></div>
            <div class="content">Air Tahiti Nui a été créée en 1996 pour faire découvrir nos îles au monde. Le premier vol depuis Tahiti a été opéré en novembre 1998. Depuis, chaque voyage débute à bord d’un de nos Airbus A340-300, reliant Tahiti à Paris, Los Angeles, Auckland et Tokyo. L’envol dans le futur se poursuivra à bord des Tahitian Dreamliner (Boeing B787-9).</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-footer">
      <a class="link" href="#">discover the new tahititan dreamliner</a>
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
      let spans = document.querySelectorAll('.section-03 .slice-text span')
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
  .section-03 {

    .slice-text {
      overflow: hidden;

      .letter {
        display: inline-block;
        color: #da291c;
      }
    }
  }
</style>

<style lang="scss" scoped>
  section {
    background-color: #003865;

    @media screen and (min-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .section-content {
      text-align: center;

      .subtitle {
        color: #ffffff;
        font-size: 0.5rem;
        font-family: 'Gotham Book';
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }
      .title {
        color: #ffffff;
        font-size: 5rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 1.75rem;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 10.5rem;
        padding-right: 10.5rem;
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
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .deco-02 {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
    }
  }
</style>
