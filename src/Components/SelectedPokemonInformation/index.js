import React, { Fragment } from 'react'
import { EvolutionImage, EvolutionsWrapper, InformationWrapper, SelectedPokemonInformation } from './style'
import  { TypeColor, TypeColorContainer } from './style'


export default function(props) {
	const { name, id, number, maxHP, maxCP, types, evolutions, image } = props.pokemon
	return (
		<Fragment>
			<SelectedPokemonInformation>
				<img src={image} alt={name} />
				<h2 title={id}>{name}: {number}</h2>
				<p><strong>Max HP: </strong>{maxHP}</p>
				<p><strong>Max CP: </strong>{maxCP}</p>
				{types && (
					<TypeColorContainer>
						{types.map((type, idx) => <TypeColor key={idx} pokemonType={type}>{type}</TypeColor>)}
					</TypeColorContainer>
				)}
			</SelectedPokemonInformation>
			<InformationWrapper>
				{evolutions ? (
					<Fragment>
						<h3>Evolutions:</h3>
						<EvolutionsWrapper>
							{evolutions.map((evolution, idx) => {
								return (
									<div key={idx}>
										<EvolutionImage>
											<img src={evolution.image} alt={evolution.name} />
										</EvolutionImage>
										<p>
											<strong>{evolution.name}</strong>
										</p>
									</div>
								)
							})}
						</EvolutionsWrapper>
					</Fragment>
				) : (
					<h3>No more evolutions</h3>
				)}
			</InformationWrapper>
		</Fragment>
	)
}
