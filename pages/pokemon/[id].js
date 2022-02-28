/*
** Pokemon Information page for a specific 
** pokemon.
*/

import { withRouter } from 'next/router';
import styled from '@emotion/styled';
import { CssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import store from '../../src/store';

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

export const getStaticPaths = () => {
  
  const pokemons = require('../../src/pokemon.json');
  const paths = pokemons.map((p) => ({
    params: {
      id: p.id.toString()
    }
  }));
  
  return {
    paths, 
    fallback: false
  };
}

export const getStaticProps = (context) => {
  
  const pokemons = require("../../src/pokemon.json");
  const pokemon = pokemons.find(({id}) => {
    return id.toString() === context.params.id;
  })
  return {
    props: {
      pokemon
    }
  }
}

export default withRouter(( {pokemon} ) => {
  return (
    <>
      <PageContainer>
        <CssBaseline>
          {
            pokemon && (
              <div>
                <h1>{pokemon.name.english}</h1>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Attribute</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    Object.keys(pokemon.base).map((k) => {
                      return (
                        <TableRow key={k}>
                          <TableCell>{k}</TableCell>
                          <TableCell>{pokemon.base[k]}</TableCell>
                        </TableRow>
                      )
                    })
                  }
                  </TableBody>
                </Table>
              </div>
            )
          }
        </CssBaseline>
      </PageContainer>
    </>
  )
})