import styled from 'styled-components'
import { breakpoints } from '../../variables'

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
  @media (max-width: ${breakpoints.mobileMax}) {
    margin-top: 1rem;
    width: 100%;
  }
`