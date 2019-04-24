import styled, { css } from 'styled-components'
import { breakpoints, colors } from '../../variables'

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

const pokemonCardBreakpoints = css`
  @media (min-width: ${breakpoints.desktopMin}) {
    margin: 1rem;
    width: calc((100% / 4) - 2rem);
    &:nth-child(4n + 1) {
      margin-left: 0;
    }
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
  }
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    margin: 1rem 0.56rem;
    width: calc((100% / 3) - 1rem);
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
  }
  @media (min-width: ${breakpoints.mobileXsMax}) and (max-width: ${breakpoints.mobileMax}) {
    width: calc((100% / 2) - 0.5rem);
    margin-bottom: 1rem;
    &:nth-child(odd) {
      margin-right: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.mobileXsMax}) {
    margin-bottom: 1rem;
    margin-right: 0;
    width: 100%;
  }
`

export const PokemonCard = styled.a`
  ${getTypeColors}
  ${pokemonCardBreakpoints}
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`

export const PokemonCardImage = styled.div`
  height: auto;
  width: 180px;
  img {
    width: 100%;
  }
`

export const PokemonCardInformation = styled.div`
`