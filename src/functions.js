// Normally would label transformer.js for data transforing functions exported from here
import gql from 'graphql-tag'

export const pokemonQuery = gql`
	{
		pokemons(first: 10) {
			id
			number
			name
			maxCP
			maxHP
			image
			types
			evolutions {
				id
				number
				name
				maxCP
				maxHP
				image
				types
			}
		}
	}
`