import styled, { css } from 'styled-components'
import { colors } from '../../variables'

export const getTypeColors = types => {
  const { pokemonTypes } = types
  let typeColor = ''
  pokemonTypes.map(type => {
    type === 'Water' ? typeColor = colors.waterBlue
      : type === 'Bug' || type === 'Poison' ? typeColor = colors.bugGreen
      : type === 'Fire' || type === 'Flying' ? typeColor = colors.fireOrange
      : typeColor = colors.background
    return typeColor
  })
  return css`
    border: 2px solid ${typeColor};
  `
}

export const PokemonCard = styled.a`
  ${getTypeColors}

  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0.5rem 0;
  padding: 1rem 0;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`