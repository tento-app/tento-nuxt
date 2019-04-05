<template lang="html">
  <section>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
    <Header />
    <div class="background">
      <div class="sign-in">
        <h1>ログイン</h1>
        <div class="img">
        </div>
        <form class="">
          <div class="item">
            <label for="in-id">メールアドレス</label>
            <input type="email" name="" value="" id="in-id" v-model="in_identification">
          </div>
          <div class="item">
            <label for="in-password">パスワード</label>
            <input type="password" name="" value="" id="in-password" v-model="in_password">
          </div>

        </form>
        <p class="tos_agreement">
          新規アカウント作成の方は<nuxt-link to='/user/create'>こちら</nuxt-link>から
        </p>
        <div class="button">
          <button name="button" class="btn_priority" @click="login">ログイン</button>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import loginGql from '~/graphql/mutation/login.gql'
import viewerGql from '~/graphql/query/viewer.gql'

export default {
  data() {
    return {
      in_password:'',
      in_identification:''
    }
  },
  components: {
    Header,
    Footer
  },
  data(){
    return {
      in_passworderror:"",
      in_identificationerror:""
    }
  },
  methods: {
    ...mapMutations('user',['setToken','setUsername','setLogo']),
    login: function () {
        this.$apollo.mutate({
            mutation: loginGql,
            variables: {
                username: this.in_identification,
                password: this.in_password,
            }
        }).then((result) => {
            // 成功した場合に実行する処理（200OKのレスポンスの場合）
            // console.log("Wellcome to Tento")
            // console.log(result)
            this.setToken(result.data.authToken.token)
            this.$apollo.query({
                query: viewerGql,
                variables: {
                    token: result.data.authToken.token
                }
            }).then((result) => {
                this.setUsername(result.data.viewer.username)
                this.setLogo(result.data.viewer.logo)
                this.$router.push('/top')
            })
        }).catch((error) => {
            // errorの場合に実行する処理
            console.log("失敗")
        })
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
      font-size: 1.5rem;
    }
    .button {
      text-align: center;
      margin-top: 1rem;
      button {
        width: 100%;
        padding: 0.5rem;
        max-width: none;
        margin: 0;
        background-color: #37AB9D;
      }
    }
    .item {
      margin: 0 0 1rem;
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
  }
  .tos_agreement{
    font-size: 12px;
    a{
      text-decoration: underline;
    }
  }
</style>
