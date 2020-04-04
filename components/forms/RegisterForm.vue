<template>
  <div class="form-wrapper">
    <form class="form register-form" @submit.prevent="submit">
      <div class="form__item">
        <input class="form__field registration-login" placeholder="Введите Логин" v-model="login">
      </div>
      <div class="form__item">
        <input class="form__field registration-name" placeholder="Введите Имя" v-model="name">
      </div>
      <div class="form__item" v-show="false">
        <input type="email" class="form__field registration-email" placeholder="Введите Email">
      </div>
      <div class="form__item">
        <input type="password" class="form__field registration-password" placeholder="Введите пароль" v-model="password">
      </div>
      <div class="form__item">
        <input type="password" class="form__field registration-password-confirm" placeholder="Введите повторно пароль"
               v-model="confirm_password">
      </div>
      <div class="form__item">
        <button class="form__button" :disabled="loading">
          {{ loading ? 'Подождите..' : 'Зарегистрироваться' }}
        </button>
      </div>
      <div class="form__item" v-if="error">
        <span class="form__error">{{ error }}</span>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
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
