<template>
  <div class="user-info__password">
    <form class="password-block" @submit.prevent="sendForm">
      <div class="password-block__title">Изменить пароль</div>
      <div class="password-block__item">
        <input type="password" class="password-block__input" v-model="currentPassword" placeholder="Введите текущий пароль">
<!--        <span class="password-block__placeholder" :class="{'password-block__placeholder_active' : isActivePlaceholder === true}">Введите текущий пароль</span>-->
      </div>
      <div class="password-block__item">
        <input type="password" class="password-block__input" v-model="password" placeholder="Введите новый пароль">
<!--        <span class="password-block__placeholder" :class="{'password-block__placeholder_active' : isActivePlaceholder === true}">Введите новый пароль</span>-->
      </div>
      <div class="password-block__item">
        <input type="password" class="password-block__input" v-model="confirmPassword" placeholder="Введите повторно новый пароль">
<!--        <span class="password-block__placeholder" :class="{'password-block__placeholder_active' : isActivePlaceholder === true}">Введите повторно новый пароль</span>-->
      </div>
      <button class="password-block__button-submit">Изменить пароль</button>
      <span class="error">{{ error }}</span>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPassword: '',
        password: '',
        confirmPassword: '',
        error: null,
        // isActivePlaceholder : false
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
  .password-block__title {
    color: #c6c6c6;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .user-info__password {
    margin-top: 20px;
  }

  .password-block {
    display: flex;
    flex-direction: column;
  }

  .password-block__item {
    margin-bottom: 15px;
    position: relative;
  }

  .password-block__input {
    width: 250px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
  }

  .password-block__placeholder {
    font-size: 16px;
    color: grey;
    position: absolute;
    top: 8px;
    left: 20px;
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
</style>
