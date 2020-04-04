<template>
  <div>
    <div class="main-content__title">Личный кабинет</div>
    <div class="user-info">
      <navigation-menu current-tab="statistic-games" />
      <user-statistic-full />
    </div>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/navigationMenu";
  import UserStatisticFull from "~/components/personal-area/UserStatisticFull";

  export default {
    components: {NavigationMenu, UserStatisticFull},
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
