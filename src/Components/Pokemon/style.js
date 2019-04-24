import styled from 'styled-components'
import { breakpoints } from '../../variables'

export const Container = styled.div`
  @media (min-width: ${breakpoints.desktopMin}) {
    margin: 0 3rem;
  }
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    margin: 0 1rem;
  }
  @media (max-width: ${breakpoints.mobileMax}) {
    margin: 0 0.5rem;
  }
`

export const PokemonCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`