<template>
  <div class="footer">
    <div class="wrapper footer__wrapper">
      <div class="social">
        <div class="social__button">
          <i class="fab fa-facebook social__button-icon"></i>
          <span class="social__button-text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-twitter social__button-icon"></i>
          <span class="social__button-text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-instagram social__button-icon"></i>
          <span class="social__button-text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-twitch social__button-icon"></i>
          <span class="social__button-text">Подписаться</span>
        </div>
      </div>
      <div class="copyright">
        <i class="fa fa-copyright copyright__icon"></i>
        <span class="copyright__text">2020. Все права соблюдены.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    color: white;
    background-color: #1e1c16;
    font-size: 16px;
  }

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .social {
    display: flex;
  }

  .social__button {
    margin-right: 15px;
  }

  .social__button-icon {
    font-size: 20px;
    margin-right: 5px;
  }

  .social__button-text {

  }
</style>
