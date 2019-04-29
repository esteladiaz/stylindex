import styled, { createGlobalStyle } from 'styled-components'
import { breakpoints, colors } from '../../variables'
import Modal from 'styled-react-modal'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.body};
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const HeaderText = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  p {
    margin: 0;
  }
`

export const Logo = styled.img`
  margin-bottom: 1rem;
  @media (min-width:${breakpoints.tabletMin}) {
    width: 400px;
  }
  @media (max-width:${breakpoints.mobileMax}) {
    width: 200px;
  }
`

export const SelectedPokemonWrapper = Modal.styled`
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: ${breakpoints.mobileMax}) {
    width: 80%;
  }
`

export const PokemonCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`

export const PageContainer = styled.div`
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