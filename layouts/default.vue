<template>
  <div>
    <custom-header/>
    <nuxt/>
    <custom-footer/>
  </div>
</template>
<script>
  // import '~/assets/fontawesome/js/all.js';
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
  }

  a {
    color: white;
    text-decoration: none;
  }

  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }
</style>

