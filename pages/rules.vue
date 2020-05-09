<template>
  <div class="rules">
    <media :query="{minWidth: 971}">
      <rules-list/>
    </media>
    <media :query="{maxWidth: 970}">
      <rules-list-mobile/>
    </media>
  </div>
</template>

<script>
    import RulesList from "~/components/rules/RulesList";
    import RulesListMobile from "~/components/rules-mobile/RulesList";

    import Media from 'vue-media';

    export default {
      components: {RulesList, RulesListMobile, Media}
    }
</script>

<style lang="scss">

</style>
