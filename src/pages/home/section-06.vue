<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="section-content">
            <div class="title">Nous sommes plus qu'une compagnie aérienne</div>
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
    background-color: #003865;
    height: 100vh;

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 6.25rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 3.5rem;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 16rem;
        padding-right: 16rem;
      }
    }
  }
</style>
