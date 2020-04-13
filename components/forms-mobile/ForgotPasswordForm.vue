<template>
  <div class="form-wrapper">
    <form class="form forgot-password-form" @submit.prevent="submit">
      <div class="form__item">
        <input-placeholder type="email" placeholder="Введите Email или логин" v-model="login"/>
      </div>
      <div class="form__item">
        <div class="form-block__bottom">
          <button class="form__button" :disabled="loading">
            {{ loading ? 'Подождите..' : 'Восстановить пароль' }}
          </button>
        </div>
      </div>
      <div class="form__item" v-if="error">
        <span class="form__error">{{ error }}</span>
      </div>
    </form>
  </div>
</template>

<script>
    import InputPlaceholder from "~/components/forms/InputPlaceholder";

    export default {
      components: {InputPlaceholder},
      data: () => ({
        login: '',
        error: null,
        loading: false
      }),
      methods: {
        submit: async function () {
          this.error = null;
          this.loading = true;

          try {
            await this.$axios.$post('/api/forgot-password/', {
              login: this.login
            });
          } catch (e) {
            this.error = e.response.data.message;
            this.loading = false;
            return;
          }
        }
      }
    }
</script>

<style lang="scss">
  @import "~/assets/form";
</style>
