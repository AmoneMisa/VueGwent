<template>
  <div class="user-info__personal">
    <div class="personal-info">
      <div class=" personal-info__item">Ваш ник:
        <span class="personal-info__username">{{ user.login }}</span>
      </div>
      <div class="personal-info__item">Ваше имя:
        <span class="personal-info__name">{{ user.name }}</span>
      </div>
      <div class=" personal-info__item">Ваша почта:
        <span class="personal-info__email">{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    }
  }
</script>

<style lang="scss">
  .user-info__personal {
    margin-top: 20px;
    width: 405px;
  }

  .personal-info__item {
    margin-bottom: 10px;
    text-align: left;
  }

  .personal-info__username,
  .personal-info__name,
  .personal-info__email {
    color: #b18b48;
  }
</style>
