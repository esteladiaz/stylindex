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
	};

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
							</HeaderText>
							<PokemonCardWrapper>
								{pokemons.map((pokemon, idx) => (
									<PokemonCard
										key={idx}
										pokemon={pokemon}
										onClick={() => this.toggleModal(pokemon)}
									/>
								))}
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
