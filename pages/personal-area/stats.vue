<template>
  <div>
    <div class="personal-area__title">Личный кабинет</div>
    <user-info>
      <navigation-menu current-tab="statistic-games" />
      <user-statistic-full />
    </user-info>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/NavigationMenu";
  import UserStatisticFull from "~/components/personal-area/UserStatisticFull";
  import UserInfo from "~/components/personal-area/UserInfo";

  export default {
    components: {NavigationMenu, UserStatisticFull, UserInfo},
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
