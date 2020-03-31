<template>
  <div class="main-content" v-if="!user">
    <div class="wrapper main-content__wrapper">
      <div class="titles-block">
        <div class="titles-block__item authorisation-form titles-block__item_current">
          <div class="titles-block__title">Вход в личный кабинет</div>
          <div class="title__underline"></div>
        </div>
        <div class="titles-block__item registration-form">
          <div class="titles-block__title">Регистрация</div>
          <div class="title__underline"></div>
        </div>
        <div class="titles-block__item reestablished-form">
          <div class="titles-block__title">Восстановление пароля</div>
          <div class="title__underline"></div>
        </div>
      </div>
      <div class="authorisation form-block">
        <div class="wrapper form-block__wrapper">
          <form class="form login-form" @submit.prevent="sendLoginForm">
            <div class="form__item">
              <input class="form__field" placeholder="Введите Email или логин" v-model="login">
            </div>
            <div class="form__item">
              <input type="password" class="form__field" placeholder="Введите пароль" v-model="password">
            </div>
            <div class="form__item">
              <div class="form-block__bottom">
                <button class="form__button form__button-auth"><span>Войти</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="registration form-block">
        <div class="wrapper form-block__wrapper">
          <form class="form register-form">
            <div class="form__item">
              <input class="form__field registration-login" placeholder="Введите Логин" name="login">
            </div>
            <div class="form__item">
              <input class="form__field registration-name" placeholder="Введите Имя" name="name">
            </div>
            <div class="form__item">
              <input type="email" class="form__field registration-email" placeholder="Введите Email" disabled>
            </div>
            <div class="form__item">
              <input type="password" class="form__field registration-password" placeholder="Введите пароль" name="password">
            </div>
            <div class="form__item">
              <input type="password" class="form__field registration-password-confirm" placeholder="Введите повторно пароль" name="confirm_password">
            </div>
            <div class="form__item">
              <div class="form-block__bottom">
                <button class="form__button"><span>Зарегистрироваться</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="reestablished form-block">
        <div class="wrapper form-block__wrapper">
          <form class="form">
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
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
    login: '',
    password: ''
  }),
  methods: {
    sendLoginForm: async function (e) {
      try {
        await this.$axios.$post('/api/login/', {
          login: this.login,
          password: this.password
        });
        await this.$store.dispatch('user/reload');
      } catch (e) {
        alert(e.response.data.message);
      }
    },
    increment: function () {
      this.$store.commit('increment');
    }
  },
  computed: {
    counter: function () {
      return this.$store.state.counter;
    },
    user: function () {
      return this.$store.state.user.data;
    },
    fractions: function () {
      return this.$store.state.fraction.list;
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    width: 1450px;
  }

  .main-content {
    background: rgb(0, 0, 0);
  }

  .main-content__wrapper {
    padding: 150px;
  }

  .titles-block {
    justify-content: center;
    display: flex;
  }

  .titles-block__item {
    margin: 0 30px;
  }

  .titles-block__title {
    color: #bc8e46;
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .title__underline {
    padding: 5px 0;
    margin-bottom: 10px;
    border-bottom: #a1844c 1px solid;
    display: none;
  }

  .form-block {
    text-align: center;
    padding: 100px 0;
    display: none;
  }

  .authorisation {
    display: block;
  }

  .titles-block__item_current {
    .title__underline {
      display: block;
    }
  }

  .form-block__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form__item {
    margin-bottom: 20px;
  }

  .form__field {
    width: 250px;
    height: 40px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
  }

  .form__button {
    height: 40px;
    text-align: center;
    background-color: #191917;
    transition: box-shadow .2s ease-in-out;
    color: #b5aea4;
    border: 1px solid #191917;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset;
    cursor: pointer;
    padding: 0 10px;
    a {
      color: #b5aea4;
      line-height: 40px;
    }
  }

  .form__button:hover {
    box-shadow: 0 0 15px 5px rgba(239, 163, 38, 0.56);
  }

  .form__button-auth {
    width: 120px;
  }

  .form-block__bottom {
    display: flex;
    justify-content: space-between;
  }
</style>

