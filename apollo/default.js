
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from "apollo-link-error";

export default () => {
  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
  })

  const httpLink = createUploadLink({
    uri: 'http://127.0.0.1:8000',
    fetchOptions: {},
    headers: {},
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    }
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