<template>
  <div>
    <div class="personal-area__title">Личный кабинет</div>
    <user-info>
      <navigation-menu current-tab="edit-personal-data"/>
      <div class="user-info__edit-personal-data">
        <edit-personal-data/>
      </div>
    </user-info>
  </div>
</template>

<script>
  import NavigationMenu from "~/components/personal-area/NavigationMenu";
  import UserInfo from "~/components/personal-area/UserInfo";
  import EditPersonalData from "~/components/personal-area/EditPersonalData";

  export default {
    components: {NavigationMenu, EditPersonalData, UserInfo},
    validate({store}) {
      return store.state.user.data;
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
