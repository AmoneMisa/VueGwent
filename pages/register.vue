<template>
  <div class="main-center-wrapper">
    <media :query="{minWidth:971}">
      <form-tabs current-tab="register-form"/>
    </media>
    <media :query="{minWidth:971}">
      <register-form/>
    </media>
    <media :query="{maxWidth:970}">
      <form-tabs-mobile current-tab="register-form"/>
    </media>
     <media :query="{maxWidth:970}">
      <register-form-mobile/>
    </media>
  </div>
</template>

<script>
  import Media from 'vue-media'
  import FormTabsMobile from "../components/forms-mobile/FormTabs";
  import RegisterFormMobile from "../components/forms-mobile/RegisterForm";

  import FormTabs from "../components/forms/FormTabs";
  import RegisterForm from "../components/forms/RegisterForm";

  export default {
    components: {
      FormTabs, RegisterForm, Media, FormTabsMobile, RegisterFormMobile
    },
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    },
    head: {
      title: 'Регистрация'
    },
    validate({store}) {
      return !store.state.user.data
    }
  }
</script>

<style lang="scss">
</style>

