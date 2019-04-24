import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {
	Container
} from './style'
import { pokemonQuery } from '../../functions'
import PokemonCard from '../PokemonCard'

export default class Pokemon extends Component {
	render() {
    return (
      <Query query={pokemonQuery}>
					{({ data, loading, error }) => {
            const { pokemons } = data
						return error ? <h2>Error! Please try again.</h2>
          : loading ? <h2>Loading...</h2>
          : (
            <Container>
              <h1>Gotta catch 'em all!</h1>
              <p>Click on a card for more information.</p>
              <p>To exit card, click overlay or press <code>ESC</code></p>
              {pokemons.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon} />)}
            </Container>
            )
					}}
				</Query>
		)
	}
}
