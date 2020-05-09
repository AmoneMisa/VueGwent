<template>
  <div class="rules__fraction-list">
    <div class="fraction-list">
      <div class="fraction-list__item" >
        <div class="fraction-list__icon" :class="{'fraction-list__icon_current': fractionId === '0', 'fraction-list__icon_mobile': mobile}" @click="fractionId = '0'">
          <img src="/rules/fractions/Монстры.png" class="fraction-list__img" alt="Скеллиге">
        </div>
      </div>
      <div class="fraction-list__item">
        <div class="fraction-list__icon" :class="{'fraction-list__icon_current': fractionId === '1', 'fraction-list__icon_mobile': mobile}" @click="fractionId = '1'">
          <img src="/rules/fractions/Королевства%20Сервера.png" class="fraction-list__img" alt="Скеллиге">
        </div>
      </div>
      <div class="fraction-list__item">
        <div class="fraction-list__icon" :class="{'fraction-list__icon_current': fractionId === '2', 'fraction-list__icon_mobile': mobile}" @click="fractionId = '2'">
          <img src="/rules/fractions/Нильфгаард.png" class="fraction-list__img" alt="Скеллиге">
        </div>
      </div>
      <div class="fraction-list__item">
        <div class="fraction-list__icon" :class="{'fraction-list__icon_current': fractionId === '3', 'fraction-list__icon_mobile': mobile}" @click="fractionId = '3'">
          <img src="/rules/fractions/Скоятаэли.png" class="fraction-list__img" alt="Скеллиге">
        </div>
      </div>
      <div class="fraction-list__item">
        <div class="fraction-list__icon" :class="{'fraction-list__icon_current': fractionId === '4', 'fraction-list__icon_mobile': mobile}" @click="fractionId = '4'">
          <img src="/rules/fractions/Скеллиге.png" class="fraction-list__img" alt="Скеллиге">
        </div>
      </div>
    </div>
    <rule-item :rule_title="ruleFraction.title" :rule_description="ruleFraction.description"/>
  </div>
</template>

<script>
  import RuleItem from "./RuleItem";

  export default {
    components: {RuleItem},
    props: ['mobile'],
    data() {
      return {
        fractionId: '0',
        ruleFractions: [
          {
            id: '0',
            title: 'Монстры',
            description: 'Уникальная способность: оставляет одну случайно выбранную карту на столе после завершения хода. Фракция монстров специализируется на ближнем бое и двойниках. Не имеет шпионов.'
          },
          {
            id: '1',
            title: 'Королевства Севера',
            description: 'Уникальная способность: игрок берёт дополнительную карту в случае выигрыша раунда. Фракция Королевств Севера наиболее "усреднённая" фракция, которая имеет и медиков, и шпионов, и хорошие карты отрядов для всех трёх линий.'
          },
          {
            id: '2',
            title: 'Нильфгаард',
            description: 'Уникальная способность: выигрывает в случае ничьей. Фракция Нильфгаарда специализируется на большом количестве шпионов. Имеет довольно хорошие дальнобойные и осадные отряды.'
          },
          {
            id: '3',
            title: 'Ско"ятаэли',
            description: 'Уникальная способность: могут ходить первыми в первом раунде, по своему желанию. Фракция Ско"ятаэлей специализируется на большом количестве двойников и медиков. Не имеет шпионов.'
          },
          {
            id: '4',
            title: 'Скеллиге',
            description: 'Уникальная способность: в третьем раунде две случайные карты из отбоя возвращаются в игру. Фракция Скеллиге имеет всего по-чуть-чуть. Однако, не имеет шпионов.'
          },
        ]
      }
    },
    computed: {
      ruleFraction() {
        return this.ruleFractions[this.fractionId];
      }
    }
  }
</script>

<style lang="scss">

  .fraction-list {
    display: flex;
    justify-content: center;
  }

  .fraction-list__icon {
    width: 80px;
    height: 80px;
    opacity: 0.7;
  }

  .fraction-list__icon_mobile {
    width: 60px;
    height: 60px;
  }

  .fraction-list__icon_current {
   opacity: 1;
  }

  .fraction-list__img {
    width: 100%;
    height: 100%;
  }
</style>
