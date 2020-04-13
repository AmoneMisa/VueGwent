<template>
  <div class="main-center-wrapper">
    <media :query="{minWidth:971}">
    <form-tabs current-tab="forgot-password-form" />
    </media>
    <media :query="{minWidth:971}">
      <forgot-password-form />
    </media>
    <media :query="{maxWidth:970}">
      <form-tabs-mobile current-tab="forgot-password-form" />
    </media>
    <media :query="{maxWidth:970}">
      <forgot-password-form-mobile />
    </media>
  </div>
</template>

<script>
import FormTabs from "../components/forms/FormTabs";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";

import FormTabsMobile from "../components/forms-mobile/FormTabs";
import ForgotPasswordFormMobile from "../components/forms-mobile/ForgotPasswordForm";
import Media from 'vue-media'

export default {
  components: {
    FormTabs, ForgotPasswordForm, Media, FormTabsMobile, ForgotPasswordFormMobile
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

