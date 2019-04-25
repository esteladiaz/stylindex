import React from 'react'
import {
  PokemonCard,
  PokemonCardHeaderInfo,
  PokemonCardInformation,
  PokemonImageAndInfo,
  PokemonImageContainer,
  TypeColor,
  TypeColorContainer
} from './style'

export default function(props) {
  const { id, image, maxCP, maxHP, name, number, types } = props.pokemon
  const { onClick } = props
  return (
    <PokemonCard onClick={onClick}>
      <PokemonCardHeaderInfo>
        <h2 title={`id: ${id}`}>{name}</h2>
        <h3>{number}</h3>
      </PokemonCardHeaderInfo>
      <PokemonImageAndInfo>
        <PokemonCardInformation>
          <p><strong>Max HP:</strong> {maxHP}</p>
          <p><strong>Max CP:</strong> {maxCP}</p>
        </PokemonCardInformation>
        <PokemonImageContainer>
          <img src={image} alt={name} />
        </PokemonImageContainer>
      </PokemonImageAndInfo>
      <TypeColorContainer>
        {types.map((type, idx) => <TypeColor key={idx} pokemonType={type}>{type}</TypeColor>)}
      </TypeColorContainer>
    </PokemonCard>
  )
}