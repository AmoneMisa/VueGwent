<template>
  <div class="lobby">
    <div class="lobby__wrapper">
      <user-place/>
      <div class="lobby__main-content-game">
        <div class="main-content-game">
          <div class="main-content-game__titles">
            <div class="main-content-game__title main-content-game__title_current games">Список игр</div>
            <div class="main-content-game__title current-games">Текущие игры</div>
          </div>
          <div class="main-content-game__current-game-list main-content-game__game-list">
            <game-list/>
          </div>
        </div>
      </div>
      <chat/>
    </div>
  </div>
</template>

<script>
  import Chat from "~/components/lobby/Chat";
  import UserPlace from "~/components/lobby/UserPlace";
  import GameList from "~/components/lobby/GameList";
  import CurrentGameList from "~/components/lobby/CurrentGameList";

  export default {
    components: {Chat, UserPlace, GameList, CurrentGameList},
    head: {
      title: 'Лобби игры Гвинт'
    }
  }
</script>

<style lang="scss">

  input, button, textarea {
    outline: none;
    font-family: Tahoma, Arial, sans-serif;
  }

  .lobby__main-content-game {
    margin-top: 20px;
  }

  .main-content-game__titles {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 18px;
    margin-top: 10px;
  }

  .main-content-game__title {
    color: rgba(#b0b0ae, 0.5);
    background-color: rgba(#262020, 0.5);
    cursor: pointer;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset, 0 0 5px 2px rgba(#feaf5c, 0.3);
    }
  }

  .main-content-game__title_current {
    color: #c6c6c6;
    background-color: rgba(#262020, 1);

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    }
  }

  .simplebar-vertical {
    background-color: #0b0b0b;
    width: 2px !important;
    overflow: visible;
  }

  .simplebar-scrollbar {
    width: 10px;
    background-color: #5e4e2d;
    left: -4px;
  }

  .simplebar-scrollbar:before {
    background: #5e4e2d !important;
  }

  .main-content-game__game-list {
    border-radius: 5px;
    border: 1px solid #0c0c0c;
    padding: 10px;
    margin-bottom: 20px;
  }
</style>
