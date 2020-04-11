<template>
    <div class="user-info">
      <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .user-info {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: #716556;
  }

  .user-info__password {
    margin-top: 20px;
  }
</style>
