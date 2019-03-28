
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {

  const httpLink = createUploadLink({
    uri: 'https://api.tento.app',
    fetchOptions: {},
    headers: {},
  })

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