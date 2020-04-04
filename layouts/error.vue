<template>
  <div class="main-center-wrapper">
    <div class="error-page">
      <div class="error-page__status-code">{{error.statusCode}}</div>
      <div class="error-page__message">{{error.message}}</div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['error'],
    head () {
      return {
        title: this.error.statusCode + ' ' + this.error.message
      }
    }
  }
</script>

<style lang="scss">
  .error-page {
    text-align: center;
  }

  .error-page__status-code {
    font-size: 72px;
    color: #bc8e46;
  }

  .error-page__message {
    font-size: 36px;
  }
</style>
