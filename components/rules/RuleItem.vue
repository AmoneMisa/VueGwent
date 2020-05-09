<template>
    <div class="rule-item">
      <div class="rule-item__title" :class="{'rule-item__title_mobile': mobile}">{{ rule_title }}</div>
      <div class="rule-item__description" :class="{'rule-item__title_description': mobile}">{{ rule_description }}</div>
    </div>
</template>

<script>
    export default {
     props: ['rule_title', 'rule_description', 'mobile']
    }
</script>

<style lang="scss">
  @import "assets/variables";

  .rule-item__title {
    color: $defaultTextMoreIntensive;
    font-size: 24px;
    margin: 10px 0;
    text-align: center;
  }

  .rule-item__title_mobile {
    font-size: 18px;
    margin: 5px 0;
  }

  .rule-item__description {
    color: $subTitle;
    font-size: 18px;
    height: 75px;
    text-align: center;
  }

  .rule-item__description_mobile {
    font-size: 16px;
  }
</style>
