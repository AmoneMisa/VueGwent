<template>
  <div>
    <div class="main-content__title">Личный кабинет</div>
    <user-info>
      <navigation-menu current-tab="main-info" />
      <user-avatar />
      <personal-info />
      <user-statistic-prev />
    </user-info>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/navigationMenu";
  import UserAvatar from "~/components/personal-area/userAvatar";
  import personalInfo from "~/components/personal-area/personalInfo";
  import UserStatisticPrev from "~/components/personal-area/UserStatisticPrev";
  import UserChangePassword from "~/components/personal-area/UserChangePassword";
  import UserStatisticFull from "~/components/personal-area/UserStatisticFull";
  import UserInfo from "~/components/personal-area/UserInfo";

  export default {
    components: {NavigationMenu, UserAvatar, personalInfo,
      UserStatisticPrev, UserChangePassword, UserStatisticFull, UserInfo},

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
