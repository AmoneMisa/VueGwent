<template>
    <div class="form-tabs">
      <nuxt-link
        :class="{'form-tabs__tab': true, 'form-tabs__tab_active': currentTab === 'login-form'}"
        to="/"
      >
        Вход
      </nuxt-link>
      <nuxt-link
        :class="{'form-tabs__tab': true, 'form-tabs__tab_active': currentTab === 'register-form'}"
        to="/register/"
      >
        Регистрация
      </nuxt-link>
      <nuxt-link
        :class="{'form-tabs__tab': true, 'form-tabs__tab_active': currentTab === 'forgot-password-form'}"
        to="/forgot-password/"
      >
        Восстановить пароль
      </nuxt-link>
    </div>
</template>

<script>
    export default {
      props: ['currentTab']
    }
</script>

<style lang="scss">
  @import "~/assets/_variables";

  .form-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }

  .form-tabs__tab {
    margin: 0 30px;
    color: #bc8e46;
    font-size: 20px;
    border-bottom: 1px solid transparent;
    padding-bottom: 10px;
  }

  .form-tabs__tab_active {
    border-bottom-color: #bc8e46;
  }
</style>
