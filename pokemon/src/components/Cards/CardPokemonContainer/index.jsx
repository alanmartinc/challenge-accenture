import { Fragment } from 'react';
import SearchBox from '../../SearchBox';
import Pagination from '../../Pagination';

export default function CardPokemonContainer({ pokemons }) {
	return (
		<Fragment>
			<SearchBox />
			<div className='pokedex-container'>Pokemon</div>
			<Pagination />

			{pokemons.map((pokemon, i) => {
				return (
					<div key={pokemon.name}>
						#{i + 1}: {pokemon.name}
					</div>
				);
			})}
		</Fragment>
	);
}
