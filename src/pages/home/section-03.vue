<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 ml-auto">
          <div class="section-content">
            <div class="subtitle">notre marque</div>
            <div class="title">Nous déployons nos ailes depuis 1996</div>
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
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #003865;
    height: 100vh;

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 5rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 2.25rem;
      }
      .subtitle {
        color: #ffffff;
        font-size: 0.625rem;
        font-family: 'Gotham Book';
        text-transform: uppercase;
        margin-bottom: 0.75rem;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 6.75rem;
        padding-right: 6.75rem;
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
  }
</style>
