<template>
  <div class="form-wrapper">
    <form class="form forgot-password-form">
      <div class="form__item">
        <input-placeholder type="email" placeholder="Введите Email или логин"/>
      </div>
      <div class="form__item">
        <div class="form-block__bottom">
          <button class="form__button"><span>Восстановить пароль</span></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    import InputPlaceholder from "~/components/forms/InputPlaceholder";

    export default {
      components: {InputPlaceholder}
    }
</script>

<style lang="scss">
  @import "~/assets/form";
</style>
