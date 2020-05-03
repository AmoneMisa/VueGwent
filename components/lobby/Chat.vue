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
      <div class="chat__messages">
        <simplebar data-simplebar-auto-hide="false" class="simple-bar-chat">
          <div class="messages">
            <div class="message" v-for="i in 10" :key="i">
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
        </simplebar>
      </div>
      <div class="chat__user-message">
        <input name="message" class="chat__user-message-field" maxlength="144" autocomplete="off">
      </div>
    </div>
  </div>
</template>

<script>
  import Simplebar from 'simplebar-vue';

  export default {
    components: {
      Simplebar
    }
  }
</script>

<style lang="scss">
 @import "assets/Chat";
</style>
