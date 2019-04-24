import React from 'react'
import {
  PokemonCard
} from './style'

export default function(props) {
  const { id, image, maxCP, maxHP, name, number, types } = props.pokemon
  const { onClick } = props

  return (
    <PokemonCard pokemonTypes={types} onClick={onClick}>
        <img src={image} alt=""/>
        <h2 title={`id: ${id}`}>{name}</h2>
        <h3>{number}</h3>
        <p><strong>Max HP:</strong> {maxHP}</p>
        <p><strong>Max CP:</strong> {maxCP}</p>
    </PokemonCard>
  )
}