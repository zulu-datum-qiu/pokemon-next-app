import styled from '@emotion/styled';
import { CssBaseline } from "@mui/material";
import PokemonInfo from '../components/PokemonInfo';
import PokemonFilter from '../components/PokemonFilter';
import PokemonTable from '../components/PokemonTable';
import store from '../src/store';

// styled Title component
const Title = styled.h1`
  text-align: center;
`;

// styled Layout component
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

// styled Page Container component
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

export const getServerSideProps = async() => {
  
  const resp = await fetch("http://localhost:3000/pokemon.json");
  const pokemons = await resp.json();
  
  return {
    props: {
      pokemons
    }
  }
}


export default function Home({pokemons}) {
  store.setPokemons(pokemons);

  return (
    <>      
      <PageContainer>
        <CssBaseline>
        <Title>Pokemons Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          
          <PokemonInfo />
          
        </TwoColumnLayout>
        </CssBaseline>
      </PageContainer>
    </>
  )
}
