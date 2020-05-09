<template>
    <div class="rule-item">
      <div class="rule-item__title">{{ rule_title }}</div>
      <div class="rule-item__description">{{ rule_description }}</div>
    </div>
</template>

<script>
    export default {
     props: ['rule_title', 'rule_description']
    }
</script>

<style lang="scss">

</style>
