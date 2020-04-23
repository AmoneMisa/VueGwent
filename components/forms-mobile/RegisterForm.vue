<template>
  <div class="form-wrapper">
    <form class="form register-form" @submit.prevent="submit">
      <div class="form__item">
        <input-placeholder placeholder="Введите Логин" v-model="login"/>
      </div>
      <div class="form__item">
        <input-placeholder placeholder="Введите Имя" v-model="name"/>
      </div>
      <div class="form__item" v-show="false">
        <input-placeholder type="email" placeholder="Введите Email"/>
      </div>
      <div class="form__item">
        <input-placeholder type="password" placeholder="Введите пароль" v-model="password"/>
      </div>
      <div class="form__item">
        <input-placeholder type="password" placeholder="Введите повторно пароль"
               v-model="confirm_password"/>
      </div>
      <div class="form__item">
        <custom-button class="button__mobile_form-button" :disabled="loading">
          {{ loading ? 'Подождите..' : 'Зарегистрироваться' }}
        </custom-button>
      </div>
      <div class="form__item" v-if="error">
        <span class="form__error">{{ error }}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import InputPlaceholder from "~/components/forms/InputPlaceholder";
  import Button from "../Button";

  export default {
    components: {InputPlaceholder,'custom-button': Button},
    data: () => ({
      login: '',
      name: '',
      password: '',
      confirm_password: '',
      error: null,
      loading: false
    }),
    methods: {
      submit: async function () {
        this.error = null;

        if (this.password !== this.confirm_password) {
          this.error = 'Пароли должны совпадать';
          return;
        }

        this.loading = true;

        try {
          await this.$axios.$post('/api/register/', {
            login: this.login,
            name: this.name,
            password: this.password
          });
        } catch (e) {
          this.error = e.response.data.message;
          this.loading = false;
          return;
        }

        await this.$store.dispatch('user/reload');
        this.$nuxt.context.redirect('/personal-area/');
      }
    }
  };
</script>

<style lang="scss">
  @import "~/assets/form";
</style>
