<template>
  <div class="navigation-menu">
    <nuxt-link
      :class="{'navigation-menu__item': true, 'navigation-menu__item_current': currentTab === 'main-info'}"
      to="/personal-area/"
    >
      Основная информация
    </nuxt-link>
    <media :query="{minWidth: 971}">
      <nuxt-link
        :class="{'navigation-menu__item': true, 'navigation-menu__item_current': currentTab === 'statistic-games'}"
        to="/personal-area/stats/"
      >
        Статистика игр
      </nuxt-link>
    </media>
    <nuxt-link
      :class="{'navigation-menu__item': true,  'navigation-menu__item_current': currentTab === 'change-password'}"
      to="/personal-area/change-password/"
    >
      Сменить пароль
    </nuxt-link>
    <nuxt-link
      :class="{'navigation-menu__item': true, 'navigation-menu__item_current': currentTab === 'edit-personal-data'}"
      to="/personal-area/edit-personal-data"
    >
      Редактировать данные
    </nuxt-link>
  </div>
</template>

<script>
  import Media from 'vue-media';

  export default {
    props: ['currentTab'],
    components: {Media}
  }
</script>


<style lang="scss">
  @import "assets/variables";

  .navigation-menu {
    flex: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
  }

  .navigation-menu__item {
    color: #b18b48;
    margin-bottom: 10px;
    flex: none;
    padding-right: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #b18b48;
    }
  }

  .navigation-menu__item_current {
    border-bottom: 1px solid #b18b48;
  }
</style>
