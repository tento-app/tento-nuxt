<template lang="html">
  <section>
    <Header />
    <div class="background">
      <div class="sign-in">
        <h1>新規アカウント作成</h1>
        <div class="img">
        </div>
        <div class="item">
          <label for="in-id">メールアドレス</label>
          <input type="text" name="" value="" id="in-id" v-model="in_identification" v-bind:class="{error : in_identificationerror}">
        </div>
        <div class="item">
          <label for="in-id">ユーザーID</label>
          <input type="text" name="" value="" id="in-id" v-model="in_identification" v-bind:class="{error : in_identificationerror}">
        </div>
        <div class="item">
          <label for="in-password">パスワード</label>
          <input type="password" name="" value="" id="in-password" v-model="in_password" v-bind:class="{error : in_passworderror}">
        </div>
        <div class="button">
          <button name="button" class="btn_priority" @click="login">ログイン</button>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import Card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
export default {
  components: {
    Card,
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_color.scss';
.background {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height:calc(100vh - 67.4px);
}
  .sign-in{
    background-color: #fff;
    max-width: 350px;
    margin:3rem auto;
    padding: 2rem 3rem;
    h1 {
      text-align: center;
      font-size: 1.25rem;
      border-bottom: solid 0.5px $black03;
      margin-bottom: 1rem;
    }
    .button {
      text-align: center;
      margin-top: 1rem;
      button {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
      }
    }
    .item {
      margin: 0 0 1.2rem;
    }
    input{
      border: 0;
      border-bottom: $black02 solid 0.5px;
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
    label {
      display: block;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
