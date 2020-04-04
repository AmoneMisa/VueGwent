<template>
  <div class="game-list">
    <filters/>
    <div class="game-list__items-games" data-simplebar="init">
      <div class="items-games">
        <div class="items-games__item">
          <div class="items-games__game-name">Иванушка Иванов</div>
          <div class="items-games__users-info">
            <div class="items-games__user-deck">Нильфгаард</div>
            <div class="items-games__user-photo">
              <img src="/imgs/lobby/opponent.png"
                   class="items-games__user-photo-img">
            </div>
            <div class="items-games__inner-photo-text">VS</div>
            <div class="items-games__user-photo">
              <img src="/imgs/lobby/your_turn.png"
                   class="items-games__user-photo-img">
            </div>
            <div class="items-games__user-deck">Скеллиге</div>
          </div>
          <div class="items-games__rate">10</div>
          <div class="items-games__action">
            <button class="items-games__button">Играть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Filters from "./Filters";

  export default {
    components: {Filters}
  }
</script>

<style lang="scss">
  .game-list__items-games {
    height: 470px;
    padding-right: 20px;
  }

  .items-games {
    display: flex;
    flex-direction: column;
  }

  .items-games__item {
    display: flex;
    align-items: center;
    background-color: #0c0c0c;
    color: #a5a195;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .items-games__game-name {
    flex: none;
    width: 350px;
    color: #c6c6c6;
    text-align: center;
  }

  .items-games__users-info {
    flex: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid;
    border-left: 1px solid;
    border-image: linear-gradient(
        to bottom,
        rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1)) 1 100%;
  }

  .items-games__user-photo {
    flex: none;
    overflow: hidden;
    width: 60px;
    height: 60px;
    border: 2px solid #655940;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    border-radius: 5px;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset, 0 0 5px 2px rgba(#feaf5c, 0.3);
    }
  }

  .items-games__user-photo-img {
    width: 60px;
    height: 60px;
    cursor: pointer;

  }

  .items-games__inner-photo-text {
    margin: 0 10px;
    color: #b0b0ae;
  }

  .items-games__rate {
    flex: none;
    width: 100px;
    border-right: 1px solid;
    border-image: linear-gradient(
        to bottom,
        rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1)) 1 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #b0b0ae;
  }

  .items-games__action {
    flex: none;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .items-games__button {
    width: 120px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    background-color: #1d1d18;
    color: #a5a195;
    border: 1px solid #191917;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset, 0 0 10px 5px rgba(#feaf5c, 0.56);
    }
  }

</style>
