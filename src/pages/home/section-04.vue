<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-7 mx-auto">
          <div class="section-content">
            <div class="title">Notre nouvelle marque est la vôtre</div>
            <div class="content">Notre marque est une plateforme vers un monde d'expériences, de découvertes et d'aventures exaltantes dans les îles polynésiennes.</div>
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
    background-color: #c63663;
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
        padding-left: 11rem;
        padding-right: 11rem;
      }
    }
  }
</style>
