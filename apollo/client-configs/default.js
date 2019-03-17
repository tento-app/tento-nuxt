import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new HttpLink({
    uri: 'https://api.tento.app',
    fetchOptions: {},
    headers: {},
  })

  // auth token
//   const token = 'xxxxxxxxxxxxx'

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultHttpLink: false,
  }
}