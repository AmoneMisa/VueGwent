<template>
<button class="button">{{ button_text }}</button>
</template>

<script>
    export default {
    props: ['button_text']
    }
</script>

<style lang="scss">
  @import "assets/variables";

  .button {
    height: 40px;
    text-align: center;
    background-color: $button;
    transition: box-shadow .2s ease-in-out;
    color: $buttonText;
    border: 1px solid $button;
    border-radius: 5px;
    box-shadow: $customShadow;
    cursor: pointer;
    padding: 0 10px;
    width: 160px;
    font-size: 16px;
    &:hover {
      box-shadow: $shadowHoverButton;
    }
  }

  .button_dark {
    background-color: $buttonDark!important;
    color: $buttonDarkText!important;
    border: 1px solid $buttonDark!important;
  }

  .button_font-low {
    font-size: 14px!important;
  }

  .button_middle {
    width: 120px!important;
  }

  .button_little {
    width: 80px!important;
  }

  .button_mobile {
    height: 30px!important;
    width: 140px!important;
    font-size: 14px!important;
    transition: none!important;
    padding: 0 5px!important;
    &:hover {
      box-shadow: $customShadow!important;
    }
  }

  .button_mobile_big {
    width: 120px!important;
  }

  .button_mobile_middle {
    width: 80px!important;
  }

  .button_mobile_little {
    width: 40px!important;
  }
</style>
