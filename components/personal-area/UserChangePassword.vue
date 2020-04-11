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
    <button class="password-block__button-submit">Изменить пароль</button>
    <span class="error">{{ error }}</span>
  </form>
</template>

<script>
  import InputPlaceholder from "~/components/forms/InputPlaceholder";

  export default {
    components: {InputPlaceholder},
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

  .password-block__button-submit {
    height: 40px;
    text-align: center;
    background-color: #1d1d18;
    transition: box-shadow .2s ease-in-out;
    color: #a5a195;
    border: 1px solid #1d1d18;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset;
    cursor: pointer;
    padding: 0 10px;
    width: 160px;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset, 0 0 15px 5px rgba(#feaf5c, 0.6);
    }
  }

  .password-block__item {
    margin-bottom: 20px;
  }
</style>
