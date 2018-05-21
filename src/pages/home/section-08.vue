<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-5 mx-auto">
          <div class="section-content">
            <div class="title">Nous partageons Tahiti avec le monde</div>
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
    background-color: #4e6548;
    height: 100vh;

    .section-content {
      text-align: center;

      .title {
        color: #ffffff;
        font-size: 5rem;
        font-family: 'DomaineDisplay';
        font-weight: 500;
        line-height: 1;
        margin-bottom: 1.25rem;
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
  }
</style>
