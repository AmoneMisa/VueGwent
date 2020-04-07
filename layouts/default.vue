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

  @import "~/assets/_variables";

  @import "simplebar/dist/simplebar.min.css";

  @font-face {
    font-family: WitcherFont-Light;
    src: url("/witcher-fonts/1_PF Din Text Cond Pro.ttf");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "WitcherFont-Light", sans-serif;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #000000;
    color: #ffffff;
    cursor: url(/cursors/TheWitcher3MousePointer.cur), default;
  }

  button, input, textarea {
    outline: none;
  }

  button, input {
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

  .simplebar-vertical {
    background-color: black;
    width: 10px !important;
    overflow: visible;
  }

  .simplebar-vertical::before {
    content: "";
    position: absolute;
    background-color: #0b0b0b;
    width: 2px !important;
    margin: 0 auto;
    overflow: visible;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .simplebar-scrollbar {
    width: 10px;
    background-color: #5e4e2d;
  }

  .simplebar-scrollbar:before {
    background: #5e4e2d !important;
  }

</style>

