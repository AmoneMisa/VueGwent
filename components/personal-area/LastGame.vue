<template>
  <div class="last-game">
    <span class="game-date" v-if="full">20.02.2020</span>
    <span class="opponent__username">User1</span>
    <span class="opponent__fraction">[Nilfgaard]</span>
    : <span class="opponent__status status_fail">fail</span>
    - <span class="user__username">{{ user.login }}</span>
    <span class="user__fraction">[Skellige]</span>
    : <span class="user__status  status_win">win</span>
    <span class="game-time" v-if="full">0 ч. 38 мин.</span>
  </div>
</template>

<script>
  export default {
    props: ['full'],
    computed: {
      user: function () {
        return this.$store.state.user.data;
      }
    }
  }
</script>

<style lang="scss">

  .last-game {
    display: table-row;
    color: #4f3832;
  }

  .opponent__username,
  .opponent__fraction,
  .opponent__status,
  .user__username,
  .user__fraction,
  .user__status,
  .game-date,
  .game-time {
    display: table-cell;
    padding: 5px;
  }

  .opponent__username,
  .user__username {
    color: #c6c6c6;
  }

  .status_win {
    color: #3e9c47;
  }

  .status_fail {
    color: #830000;
  }

  .user__fraction,
  .opponent__fraction {
    color: #91824a;
  }
</style>
