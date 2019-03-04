import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new HttpLink({ uri: 'http://118.27.21.32/' })

  // auth token
//   const token = 'xxxxxxxxxxxxx'

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
    //   headers: { Authorization: `bearer ${token}` }
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}