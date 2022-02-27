/*
** Pokemon Information page for a specific 
** pokemon.
*/

import { withRouter } from 'next/router';
import styled from '@emotion/styled';
import { CssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import store from '../../src/store';

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

export default withRouter(( {router} ) => {
    
  const pokemon = store.pokemons.find(({id}) => id.toString() === router.query.id);

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