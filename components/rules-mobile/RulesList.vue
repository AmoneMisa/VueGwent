<template>
  <div class="rules">
    <div class="rules__rule-fractions">
      <div class="rule-fractions">
        <fractions-list :mobile="true"/>
      </div>
    </div>
    <div class="rules__rule-base">
      <div class="rule-base">
        <div class="rule-base__title rules__title">Основные правила игры</div>
        <div class="rule-base__list">
          <div class="rule-base__rule-icons">
            <div class="rule-icons">
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '0'" :class="{'rule-icon_current': ruleBaseId === '0'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '1'" :class="{'rule-icon_current': ruleBaseId === '1'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '2'" :class="{'rule-icon_current': ruleBaseId === '2'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '3'" :class="{'rule-icon_current': ruleBaseId === '3'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '4'" :class="{'rule-icon_current': ruleBaseId === '4'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleBaseId = '5'" :class="{'rule-icon_current': ruleBaseId === '5'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
            </div>
          </div>
          <rule-item :rule_description="ruleBase.description" :rule_title="ruleBase.title" :mobile="true"/>
        </div>
      </div>
    </div>
    <div class="rules__rule-types">
      <div class="rule-types">
        <div class="rule-types__title rules__title">Типы карт</div>
        <div class="rule-types__list">
          <div class="rule-types__rule-icons">
            <div class="rule-icons">
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '0'"
                   :class="{'rule-icon_current': ruleTypeId === '0'}">
                <img src="/rules/types/Воин.png" alt="Воин" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '1'"
                   :class="{'rule-icon_current': ruleTypeId === '1'}">
                <img src="/rules/types/Дальнобойный%20отряд.png" alt="Дальнобойный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '2'"
                   :class="{'rule-icon_current': ruleTypeId === '2'}">
                <img src="/rules/types/Осадный%20отряд.png" alt="Осадный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '3'"
                   :class="{'rule-icon_current': ruleTypeId === '3'}">
                <img src="/rules/types/Проворный%20отряд.png" alt="Проворный отряд" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '4'"
                   :class="{'rule-icon_current': ruleTypeId === '4'}">
                <img src="/rules/types/Командирский%20Рог%20Поддержка.png" alt="Командирский рог"
                     class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '5'"
                   :class="{'rule-icon_current': ruleTypeId === '5'}">
                <img src="/rules/types/Мороз.png" alt="Мороз" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '6'"
                   :class="{'rule-icon_current': ruleTypeId === '6'}">
                <img src="/rules/types/Туман.png" alt="Туман" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '7'"
                   :class="{'rule-icon_current': ruleTypeId === '7'}">
                <img src="/rules/types/Ливень.png" alt="Ливень" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '8'"
                   :class="{'rule-icon_current': ruleTypeId === '8'}">
                <img src="/rules/types/Шторм%20со%20Скеллиге.png" alt="Шторм со Скеллиге" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '9'"
                   :class="{'rule-icon_current': ruleTypeId === '9'}">
                <img src="/rules/types/Ясное%20Небо.png" alt="Ясное Небо" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '10'"
                   :class="{'rule-icon_current': ruleTypeId === '10'}">
                <img src="/rules/types/Чучело.png" alt="Чучело" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '11'"
                   :class="{'rule-icon_current': ruleTypeId === '11'}">
                <img src="/rules/types/Казнь%20Поддержка.png" alt="Казнь" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleTypeId = '12'"
                   :class="{'rule-icon_current': ruleTypeId === '12'}">
                <img src="/rules/types/Мардрём.png" alt="Мардрём" class="rule-icon__img">
              </div>
            </div>
          </div>
          <rule-item :rule_description="ruleType.description" :rule_title="ruleType.title" :mobile="true"/>
        </div>
      </div>
    </div>
    <div class="rules__rule-skills">
      <div class="rule-skills">
        <div class="rule-skills__title rules__title">Навыки карт</div>
        <div class="rule-skills__list">
          <div class="rule-skills__rule-icons">
            <div class="rule-icons">
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '0'"
                   :class="{'rule-icon_current': ruleSkillId === '0'}">
                <img src="/rules/skills/Казнь.png" alt="Казнь" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '1'"
                   :class="{'rule-icon_current': ruleSkillId === '1'}">
                <img src="/rules/skills/Командирский%20рог.png" alt="Командирский рог" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '2'"
                   :class="{'rule-icon_current': ruleSkillId === '2'}">
                <img src="/rules/skills/Лекарь.png" alt="Медик" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '3'"
                   :class="{'rule-icon_current': ruleSkillId === '3'}">
                <img src="/rules/skills/Лидерство.png" alt="Прилив сил" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '4'"
                   :class="{'rule-icon_current': ruleSkillId === '4'}">
                <img src="/rules/skills/Плотный%20строй.png" alt="Прочная связь" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '5'"
                   :class="{'rule-icon_current': ruleSkillId === '5'}">
                <img src="/rules/skills/Проворность.png" alt="Проворство" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '6'"
                   :class="{'rule-icon_current': ruleSkillId === '6'}">
                <img src="/rules/skills/Соратники.png" alt="Двойник" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '7'"
                   :class="{'rule-icon_current': ruleSkillId === '7'}">
                <img src="/rules/skills/Шпион.png" alt="Шпион" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '8'"
                   :class="{'rule-icon_current': ruleSkillId === '8'}">
                <img src="/rules/skills/Мститель.png" alt="Мститель" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '9'"
                   :class="{'rule-icon_current': ruleSkillId === '9'}">
                <img src="/rules/skills/Мардрём.png" alt="Мардрём" class="rule-icon__img">
              </div>
              <div class="rule-icon rule-icon_mobile" @click="ruleSkillId = '10'"
                   :class="{'rule-icon_current': ruleSkillId === '10'}">
                <img src="/rules/skills/Берсерк.png" alt="Берсерк" class="rule-icon__img">
              </div>
            </div>
          </div>
          <rule-item :rule_description="ruleSkill.description" :rule_title="ruleSkill.title" :mobile="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RuleItem from "~/components/rules/RuleItem";
  import FractionsList from "~/components/rules/FractionsList";


  export default {
    components: {RuleItem, FractionsList},
    data() {
      return {
        ruleTypeId: '0',
        ruleSkillId: '0',
        ruleBaseId: '0',
        ruleTypes: [
          {
            id: '0',
            title: 'Воин',
            description: 'Располагается на линии ближнего боя. На данную карту действует погодная карта "Мороз".'
          },
          {
            id: '1',
            title: 'Дальнобойный отряд',
            description: 'Располагается на линии дальнего боя. На данную карту действует погодная карта "Туман".'
          },
          {
            id: '2',
            title: 'Осадный отряд',
            description: 'Располагается на линии осадных отрядов. На данную карту действует погодная карта "Ливень".'
          },
          {
            id: '3',
            title: 'Проворный отряд',
            description: 'Располагается на линии ближнего боя или дальнего боя. На данную карту действует погодная карта "Мороз" или "Туман", в зависимости от линии.'
          },
          {
            id: '4',
            title: 'Командирский рог',
            description: 'Увеличивает силу отрядов в два раза. Сочетается с навыком "Прочная связь". Может быть использован только один "Командирский рог" на линии. Если Вы используете данную карту и карту отряда с таким же навыком - эффекты НЕ будут суммироваться. Кладётся в специальную ячейку слева на одну из линий.'
          },
          {
            id: '5',
            title: 'Мороз',
            description: 'Погодная карта. Уменьшает силу воинов до 1. В случае, если Вы применяете "Командирский рог", сила отрядов так же будет удваиваться.'
          },
          {
            id: '6',
            title: 'Туман',
            description: 'Погодная карта. Уменьшает силу дальнобойных отрядов до 1. В случае, если Вы применяете "Командирский рог", сила отрядов так же будет удваиваться.'
          },
          {
            id: '7',
            title: 'Ливень',
            description: 'Погодная карта. Уменьшает силу осадных отрядов до 1. В случае, если Вы применяете "Командирский рог", сила отрядов так же будет удваиваться.'
          },
          {
            id: '8',
            title: 'Шторм со Скеллиге',
            description: 'Погодная карта. Уменьшает силу дальнобойных и осадных отрядов до 1. В случае, если Вы применяете "Командирский рог", сила отрядов так же будет удваиваться.'
          },
          {
            id: '9',
            title: 'Ясное Небо',
            description: 'Отменяет все эффекты погодных карт. После использования перемещается в стопку сброса вместе с другими погодными картами, эффекты которых были отменены.'
          },
          {
            id: '10',
            title: 'Чучело',
            description: 'Заменяет собой указанную Вами карту, которая находится на поле. Карта возвращается к Вам в руку, чучело остаётся на поле. Чучело не может быть оживлено (например, Медиками).'
          },
          {
            id: '11',
            title: 'Казнь',
            description: 'Уничтожает самый сильный отряд или отряды на поле, если его (их) сила равна или более 10. Будьте внимательны, если у Вас на поле имеется карта с силой выше, чем у противника, она будет уничтожена Казнью.'
          },
          {
            id: '12',
            title: 'Мардрём',
            description: 'Превращает карты с навыком "Берсерк" в медведей. Устанавливается в левую ячейку линии.'
          },
        ],
        ruleSkills: [
          {
            id: '0',
            title: 'Казнь',
            description: 'Уничтожает самый сильный отряд (или отряды) противника, если его сила или их суммарная сила равна или больше 10, на той же линии, на которой находится Ваша карта с умением Казнь.'
          },
          {
            id: '1',
            title: 'Командирский рог',
            description: 'Удваивает силу отрядов на своей линии. Не суммируется с другим "Командирским рогом". Сила самой карты не удваивается.'
          },
          {
            id: '2',
            title: 'Медик',
            description: 'Воскрешает павший отряд из Вашей стопки отбоя. Не могут быть воскрешены не отрядные карты (погодные, спец. карты). Карты, оживлённые медиком повторно используют свои навыки.'
          },
          {
            id: '3',
            title: 'Прилив сил',
            description: 'Увеличивает силу всех отрядов на линии на 1, кроме себя. Суммируется с "Коммандирским Рогом" и навыком "Прочная связь".'
          },
          {
            id: '4',
            title: 'Прочная связь',
            description: 'Карты с данным умением удваивают свою силу, если имеют одно и то же имя (напр. Рубаки из фракции Королевсв Севера).'
          },
          {
            id: '5',
            title: 'Проворство',
            description: 'Данную карту можно выложить или в линию рукопашных отрядов, или дальнобойных. После выкладки, изменять положение карты нельзя.'
          },
          {
            id: '6',
            title: 'Двойник',
            description: 'Сыграв одну карту, Вы выкладываете на стол все карты с тем же названием из колоды и из руки. Особое умение "Вызов воительниц" - у Керис, колода Скеллиге, она призывает всех воительниц Клана Друммонд из колоды и из руки, при этом сами по себе они не вызывают ни друг друга, ни Керис.'
          },
          {
            id: '7',
            title: 'Шпион',
            description: 'Разыгрывая шпиона, вы выкладываете его на сторону противника, прибавляя очки силы ему. Вы берёте 2 карты.'
          },
          {
            id: '8',
            title: 'Призвание мстителя',
            description: 'Когда эта карта уходит с поля, она призывает на своё место другую, сильную карту отряда (напр. Корова).'
          },
          {
            id: '9',
            title: 'Мардрём',
            description: 'Особая карта колоды Скеллиге. Обращает всех Берсерков в ряду в медведей.'
          },
          {
            id: '10',
            title: 'Берсерк',
            description: 'Под влиянием Мардрёма Берсерки превращаются в медведей.'
          }
        ],
        ruleBases: [
          {
            id: '0',
            title: 'Сила',
            description: 'Указывает количество очков силы карты.'
          },
          {
            id: '1',
            title: 'Карта Героя',
            description: 'Особая карта, имеет иммунитет ко всем картам действий, включая Чучел и Медиков.'
          },
          {
            id: '2',
            title: 'Обычная Карта',
            description: 'Обычная карта отряда. На неё влияют все возможные карты действий.'
          },
          {
            id: '3',
            title: 'Погодная Карта',
            description: 'Погодные карты влияют на силу карт отрядов. Ясное Небо отменяет все негативные эффекты других погодных карт.'
          },
          {
            id: '4',
            title: 'Специальная Карта',
            description: 'Специальные карты не являются картами отрядов. Они по-своему влияют на карты отрядов, в зависимости от своего навыка. Они не могут быть воскрешены медиками или Лидерами.'
          },
          {
            id: '5',
            title: 'Карта Лидера',
            description: 'Карты лидеров являются уникальными для каждой колоды. Они имеют свои личные усиления или негативные эффекты, или нейтральные эффекты. Узнать о навыках каждого Лидера Вы можете во вкладке "Колода" => Лидер.'
          }
        ]
      }
    },
    computed: {
      ruleType() {
        return this.ruleTypes[this.ruleTypeId];
      },
      ruleSkill() {
        return this.ruleSkills[this.ruleSkillId];
      },
      ruleBase() {
        return this.ruleBases[this.ruleBaseId];
      }
    }
  }
</script>

<style lang="scss">

</style>
