<template>
    <form class="edit-personal-data user-form-block" @submit.prevent="saveChanges">
      <div class="edit-personal-data__title user-form-block__title">Редактировать данные</div>
      <div class="edit-personal-data__item user-form-block__item">
        <input-placeholder placeholder="Введите желаемый ник" v-model="username" :value="user.login"/>
      </div>
      <div class="edit-personal-data__item user-form-block__item">
        <input-placeholder placeholder="Введите желаемое имя" v-model="name" :value="user.name"/>
      </div>
      <div class="edit-personal-data__item user-form-block__item">
        <input-placeholder placeholder="Введите новую почту" v-model="email" type="email " :value="user.email"/>
      </div>
      <media :query="{minWidth: 971}">
        <custom-button>Сохранить</custom-button>
      </media>
      <media :query="{maxWidth: 970}">
        <custom-button class="button_mobile">Сохранить</custom-button>
      </media>
      <span class="error">{{ error }}</span>
    </form>
</template>

<script>
  import InputPlaceholder from "~/components/forms/InputPlaceholder";
  import Button from "../Button";
  import Media from "vue-media";

    export default {
      components: {InputPlaceholder, 'custom-button': Button, Media},
      data() {
        return {
          error: '',
          username: '',
          name: '',
          email: ''
        }
      },
      computed: {
        user() {
          return this.$store.state.user.data;
        }
      },
      methods: {
        saveChanges() {

        }
      }
    }
</script>

<style lang="scss">

</style>
