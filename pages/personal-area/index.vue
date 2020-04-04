<template>
  <div>
    <div class="main-content__title">Личный кабинет</div>
    <div class="user-info">
      <navigation-menu current-tab="main-info" />
      <UserAvatar />
      <personalInfo />
      <UserStatisticPrev />
    </div>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/navigationMenu";
  import UserAvatar from "~/components/personal-area/userAvatar";
  import personalInfo from "~/components/personal-area/personalInfo";
  import UserStatisticPrev from "~/components/personal-area/UserStatisticPrev";
  import UserChangePassword from "~/components/personal-area/UserChangePassword";
  import UserStatisticFull from "~/components/personal-area/UserStatisticFull";

  export default {
    components: {NavigationMenu, UserAvatar, personalInfo,
      UserStatisticPrev, UserChangePassword, UserStatisticFull},

    validate ({ store }) {
      return store.state.user.data
    },
    head: {
      title: 'Личный кабинет'
    }
  }
</script>

<style lang="scss">
  .main-content__title {
    padding-top: 30px;
    color: #c6c6c6;
    font-size: 20px;
    text-align: center;
  }

  .user-info {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: #716556;
  }
</style>
