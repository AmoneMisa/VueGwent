<template>
  <div class="main-center-wrapper">
    <form-tabs current-tab="register-form" />
    <register-form />
  </div>
</template>

<script>

import FormTabs from "../components/forms/FormTabs";
import RegisterForm from "../components/forms/RegisterForm";
export default {
  components: {
    FormTabs, RegisterForm
  },
  computed: {
    user: function () {
      return this.$store.state.user.data;
    }
  },
  head: {
    title: 'Регистрация'
  },
  validate ({ store }) {
    return !store.state.user.data
  }
}
</script>

<style lang="scss">
</style>

