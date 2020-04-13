<template>
  <div class="main">
    <div class="main__header">
      <media :query="{minWidth: 971}">
        <custom-header/>
      </media>
      <media :query="{maxWidth: 970}">
        <header-mobile/>
      </media>
    </div>
    <div class="main__content">
      <media :query="{minWidth: 971}">
      <div class="wrapper">
        <div class="main-content">
          <nuxt/>
        </div>
      </div>
      </media>
      <media :query="{maxWidth: 970}">
        <div class="wrapper-mobile">
          <div class="main-content">
            <nuxt/>
          </div>
        </div>
      </media>
    </div>
    <div class="main__footer">
      <media :query="{minWidth: 971}">
      <custom-footer/>
      </media>
      <media :query="{maxWidth: 970}">
        <footer-mobile />
      </media>
    </div>
  </div>
</template>
<script>
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';

  import HeaderMobile from "~/components/HeaderMobile";
  import FooterMobile from "~/components/FooterMobile";

  import Media from 'vue-media'

  export default {
    components: {
      'custom-header': Header,
      'custom-footer': Footer,
      HeaderMobile, Media, FooterMobile
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

  @media (max-width: 750px) {
    .main-center-wrapper {
      padding: 30px 0;
    }
  }

  @media (min-width: 751px) and (max-width: 970px) {
    .main-center-wrapper {
      padding: 70px 0 50px;
    }
  }

  @media (min-width: 971px) and (max-width: 1199px) {
    .wrapper {
      width: calc(100% - 50px);
    }
  }

  @media (max-width: 750px) {
    .wrapper-mobile {
      width: calc(100% - 10px);
      margin: 0 auto;
    }
  }

  @media (min-width: 751px) and (max-width: 970px) {
    .wrapper-mobile {
      width: calc(100% - 50px);
      margin: 0 auto;
    }
  }

</style>

