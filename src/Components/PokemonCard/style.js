import styled, { css } from 'styled-components'
import { breakpoints, colors } from '../../variables'

const pokemonCardBreakpoints = css`
  @media (min-width: ${breakpoints.desktopMin}) {
    border: 1px solid ${colors.lightGrey};
    margin: 1.25rem;
    width: calc((100% / 4) - 4rem);
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
  ${pokemonCardBreakpoints}
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
  h2, h3, p {
    margin: 0;
  }
`

export const PokemonCardHeaderInfo = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 1rem;
`

export const PokemonImageAndInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 120px;
  margin-top: 1rem;
  width: 100%;
  img {
    height: 40%;
    left: 20%;
    position: relative;
  }
`

export const PokemonImageContainer = styled.div`
  width: 50%;
`

export const PokemonCardInformation = styled.div``

export const TypeColorContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  text-align: center;
  width: 50%;
`

export const TypeColor = styled.div.attrs(({ pokemonType }) => {
  let typeColor = ''
  pokemonType === 'Bug' ? typeColor = colors.bugGreen
  : pokemonType === 'Dragon' ? typeColor = colors.dragonPurple
  : pokemonType === 'Electric' ? typeColor = colors.electricYellow
  : pokemonType === 'Fairy' ? typeColor = colors.fairyPink
  : pokemonType === 'Fighting' ? typeColor = colors.fightingBeige
  : pokemonType === 'Fire' ? typeColor = colors.fireOrange
  : pokemonType === 'Flying' ? typeColor = colors.flyOnTheWall
  : pokemonType === 'Ghost' ? typeColor = colors.ghostGreen
  : pokemonType === 'Grass' ? typeColor = colors.grassGreen
  : pokemonType === 'Ground' ? typeColor = colors.groundBrown
  : pokemonType === 'Ice' ? typeColor = colors.iceBrown
  : pokemonType === 'Normal' ? typeColor = colors.normalGrey
  : pokemonType === 'Poison' ? typeColor = colors.poisonVenom
  : pokemonType === 'Psychic' ? typeColor = colors.psychicYellow
  : pokemonType === 'Rock' ? typeColor = colors.rockyRoad
  : pokemonType === 'Steel' ? typeColor = colors.steelyBlue
  : pokemonType === 'Water' ? typeColor = colors.waterBlue
  : typeColor = colors.background

  return {typeColor}
})`
  background-color: ${props => props.typeColor};
  border-radius: 1rem;
  box-shadow: rgba(0,0,0,0.05) 0px 1px 0px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  height: 20px;
  letter-spacing: 1px;
  padding: 0.125rem 0.25rem;
  position: relative;
  right: 0;
  &:nth-child(even) {
    margin-left: 0.25rem;
  }
`
