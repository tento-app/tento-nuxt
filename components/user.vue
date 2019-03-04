<template id="">
  <div class="abstract_user">
    <div class="abstract_user_img"></div>
    <div class="">
      <p class="abstract_user_name">ジョージハリスン</p>
      <p class="abstract_user_position">webエンジニア</p>
    </div>
  </div>
</template>

<style lang="scss">
.abstract_user {
    display: flex;
    align-items: center;
    &_img {
        background-image: url("../static/icon.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 1rem;
    }
    &_name {
        font-size: 12px;
        color: #555;
    }
    &_position {
        font-size: 10px;
        color: #ccc;
    }
}
</style>
