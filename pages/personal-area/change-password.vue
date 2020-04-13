<template>
  <div>
    <div class="personal-area__title">Личный кабинет</div>
    <user-info>
      <navigation-menu current-tab="change-password" />
      <div class="user-info__password">
        <user-change-password />
      </div>
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
  .personal-area__title {
    padding-top: 30px;
    color: #c6c6c6;
    font-size: 20px;
    text-align: center;
  }
</style>
