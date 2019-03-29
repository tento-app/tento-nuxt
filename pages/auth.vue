<template>
    <div>
    <Header />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Rubik" rel="stylesheet">
        <input v-model="username" type="text" placeholder="名前">
        <input v-model="password" type="text" placeholder="パスワード">
         <button @click="login">
          login
        </button>
        <br>
        <p>{{ token }}</p>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import Header from '~/layouts/Header.vue';
import loginGql from '~/graphql/mutation/login.gql'
import viewerGql from '~/graphql/query/viewer.gql'
export default {
  components: {
    Header
  },
    data: function () {
        return {
            username: "",
            password: "",
        }
    },
    computed: {
        ...mapState('user',['token'])
    },
    methods: {
        ...mapMutations('user',['setToken','setUsername','setLogo']),
        login: function () {
            this.$apollo.mutate({
                mutation: loginGql,
                variables: {
                    username: this.username,
                    password: this.password,
                }
            }).then((result) => {
                // 成功した場合に実行する処理（200OKのレスポンスの場合）
                console.log("成功")
                console.log(result)
                this.setToken(result.data.authToken.token)
                this.$apollo.query({
                    query: viewerGql,
                    variables: {
                        token: result.data.authToken.token
                    }
                }).then((result) => {
                    this.setUsername(result.data.viewer.username)
                    this.setLogo(result.data.viewer.logo)
                })
            }).catch((error) => {
                // errorの場合に実行する処理
                console.log("失敗")
            })
        }
    }
}
</script>
