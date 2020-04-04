<template>
  <div class="form-wrapper">
    <form class="form forgot-password-form">
      <div class="form__item">
        <input type="email" class="form__field" placeholder="Введите Email или логин">
      </div>
      <div class="form__item">
        <input type="password" class="form__field"
               placeholder="Введите пароль, который Вы помните">
      </div>
      <div class="form__item">
        <input type="email" class="form__field" placeholder="Введите Email для связи">
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
    export default {
    }
</script>

<style lang="scss">
  @import "~/assets/form";
</style>
