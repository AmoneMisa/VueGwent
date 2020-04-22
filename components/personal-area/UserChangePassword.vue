<template>
  <form class="password-block" @submit.prevent="sendForm">
    <div class="password-block__title">Изменить пароль</div>
    <div class="password-block__item">
      <input-placeholder v-model="currentPassword" placeholder="Введите текущий пароль" type="password"/>
    </div>
    <div class="password-block__item">
      <input-placeholder v-model="password" placeholder="Введите новый пароль" type="password"/>
    </div>
    <div class="password-block__item">
      <input-placeholder v-model="confirmPassword" placeholder="Повторите новый пароль" type="password"/>
    </div>
    <media :query="{minWidth: 971}">
    <custom-button button_text="Изменить пароль"/>
    </media>
    <media :query="{maxWidth: 970}">
      <custom-button button_text="Изменить пароль" class="button_mobile"/>
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
  .password-block {
    display: flex;
    flex-direction: column;
  }

  .password-block__title {
    color: #c6c6c6;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .password-block__item {
    margin-bottom: 20px;
  }
</style>
