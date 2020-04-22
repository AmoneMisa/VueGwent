<template>
  <div class="form-wrapper">
    <form class="form login-form" @submit.prevent="submit">
      <div class="form__item">
        <input-placeholder placeholder="Введите Email или логин" v-model="login"/>
      </div>
      <div class="form__item">
        <input-placeholder type="password" placeholder="Введите пароль" v-model="password"/>
      </div>
      <div class="form__item">
          <custom-button :disabled="loading">
            {{ loading ? 'Подождите..' : 'Войти' }}
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
    components: {InputPlaceholder, 'custom-button': Button},
    data: () => ({
      login: '',
      password: '',
      error: null,
      loading: false
    }),
    methods: {
      submit: async function () {
        this.error = null;
        this.loading = true;

        try {
          await this.$axios.$post('/api/login/', {
            login: this.login,
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
