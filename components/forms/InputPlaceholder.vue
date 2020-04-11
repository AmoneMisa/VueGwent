<template>
  <div class="input-placeholder">
    <input class="input-placeholder__input" :value="value" v-bind="$attrs"
           @focus="focus = true"
           @blur="focus = false"
           @input="e => $emit('input', e.target.value)"/>
    <span class="input-placeholder__placeholder"
          :class="{'input-placeholder__placeholder_active' : focus || value}">{{ placeholder }}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        focus: false
      }
    },
    props: ['placeholder', 'value']
  }
</script>

<style lang="scss">
  .input-placeholder {
    position: relative;
  }

  .input-placeholder__input {
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    line-height: 1;
  }

  .input-placeholder__placeholder {
    font-size: 16px;
    color: grey;
    position: absolute;
    top: 11px;
    left: 10px;
    pointer-events: none;
    line-height: 1;
    transition: .2s ease-in-out top, .2s ease-in-out left, .2s ease-in-out font-size, .2s ease-in-out color;
  }

  .input-placeholder__placeholder_active {
    font-size: 10px;
    color: #b18b48;
    top: -14px;
    left: 0;
  }
</style>
