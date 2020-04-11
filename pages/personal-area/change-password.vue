<template>
  <div>
    <div class="main-content__title">Личный кабинет</div>
    <user-info>
      <navigation-menu current-tab="change-password" />
      <user-change-password />
    </user-info>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/navigationMenu";
  import UserChangePassword from "~/components/personal-area/UserChangePassword";
  import UserInfo from "~/components/personal-area/UserInfo";

  export default {
    components: {NavigationMenu, UserChangePassword, UserInfo},
    validate ({ store }) {
      return store.state.user.data
    },
    head: {
      title: 'Личный кабинет'
    }
  }
</script>

<style lang="scss">

</style>
