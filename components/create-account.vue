<template lang="html">
  <div class="">
    <div class="create-account">
      <div class="sign-up contents">
        <h1>新規アカウント作成</h1>
        <form class="" action="index.html" method="post">
          <div class="item">
            <label for="up-e-mail">メールアドレス</label>
            <input type="text" name="" value="" id="up-e-mail">
          </div>
          <div class="item">
            <label for="name">ユーザーネーム</label>
            <input type="text" name="" value="" id="name">
          </div>
          <div class="item">
            <label for="up-password">パスワード</label>
            <input type="password" name="" value="" id="up-password">
          </div>
          <div class="item">
            <label for="conf-up-password">パスワード(確認)</label>
            <input type="password" name="" value="" id="conf-up-password">
          </div>
          <div class="btn_list">
            <button type="button" name="button" class="btn">Sign up</button>
            <button type="button" name="button" class="btn md">Sign in ></button>
          </div>

        </form>
      </div>
      <div class="sign-in contents">
        <h1>ログイン</h1>
        <div class="img">

        </div>
        <form class="" action="index.html" method="post">
          <div class="item">
            <label for="in-e-mail">メールアドレス</label>
            <input type="text" name="" value="" id="in-e-mail">
          </div>
          <div class="item">
            <label for="in-password">パスワード</label>
            <input type="password" name="" value="" id="in-password">
          </div>
          <button type="button" name="button" class="btn">Sign in</button>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

@media (min-width:840px) {
.md{
  display: none !important;
}

.create-account{
  display: flex;
  max-width: 840px;
  margin: 0 auto;
  justify-content: center;
  padding: 2rem 30px;
  border-radius: 12px;
  transition: 0.3s;
  .contents{
    width: 50%;
    box-sizing: border-box;
    padding: 3rem 1rem;
    box-shadow: $box_shadow04;
    transition: 0.3s;
    h1 {
      padding:0 0 1rem;
      border-bottom: $border01;
      color: $black01;
      text-align: center;
      margin: 0 2rem;
      font-size: 1.25rem;
    }
    form{
      max-width: 240px;
      margin: 0 auto;
      padding: 1.5rem 0 0;
    }
    .item {
      margin:0 0 0.8rem;
      input{
        background-color: #fafafa;
        border: #cacaca solid 1px;
        border-radius: 4px;
        font-size: 16px;
        padding: 0.2rem;
        width: 100%;
        box-sizing: border-box;
        margin-top: 0.2rem;
        &::placeholder{
          font-weight: normal;
          color: #ddd;
          font-size: 14px;
        }
      }
    }
  }
  .sign-in {
    background-color: #fefefe;
    // background-image: url('../static/camp_img.jpg');
    border-radius: 0 12px 12px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      color: $black01;
    }
  }
  .sign-up{
    background-color: #fff;
    border-radius: 12px 0 0 12px;
    label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      color: #1f1f1f;
    }
  }
}

}

@media screen and (min-width: 500px) and (max-width: 840px) {
  .create-account{
    display: flex;
    max-width: 840px;
    margin: 0 auto;
    justify-content: center;
    padding: 2rem 30px;
    border-radius: 12px;
    transition: 0.3s;
    .contents{
      transition: 0.3s;
      width: 70%;
      box-sizing: border-box;
      padding: 3rem 1rem;
      box-shadow: $box_shadow04;
      h1 {
        padding:0 0 1rem;
        border-bottom: $border01;
        color: $black01;
        text-align: center;
        margin: 0 2rem;
        font-size: 1.25rem;
      }
      form{
        max-width: 240px;
        margin: 0 auto;
        padding: 1.5rem 0 0;
      }
      .item {
        margin:0 0 0.8rem;
        input{
          background-color: #fafafa;
          border: #cacaca solid 1px;
          border-radius: 4px;
          font-size: 16px;
          padding: 0.2rem;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.2rem;
          &::placeholder{
            font-weight: normal;
            color: #ddd;
            font-size: 14px;
          }
        }
      }
    }
    .sign-in {
      background-color: #fefefe;
      // background-image: url('../static/camp_img.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: $black01;
      }
    }
    .sign-up{
      background-color: #fff;
      border-radius:12px;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: #1f1f1f;
      }
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .create-account{
    display: flex;
    justify-content: center;
    padding: 2rem 30px;
    border-radius: 12px;
    transition: 0.3s;
    background-color: #fff;
    .contents{
      transition: 0.3s;
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem;
      h1 {
        padding:0 0 1rem;
        border-bottom: $border01;
        color: $black01;
        text-align: center;
        margin: 0 2rem;
        font-size: 1rem;
      }
      form{
        max-width: 240px;
        margin: 0 auto;
        padding: 1.5rem 0 0;
      }
      .item {
        margin:0 0 0.8rem;
        input{
          background-color: #fafafa;
          border: #cacaca solid 1px;
          border-radius: 4px;
          font-size: 16px;
          padding: 0.2rem;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.2rem;
          &::placeholder{
            font-weight: normal;
            color: #ddd;
            font-size: 14px;
          }
        }
      }
    }
    .sign-up{
      background-color: #fff;
      border-radius:12px;
      label {
        display: block;
        font-weight: bold;
        font-size: 12px;
        color: #1f1f1f;
      }
    }
    .sign-in {
      background-color: #fefefe;
      // background-image: url('../static/camp_img.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: none;
      label {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: $black01;
      }
    }
  }
}


</style>
