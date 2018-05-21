<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="section-content">
            <div class="subtitle">notre identité visuelle</div>
            <div class="title">Nous sommes la force et l'esprit de nos îles</div>
            <div class="content">Inspirée de notre histoire collective, de notre dynamique, de nos aspirations, notre marque est unique. Son objectif est de créer des expériences exceptionnelles et authentiques permettant de construire un avenir positif et durable pour notre pays et notre peuple.Nous sommes la force et l'esprit de nos îles</div>
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
    background-color: #a09074;
    height: 100vh;

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 4.75rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 3.5rem;
      }
      .subtitle {
        color: #ffffff;
        font-size: 0.625rem;
        font-family: 'Gotham Book';
        text-transform: uppercase;
      }
      .content {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: 'Gotham';
        font-weight: 300;
        line-height: 2;
        padding-left: 6.25rem;
        padding-right: 6.25rem;
      }
    }
  }
</style>
