<template>
  <button class="button"><slot></slot></button>
</template>

<script>
  export default {
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

  .button_form-button {
    width: auto;
  }

  .button__mobile_form-button {
    width: auto;
    font-size: 14px;
    height: 35px;
  }


  .button_middle {
    width: 120px;
  }

  .button_little {
    width: 70px !important;
    height: 50px!important;
    background-color: black;
  }

  .button_mobile {
    height: 30px !important;
    width: 140px !important;
    font-size: 14px !important;
    transition: none !important;
    padding: 0 5px !important;

    &:hover {
      box-shadow: $customShadow !important;
    }
  }

  .button_mobile_big {
    width: 120px !important;
  }

  .button_mobile_middle {
    width: 100px !important;
  }

  .button_mobile_icon {
    height: 35px !important;
    width: 45px !important;
    background-color: black;
  }
</style>
