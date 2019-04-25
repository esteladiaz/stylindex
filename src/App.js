import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ModalProvider } from 'styled-react-modal'
import Pokemon from './Components/Pokemon'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Pokemon />
      </ModalProvider>
  </ApolloProvider>
  )
}

export default App
