<template>
  <div class="lobby__chat">
    <div class="lobby__chat-header">
      <div class="chat-header">
        <div class="chat-header__chat-title">Чат</div>
        <div class="chat-header__online-stats">
          <div class="online-stats">
            <span class="online-stats__games">Игр:
              <span class="online-stats__games-count">100</span>
            </span>
            <span class="online-stats__online">Игроков онлайн:
              <span class="online-stats__online-count">2500</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="chat">
      <div class="chat__messages" data-simplebar="init">
        <div class="messages">
          <div class="message">
            <div class="message__time">[10:40:09]</div>
            <div class="message__user-avatar">
              <img src="/imgs/lobby/your_turn.png" class="message__user-avatar-img">
            </div>
            <div class="message__username">Пользователь:</div>
            <div class="message__text">lorem ipsum.</div>
          </div>
          <div class="message system-message">
            <div class="message__time">[10:40:09]</div>
            <div class="message__system-name">Система:</div>
            <div class="message__system-text">Тех. работы завершены.</div>
          </div>
          <div class="message admin-message">
            <div class="message__time">[10:40:09]</div>
            <div class="message__user-avatar">
              <img src="/imgs/lobby/your_turn.png" class="message__user-avatar-img">
            </div>
            <div class="message__admin-username">Администратор:</div>
            <div class="message__text">Фольтест топ.</div>
          </div>
        </div>
      </div>
      <div class="chat__user-message">
        <textarea name="message" class="chat__user-message-field" maxlength="144"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .lobby__chat {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .chat-header {
    display: flex;
    justify-content: space-between;
  }

  .chat-header__chat-title {
    color: #c6c6c6;
    background-color: rgba(#262020, 1);
    border-radius: 5px;
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
  }

  .chat-header__online-stats {
    width: 250px;
    background-color: transparent;
    color: #b18b48;
  }

  .online-stats {
    display: flex;
    flex-wrap: wrap;
  }

  .online-stats__games {
    margin-right: 20px;
  }

  .chat {
    border: 1px solid #0c0c0c;
    padding: 10px;
    border-radius: 5px;
  }

  .chat__messages {
    height: 300px;

  }
  .message {
    display: flex;
    align-items: center;
    height: 50px;
  }

  .message__text {
    font-size: 16px;
  }

  .message__user-avatar {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border-radius: 5px;
  }

  .message__user-avatar-img {
    max-width: 100%;
    max-height: 100%;
  }

  .message__username {
    color: #c6c6c6;
    font-size: 16px;
    margin-right: 5px;
    max-width: 200px;
  }

  .chat__user-message {
    display: flex;
    align-items: center;
  }

  .message__time {
    color: #4f3832;
    margin-right: 5px;
    font-size: 16px;
  }

  .message__system-name {
    color: #b18b48;
    margin-right: 5px;
    font-size: 18px;
  }

  .message__system-text {
    color: #c6c6c6;
    font-size: 18px;
  }

  .message__admin-username {
    color: #3e9c47;
    margin-right: 5px;
    font-size: 16px;
  }

  .chat__user-message {
    margin-top: 10px;
  }

  .chat__user-message-field {
    color: #c6c6c6;
    background-color: #262020;
    border-radius: 5px;
    height: 15px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6) inset;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    width: 100%;
    resize: none;
    overflow: hidden;
    line-height: 1.2;
    display: flex;
    align-items: center;
  }
</style>
