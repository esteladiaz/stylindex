import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {
	Container
} from './style'
import { pokemonQuery } from '../../functions'

export default class Pokemon extends Component {
	render() {
		return (
				<Query query={pokemonQuery}>
					{({ data, loading, error }) => {
						if (error) {
							return <h2>Error! Please try again.</h2>
						}
						if (loading) {
							return <h2>Loading...</h2>
						}
						return (
							<Container>
								<h1>Gotta catch 'em all!</h1>
								<p>Click on a card for more information.</p>
								<p>To exit card, click overlay or press <code>ESC</code></p>
							</Container>
						)
					}}
				</Query>
		)
	}
}
