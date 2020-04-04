<template>
  <div class="user-info__password">
    <div class="password-block">
      <div class="password-block__title">Изменить пароль</div>
      <input type="password" class="password-block__item" placeholder="Введите текущий пароль"
             name="password">
      <input type="password" class="password-block__item" placeholder="Введите новый пароль"
             name="new-password">
      <input type="password" class="password-block__item" placeholder="Введите повторно новый пароль"
             name="confirm-new-password">
      <button type="submit" class="password-block__button-submit">Изменить пароль</button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .password-block__title {
    color: #c6c6c6;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .user-info__password {
    margin-top: 20px;
  }

  .password-block {
    display: flex;
    flex-direction: column;
  }

  .password-block__item {
    width: 250px;
    height: 40px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .password-block__button-submit {
    height: 40px;
    text-align: center;
    background-color: #1d1d18;
    transition: box-shadow .2s ease-in-out;
    color: #a5a195;
    border: 1px solid #1d1d18;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .9) inset;
    cursor: pointer;
    padding: 0 10px;
    width: 160px;
    &:hover {
      box-shadow: 0 0 15px 5px rgba(#feaf5c, 0.6), 0 0 1px 1px rgba(0, 0, 0, .9) inset;
    }
  }
</style>
