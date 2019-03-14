<template>
    <div>
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
import loginGql from '~/graphql/mutation/login.gql'
export default {
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
        ...mapMutations('user',['setToken']),
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
            }).catch((error) => {
                // errorの場合に実行する処理
                console.log("失敗")
            })
        }
    }
}
</script>
