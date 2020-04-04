<template>
  <div class="user-info__photo">
    <div class="photo">
      <div class="photo__item">
        <img src="#" class="photo__img">
      </div>
      <input class="photo__upload-button" type="file" id="avatar">
      <label for="avatar" class="photo__upload-text">Загрузить фото</label>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userAvatar"
    }
</script>

<style lang="scss">

  .photo {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .photo__item {
    height: 80px;
    width: 80px;
    border-radius: 360px;
    background-color: #655940;
    overflow: hidden;
  }

  .photo__img {
    height: 80px;
    width: 80px;
  }

  .photo__upload-button {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .photo__upload-text {
    width: 120px;
    height: 30px;
    font-size: 16px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.9) inset;
    margin-top: 10px;
    background-color: #1d1d18;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow .2s ease-in-out, color .2s ease-in-out;
    border: 1px solid #1d1d18;
    color: #a5a195;
    text-align: center;
    &:hover {
      color: #c6c6c6;
      box-shadow: 0 0 10px rgba(#feaf5c, 0.6), 0 0 1px 1px rgba(0, 0, 0, 0.9) inset;
    }
  }
</style>
