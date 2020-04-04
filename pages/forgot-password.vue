<template>
  <div class="main-center-wrapper">
    <form-tabs current-tab="forgot-password-form" />
    <forgot-password-form />
  </div>
</template>

<script>

import FormTabs from "../components/forms/FormTabs";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
export default {
  components: {
    FormTabs, ForgotPasswordForm
  },
  computed: {
    user: function () {
      return this.$store.state.user.data;
    }
  },
  validate ({ store }) {
    return !store.state.user.data
  },
  head: {
    title: 'Восстановление пароля'
  }
}
</script>

<style lang="scss">
</style>

