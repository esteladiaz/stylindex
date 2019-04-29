# Estela Diaz: [Frontend Takehome Demo](https://stylindex.esteladiaz.now.sh/)

- Deployed with [Now](https://zeit.co/examples/create-react-app)
- Bootstrapped with create-react-app
- Uses styled-components for styles
- Uses Apollo Client to fetch GQL data
- Fetches GraphQL data from [https://graphql-pokemon.now.sh/](https://graphql-pokemon.now.sh/) -- I modified the query to remove a redundancy I saw (requested Bulbasaur 2x originally)
- Displays list of Pokemon on page, showing
  - Name with ID in title
  - Number
  - MaxHP
  - MaxCP
  - Image
  - Types
- Clicking on a Pokemon card shows all of the above information and the pokemon's evolutions
- Added loader page, error page
- Test coverage: Uses Jest and react-testing-library (WIP)

## To run locally:
- Download, run dev using `yarn start`

Icons from [icon54](https://icon54.com/free-pokemon-go-icons/)