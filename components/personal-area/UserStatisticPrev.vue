<template>
  <div class="user-info__statistic">
    <div class="statistic">
      <div class="statistic__wins">
        Количество выигрышей: <span class="wins__count">33</span>
        <div class="wins__percent">Процент выигрышей: <span class="wins__percent-count">50%</span>
        </div>
      </div>
      <div class="statistic__fails">
        Количество проигрышей: <span class="fails__count">32</span>
      </div>
      <div class="statistic__last-games">
        <div class="last-games">
          <div class="last-game">
            <span class="opponent__username">User1</span>
            <span class="opponent__fraction">[Nilfgaard]</span>
            : <span class="opponent__status status_fail">fail</span>
            - <span class="user__username">Пользователь</span>
            <span class="user__fraction">[Skellige]</span>
            : <span class="user__status  status_win">win</span>
          </div>
          <div class="last-game">
            <span class="opponent__username">User1</span>
            <span class="opponent__fraction">[Nilfgaard]</span>
            : <span class="opponent__status status_fail">fail</span>
            - <span class="user__username">Пользователь</span>
            <span class="user__fraction">[Skellige]</span>
            : <span class="user__status status_win">win</span>
          </div>
          <div class="last-game">
            <span class="opponent__username">User1</span>
            <span class="opponent__fraction">[Nilfgaard]</span>
            : <span class="opponent__status status_win">win</span>
            - <span class="user__username">Пользователь</span>
            <span class="user__fraction">[Skellige]</span>
            : <span class="user__status status_fail">fail</span>
          </div>
          <div class="last-game">
            <span class="opponent__username">User1</span>
            <span class="opponent__fraction">[Nilfgaard]</span>
            : <span class="opponent__status  status_win">win</span>
            - <span class="user__username">Пользователь</span>
            <span class="user__fraction">[Skellige]</span>
            : <span class="user__status status_fail">fail</span>
          </div>
          <div class="last-game">
            <span class="opponent__username">User1</span>
            <span class="opponent__fraction">[Nilfgaard]</span>
            : <span class="opponent__status status_win">win</span>
            - <span class="user__username">Пользователь</span>
            <span class="user__fraction">[Skellige]</span>
            : <span class="user__status status_fail">fail</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .user-info__statistic {
    margin-top: 60px;
  }

  .statistic__fails,
  .wins__percent {
    margin-top: 10px;
  }

  .wins__count,
  .wins__percent-count,
  .fails__count {
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
        rgba(47, 37, 23, 0.1))
    1 100%;
    margin-bottom: 20px;
  }

  .last-games__title {
    color: #c6c6c6;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }

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
  .game-time{
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
