export default function (context) {
    // ユーザが認証されてホームページにリダイレクトされた場合
    if (context.store.state.user.token) {
      return context.redirect('/')
    }
  }