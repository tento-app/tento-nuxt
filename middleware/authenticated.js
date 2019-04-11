import viewerGql from '~/graphql/query/viewer.gql'

export default function (context) {
    // ユーザが認証されていない場合
    if (context.app.$cookies.get('cookie-token', { path: '/'}) == "null") {
      return context.redirect('/user/login')
    }
    if (!context.app.$cookies.get('cookie-token', { path: '/'})) {
        return context.redirect('/user/login')
      }
  }