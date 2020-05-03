<template>
  <div class="lobby__chat lobby__chat_mobile">
    <div class="lobby__chat-header">
      <div class="chat-header">
        <div class="chat-header__chat-title chat-header__chat-title_mobile">Чат</div>
        <div class="chat-header__online-stats chat-header__online-stats_mobile">
          <div class="online-stats">
            <span class="online-stats__games online-stats__games_mobile">Игр:
              <span class="online-stats__games-count">100</span>
            </span>
            <span class="online-stats__online">Игроков онлайн:
              <span class="online-stats__online-count">2500</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="chat chat_mobile">
      <div class="chat__messages chat__messages_mobile">
        <simplebar data-simplebar-auto-hide="false" class="simple-bar-chat simple-bar-chat_mobile ">
        <div class="messages">
          <div class="message message_mobile">
            <div class="message__time message__time_mobile">[10:40:09]</div>
            <div class="message__user-avatar message__user-avatar_mobile">
              <img src="/imgs/lobby/your_turn.png" class="message__user-avatar-img">
            </div>
            <div class="message__username message__username_mobile">Пользователь:</div>
            <div class="message__text message__text_mobile">lorem ipsum.</div>
          </div>
          <div class="message system-message message_mobile">
            <div class="message__time message__time_mobile">[10:40:09]</div>
            <div class="message__system-name message__system-name_mobile">Система:</div>
            <div class="message__system-text message__system-text_mobile">Тех. работы завершены.</div>
          </div>
          <div class="message admin-message message_mobile">
            <div class="message__time message__time_mobile">[10:40:09]</div>
            <div class="message__user-avatar message__user-avatar_mobile">
              <img src="/imgs/lobby/your_turn.png" class="message__user-avatar-img">
            </div>
            <div class="message__admin-username message__admin-username_mobile">Администратор:</div>
            <div class="message__text message__text_mobile">Фольтест топ.</div>
          </div>
        </div>
        </simplebar>
      </div>
      <div class="chat__user-message">
        <input name="message" class="chat__user-message-field chat__user-message-field_mobile" maxlength="144" autocomplete="off">
      </div>
    </div>
  </div>
</template>

<script>
  import Simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';

  export default {
    components : {Simplebar}

  }
</script>

<style lang="scss" scoped>

</style>
