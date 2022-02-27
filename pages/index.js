import styled from '@emotion/styled';
import { CssBaseline } from "@mui/material";
import PokemonInfo from '../components/PokemonInfo';
import PokemonFilter from '../components/PokemonFilter';
import PokemonTable from '../components/PokemonTable';

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


export default function Home() {
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
