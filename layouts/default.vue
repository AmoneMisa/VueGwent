<template>
  <div class="main">
    <div class="main__header">
      <custom-header/>
    </div>
    <div class="main__content">
      <div class="wrapper">
        <div class="main-content">
          <nuxt/>
        </div>
      </div>
    </div>
    <div class="main__footer">
      <custom-footer/>
    </div>
  </div>
</template>
<script>
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';

  export default {
    components: {
      'custom-header': Header,
      'custom-footer': Footer
    }
  }
</script>
<style lang="scss">
  @import "~/assets/fontawesome/scss/fontawesome";
  @import "~/assets/fontawesome/scss/regular";
  @import "~/assets/fontawesome/scss/solid";
  @import "~/assets/fontawesome/scss/light";
  @import "~/assets/fontawesome/scss/brands";

  @font-face {
    font-family: WitcherFont-Light;
    src: url("/witcher-fonts/1_PF Din Text Cond Pro.ttf");
  }

  body {
    font-family: "WitcherFont-Light", sans-serif;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #000000;
    color: #ffffff;
  }

  button, input {
    outline: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .wrapper {
    width: 1450px;
    margin: 0 auto;
  }

  .main {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
  }

  .main__header,
  .main__footer {
    flex: none;
  }

  .main__content {
    flex: auto;
  }

  .main-content {
    padding: 20px 0;
  }

  .main-center-wrapper {
    padding: 150px 0 50px;
  }
</style>

