import viewerGql from '~/graphql/query/viewer.gql'

export default function (context) {
    // ユーザが認証されていない場合
    if (!context.app.$cookies.get('cookie-token')) {
      return context.redirect('/sign-in')
    }
    const token = context.app.$cookies.get('cookie-token')
    context.store.commit('user/setToken', token)
    context.app.apolloProvider.defaultClient.query({
        query: viewerGql,
        variables: {
            token: token
        }
    }).then((result) => {
        context.store.commit('user/setUsername', result.data.viewer.username)
        context.store.commit('user/setLogo', result.data.viewer.logo)
    }).catch((error) => {
    // errorの場合に実行する処理
        console.log(error)
    })
  }