import React from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Instantiating new client</div>
  </ApolloProvider>
  )
}

export default App
