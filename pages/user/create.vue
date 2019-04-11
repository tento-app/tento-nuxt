<template lang="html">
  <section>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="background">

      <form @submit.prevent="createuser">
      <div class="sign-in">
        <h1>新規アカウント作成</h1>
        <div class="img">
        </div>
        <div class="item">
          <label for="in-id">ユーザーID</label>
          <input type="text" id="in-id" pattern="^[0-9A-Za-z]+$" title="半角英数字で入力してください" v-model="username" required maxlength="12">
          <p class="count">{{ username.length }}/12</p>
        </div>
        <div class="item">
          <label for="in-email">メールアドレス</label>
          <input type="email" id="in-email" v-model="email" required>
        </div>
        <div class="item">
          <label for="in-password">パスワード</label>
          <input type="password" id="in-password" v-model="password" required>
        </div>
        <p class="tos_agreement">[新規アカウント作成]をクリックすることで
          <nuxt-link to='/terms'>利用規約</nuxt-link>、<nuxt-link to='/privacy'>プライバシーポリシー</nuxt-link>
          に同意するものとします。
        </p>
        <div class="button">
          <button name="submit" class="btn_priority">新規アカウント作成</button>
        </div>
      </div>
      </form>

    </div>

  </section>
</template>

<script>
import createUserGql from "~/graphql/mutation/createUser.gql";
import loginGql from '~/graphql/mutation/login.gql'
import { mapState,mapMutations } from 'vuex'

import Card from '~/components/card.vue';
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
export default {
  components: {
    Card,
    Header,
    Footer
  },
  data() {
    return {
      username: "",
      email:"",
      password:"",
      position:"",
      content:"",
      url:"",
    }
  },
  methods: {
    ...mapMutations('user',['setToken','setUsername','setLogo']),
    createuser: function(){
      this.$apollo.mutate({
        mutation: createUserGql,
        variables: {
          userData: {
            username: this.username,
            email: this.email,
            password:this.password,
            position: this.position,
            content: this.content,
            url: this.url,
          }
        }
      })
      .then(result => {
        // 成功した場合に実行する処理（200OKのレスポンスの場合）
        this.$apollo.mutate({
            mutation: loginGql,
            variables: {
                username: this.email,
                password: this.password,
            }
        }).then((result) => {
            // 成功した場合に実行する処理（200OKのレスポンスの場合
          this.setUsername(this.username)
          this.setToken(result.data.authToken.token)
          this.$router.push('/user/edit')
        }).catch((error) => {
              console.log(error)
        })
      })
      .catch(error => {
        // errorの場合に実行する処理
        if ( String(error).match(/for key 'username/)) {
          //usernameが使われてた場合の処理
          alert('そのユーザーIDは既に使われているぞ！')
        } else if ( String(error).match(/for key 'users_user_email/)) {
          //メアドが使われてた場合の処理
          alert('そのメールアドレスは既に使われているぞ！')
        } else if ( String(error).match(/username_error/)) {
          alert('ユーザー名が正しくありません\n半角英数字_が使えます')
        } else if ( String(error).match(/password_error/)) {
          alert('パスワードが正しくありません\n半角英数字記号が使えます')
        } else if ( String(error).match(/email_error/)) {
          alert('正しいメールアドレスですか？')
        } else {
          alert('作成失敗した！\nサポートに連絡してみてね！')
          console.log(error)
        }
      });
    }
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
      border-bottom: solid 0.5px $black03;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      font-size: 1.4rem;
    }
    .button {
      text-align: center;
      margin-top: 1rem;
      button {
        width: 100%;
        padding: 0.5rem;
        margin: 0;
        max-width: none;
      }
    }
    .item {
      margin: 0 0 1.2rem;
      position: relative;
    }
    .count {
      bottom: 5px;
      right: 10px;
      position: absolute;
      font-weight: lighter;
      color: #ccc;
    }
    input{
      border: 0;
      border-bottom: $black02 solid 0.5px;
      font-size: 16px;
      padding: 0.2rem;
      width: 100%;
      box-sizing: border-box;
      margin-top: 0.2rem;
      border-radius: 0;
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
    .tos_agreement{
      font-size: 12px;
      a{
        text-decoration: underline;
      }
    }
  }
</style>
