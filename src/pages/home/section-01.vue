<template>
  <section>
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
    background-image: url('~@/assets/images/home/section-01/bim.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

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
