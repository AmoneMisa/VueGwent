<template>
  <div>
    <div class="main-content__title">Личный кабинет</div>
    <div class="user-info">
      <navigation-menu current-tab="change-password" />
      <user-change-password />
    </div>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/navigationMenu";
  import UserChangePassword from "~/components/personal-area/UserChangePassword";

  export default {
    components: {NavigationMenu, UserChangePassword},
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
