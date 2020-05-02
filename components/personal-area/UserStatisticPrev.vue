<template>
  <div class="user-info__statistic">
    <div class="statistic">
      <div class="statistic__wins">
        Количество выигрышей: <span class="wins__count" v-if="stats">{{ stats.count_won_games }}</span>
        <div class="wins__percent">Процент выигрышей:
          <span class="wins__percent-count" v-if="stats">{{ winsPercent }}%</span>
        </div>
      </div>
      <div class="statistic__total-games">Всего сыграно игр:
        <span class="games__count" v-if="stats">{{ stats.count_games }}</span>
      </div>
      <div class="statistic__last-games">
        <div class="last-games">
          <div class="last-game">
           <last-game v-for="i in 5" :key="i"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LastGame from "./LastGame";

  export default {
    components: { LastGame },
    async serverPrefetch() {
      await this.$store.dispatch('user/fetchStats');
    },
    async mounted() {
      if (this.stats) {
        return;
      }

      await this.$store.dispatch('user/fetchStats');
    },
    computed: {
      stats() {
        return this.$store.state.user.stats;
      },
      winsPercent() {
        return this.stats.count_won_games / this.stats.count_games * 100;
      }
    }
  }
</script>

<style lang="scss">
  .user-info__statistic {
    margin-top: 60px;
    width: 405px;
  }

  .statistic__total-games,
  .wins__percent {
    margin-top: 10px;
  }

  .wins__count,
  .wins__percent-count,
  .games__count {
    color: #b18b48;
  }

  .statistic__last-games {
    margin-top: 40px;
  }

  .last-games {
    display: table;
    padding: 0 10px;
    border: 2px solid;
    border-image: linear-gradient(
        to bottom, rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1)) 1 100%;
    margin-bottom: 20px;
  }

  .last-games__title {
    color: #c6c6c6;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }

</style>
