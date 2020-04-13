<template>
    <div class="form-tabs_mobile">
      <nuxt-link
        :class="{'form-tabs__tab_mobile': true, 'form-tabs__tab_active': currentTab === 'login-form'}"
        to="/"
      >
        Вход
      </nuxt-link>
      <nuxt-link
        :class="{'form-tabs__tab_mobile': true, 'form-tabs__tab_active': currentTab === 'register-form'}"
        to="/register/"
      >
        Регистрация
      </nuxt-link>
      <nuxt-link
        :class="{'form-tabs__tab_mobile': true, 'form-tabs__tab_active': currentTab === 'forgot-password-form'}"
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

  .form-tabs_mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    flex-direction: column;
  }

  .form-tabs__tab_mobile {
    color: #bc8e46;
    font-size: 20px;
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
  }

</style>
