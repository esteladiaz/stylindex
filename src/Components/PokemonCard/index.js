import React from 'react'
import {
  PokemonCard,
  PokemonCardImage,
  PokemonCardInformation,
  TypeColor,
  TypeColorContainer
} from './style'

export default function(props) {
  const { id, image, maxCP, maxHP, name, number, types } = props.pokemon
  const { onClick } = props
  return (
    <PokemonCard onClick={onClick}>
      <TypeColorContainer>
        {types.map((type, idx) => <TypeColor key={idx} pokemonType={type}>{type}</TypeColor>)}
      </TypeColorContainer>
      <PokemonCardImage>
      <img src={image} alt={name} />
      </PokemonCardImage>
      <PokemonCardInformation>
        <h2 title={`id: ${id}`}>{name}</h2>
        <h3>{number}</h3>
        <p><strong>Max HP:</strong> {maxHP}</p>
        <p><strong>Max CP:</strong> {maxCP}</p>
      </PokemonCardInformation>
    </PokemonCard>
  )
}