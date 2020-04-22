<template>
  <div class="form-wrapper">
    <form class="form forgot-password-form">
      <div class="form__item">
        <input-placeholder type="email" placeholder="Введите Email или логин"/>
      </div>
      <div class="form__item">
        <div class="form-block__bottom">
          <custom-button class="button_form-button">Восстановить пароль</custom-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    import InputPlaceholder from "~/components/forms/InputPlaceholder";
    import Button from "../Button";
    export default {
      components: {InputPlaceholder,
      'custom-button': Button}
    }
</script>

<style lang="scss">
  @import "~/assets/form";
</style>
