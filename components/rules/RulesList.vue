<template>
  <div class="rules">
    <div class="rules__rule-fractions">
      <div class="rule-fractions">
        <fractions-list />
      </div>
    </div>
    <div class="rules__rule-base">
      <div class="rule-base">
        <div class="rule-base__title">Основные правила игры</div>
      </div>
    </div>
    <div class="rules__rule-types">
      <div class="rule-types">
        <div class="rule-types__title">Типы карт</div>
        <div class="rule-types__list">
          <div class="rule-types__rule-icons">
            <div class="rule-icons">
              <div class="rule-icon">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Дальнобойный%20отряд.png" alt="Дальнобойный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Осадный%20отряд.png" alt="Осадный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Проворный%20отряд.png" alt="Проворный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Командирский%20Рог%20Поддержка.png" alt="Командирский рог" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Мороз.png" alt="Мороз" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Туман.png" alt="Туман" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Ливень.png" alt="Ливень" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Ясное%20Небо.png" alt="Ясное Небо" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Чучело.png" alt="Чучело" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/types/Казнь%20Поддержка.png" alt="Казнь" class="rule-icon__img">
              </div>
            </div>
          </div>
          <rule-item :rule_description="ruleType.description" :rule_title="ruleType.title"/>
        </div>
      </div>
    </div>
    <div class="rules__rule-skills">
      <div class="rule-skills">
        <div class="rule-skills__title">Навыки карт</div>
        <div class="rule-skills__list">
          <div class="rule-skills__rule-icons">
            <div class="rule-icons">
              <div class="rule-icon">
                <img src="/rules/skills/Казнь.png" alt="Казнь" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Командирский%20рог.png" alt="Командирский Рог" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Лекарь.png" alt="Лекарь" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Лидерство.png" alt="Лидерство" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Плотный%20строй.png" alt="Плотный Строй" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Проворность.png" alt="Проворность" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Соратники.png" alt="Соратники" class="rule-icon__img">
              </div>
              <div class="rule-icon">
                <img src="/rules/skills/Шпион.png" alt="Шпион" class="rule-icon__img">
              </div>
            </div>
          </div>
          <rule-item :rule_description="ruleSkill.description" :rule_title="ruleSkill.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RuleItem from "./RuleItem";
  import FractionsList from "./FractionsList";


    export default {
      components: {RuleItem, FractionsList},
       data() {
         return {
           ruleTypes: [{id: '0', title: 'Воин', description: 'Располагается в ряду карт ближнего боя. На данную карту действует погодная карта "Мороз".'}],
           ruleSkills: [{id: '0', title: 'Казнь', description: 'Уничтожает самый сильный отряд или отряды на поле. Будьте внимательны, если у Вас на поле имеется карта с силой выше, чем у противника, она будет уничтожена Казнью.'}]
         }
       },
      computed: {
        ruleType(id){
          return this.ruleTypes[0];
        },
        ruleSkill(id){
          return this.ruleSkills[0];
        }
      }
    }
</script>

<style lang="scss">
    .rule-icons {
      display: flex;
      }
    .rule-icon {
      width: 70px;
      height: 70px;
    }
  .rule-icon__img {
    height: 100%;
    width: 100%;
  }

</style>
