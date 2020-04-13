<template>
  <div class="main-center-wrapper">
    <media :query="{minWidth:971}">
      <form-tabs current-tab="login-form"/>
    </media>
    <media :query="{minWidth:971}">
      <login-form/>
    </media>
    <media :query="{maxWidth:970}">
      <form-tabs-mobile current-tab="login-form"/>
    </media>
    <media :query="{maxWidth:970}">
      <login-form-mobile/>
    </media>
  </div>
</template>

<script>
  import Media from 'vue-media'
  import FormTabs from "../components/forms/FormTabs";
  import LoginForm from "../components/forms/LoginForm";

  import FormTabsMobile from "../components/forms-mobile/FormTabs";
  import LoginFormMobile from "../components/forms-mobile/LoginForm";

  export default {
    components: {
      LoginForm,
      FormTabs,
      Media,
      FormTabsMobile,
      LoginFormMobile
    },
    middleware({store, redirect}) {
      if (store.state.user.data) {
        return redirect('/personal-area/')
      }
    },
    head: {
      title: 'Вход'
    },
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    }
  }
</script>

<style lang="scss">
</style>

