
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new createUploadLink({
    uri: 'http://127.0.0.1:8000',
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