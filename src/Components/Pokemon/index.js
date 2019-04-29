import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GlobalStyle, HeaderText, Logo, PageContainer, PokemonCardWrapper, SelectedPokemonWrapper } from './style';
import { pokemonQuery } from '../../functions';
import PokemonCard from '../PokemonCard';
import SelectedPokemonInformation from '../SelectedPokemonInformation';
import logo from '../../Assets/logo.png';

export default class Pokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemonCards: null,
			selectedPokemon: null,
			showModal: false
		};
	}

	toggleModal = (pokemon) => {
		const { showModal } = this.state;
		this.setState({
			showModal: !showModal,
			selectedPokemon: pokemon
		});
	}

	getPokemonCards = (pokemons) => {
		const { pokemonCards } = this.state

		if (pokemonCards) {
			return pokemonCards.map((pokemon, idx) => (
				<PokemonCard
					key={idx}
					pokemon={pokemon}
					onClick={() => this.toggleModal(pokemon)}
				/>
			))
		} else {
			return pokemons.map((pokemon, idx) => (
				<PokemonCard
					key={idx}
					pokemon={pokemon}
					onClick={() => this.toggleModal(pokemon)}
				/>
			)) 

		}
	}

	// filterPokemon = (e, pokemons) => {
	// 	console.log(e.target.value, "VALUE")
	// 	let regex = new RegExp(e.target.value, 'gi')
	// 	let filteredPokemon = pokemons.filter(pokemon => pokemon.name.match(regex))
	// 	this.setState({pokemonCards: filteredPokemon})
	// }

	render() {
		const { selectedPokemon, showModal } = this.state;
		return (
			<Query query={pokemonQuery}>
				{({ data, loading, error }) => {
					const { pokemons } = data;
					return error ? (
						<h2>Error! Please try again.</h2>
					) : loading ? (
						<h2>Loading...</h2>
					) : (
						<PageContainer>
							<GlobalStyle />
							<HeaderText>
								<Logo src={logo} alt="Pokemon pokedex logo" />
								<p>Click on a card for more information.</p>
								<p>
									To exit card, click overlay or press <code>ESC</code>
								</p>
							{/* <input type="text" placeholder="Search pokemon" onChange={e => this.filterPokemon(e, pokemons)} /> */}
							</HeaderText>
							<PokemonCardWrapper>
								{this.getPokemonCards(pokemons)}
							</PokemonCardWrapper>
							{selectedPokemon &&
								<SelectedPokemonWrapper
									allowScroll={true}
									ariaHideApp={false}
									isOpen={showModal}
									onBackgroundClick={this.toggleModal}
									onEscapeKeydown={this.toggleModal}
								>
									<SelectedPokemonInformation pokemon={selectedPokemon} />
								</SelectedPokemonWrapper>
							}
						</PageContainer>
					);
				}}
			</Query>
		);
	}
}
