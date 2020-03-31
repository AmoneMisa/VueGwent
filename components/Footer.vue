<template>
  <div class="footer">
    <div class="wrapper footer__wrapper">
      <div class="social">
        <div class="social__button">
          <i class="fab fa-facebook social__icon"></i>
          <span class="social__text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-twitter social__icon"></i>
          <span class="social__text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-instagram social__icon"></i>
          <span class="social__text">Подписаться</span>
        </div>
        <div class="social__button">
          <i class="fab fa-twitch social__icon"></i>
          <span class="social__text">Подписаться</span>
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
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
  }

  .social {
    display: flex;
  }

  .social__button {
    margin-left: 15px;
  }

  .social__icon {
    font-size: 20px;
  }

  .social__text {
    margin-left: 5px;
  }

  .social__button:first-child {
    margin-left: 0;
  }
</style>
