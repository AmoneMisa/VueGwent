<template>
  <form class="password-block user-form-block" @submit.prevent="sendForm">
    <div class="password-block__title user-form-block__title">Изменить пароль</div>
    <div class="password-block__item user-form-block__item">
      <input-placeholder v-model="currentPassword" placeholder="Введите текущий пароль" type="password"/>
    </div>
    <div class="password-block__item user-form-block__item">
      <input-placeholder v-model="password" placeholder="Введите новый пароль" type="password"/>
    </div>
    <div class="password-block__item user-form-block__item">
      <input-placeholder v-model="confirmPassword" placeholder="Повторите новый пароль" type="password"/>
    </div>
    <media :query="{minWidth: 971}">
    <custom-button>Изменить пароль</custom-button>
    </media>
    <media :query="{maxWidth: 970}">
      <custom-button class="button_mobile">Изменить пароль</custom-button>
    </media>
    <span class="error">{{ error }}</span>
  </form>
</template>

<script>
  import InputPlaceholder from "~/components/forms/InputPlaceholder";
  import Button from "../Button";
  import Media from "vue-media";

  export default {
    components: {
      InputPlaceholder,
      'custom-button': Button,
      Media
    },
    data() {
      return {
        currentPassword: '',
        password: '',
        confirmPassword: '',
        error: null
      };
    },
    methods: {
      async sendForm() {
        this.error = null;

        if (this.password !== this.confirmPassword) {
          this.error = 'Пароли не совпадают';
          return;
        }

        try {
          await this.$axios.$post('/api/user/change_password/', {
            current_password: this.currentPassword,
            password: this.password
          });
          alert('Пароль успешно изменён');
          this.currentPassword = '';
          this.password = '';
          this.confirmPassword = '';
        } catch (e) {
          this.error = e.message;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/personalAreaForms';
</style>
