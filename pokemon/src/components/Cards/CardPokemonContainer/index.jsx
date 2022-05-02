import { Fragment } from 'react';
import SearchBox from '../../SearchBox';
import Pagination from '../../Pagination';
import CardPokemon from './CardPokemon';

export default function CardPokemonContainer(props) {
	const { pokemons } = props;

	return (
		<Fragment>
			<SearchBox />
			<div className='pokedex-container'>Pokemon</div>
			<Pagination />

			{pokemons.map((pokemon, i) => {
				return <CardPokemon pokemon={pokemon} key={pokemon.name} />;
			})}
		</Fragment>
	);
}
