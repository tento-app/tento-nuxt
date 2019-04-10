import viewerGql from '~/graphql/query/viewer.gql'
export const actions = {
  nuxtServerInit (vuexContext, context) {
    if (context.app.$cookies.get('cookie-token', { path: '/'})) {
      context.app.apolloProvider.defaultClient.query({
          query: viewerGql,
          variables: {
              token: context.app.$cookies.get('cookie-token', { path: '/'})
          }
      }).then((result) => {
          context.store.commit('user/setToken', context.app.$cookies.get('cookie-token', { path: '/'}))
          context.store.commit('user/setUsername', result.data.viewer.username)
          context.store.commit('user/setLogo', result.data.viewer.logo)
      }).catch((error) => {
      })
    }
  }
}