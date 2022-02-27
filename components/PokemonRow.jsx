import Link from 'next/link';
import { Button } from '@mui/material';
import PokemonType from '../src/pokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr>
      <td>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>{pokemon.name.english}</a>
        </Link>
      </td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More ...
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemons: PokemonType,
}

export default PokemonRow;