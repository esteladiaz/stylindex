import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'

export const EvolutionImage = styled.div`
  height: 100px;
  overflow-y: hidden;
  width: 100px;
  img {
    height: auto;
    width: 100%;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    height: 70px;
    width: 70px;
  }
`

export const EvolutionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
`

export const SelectedPokemonInformation = styled.div`
  justify-content: center;
  text-align: center;
  width: calc((100% / 2) - 1rem);
  h2 {
    margin: 0 0 1rem;
    text-decoration: underline;
  }
  p:not(:last-child) {
    margin: 0;
  }
  img {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
    img {
      width: 30%;
    }
  }
`

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  width: calc((100% / 2) - 1rem);
  h2 {
    margin: 0 0 1rem 0;
  }
  h3 {
    text-decoration: underline;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    margin-top: 1rem;
    width: 100%;
  }
`

export const TypeColorContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;
  position: relative;
  text-align: center;
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
