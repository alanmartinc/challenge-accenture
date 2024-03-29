import { Fragment } from 'react';
import SearchBox from '../../SearchBox';
import Pagination from '../../Pagination';
import CardPokemon from './CardPokemon';
import Spinner from '../../Spinner';
import './styles.css';

export default function CardPokemonContainer(props) {
	const { pokemons, pagination, setPagination, count, loading } = props;

	const lastPage = () => {
		const nextPage = Math.max(pagination - 1, 0);
		setPagination(nextPage);
	};

	const nextPage = () => {
		const nextPage = Math.min(pagination + 1, count);
		setPagination(nextPage);
	};

	return (
		<Fragment>
			<SearchBox />
			{loading ? (
				<Spinner />
			) : (
				<div className='pokemon-align'>
					{pokemons.map((pokemon, i) => {
						return <CardPokemon pokemon={pokemon} key={pokemon.name} />;
					})}
				</div>
			)}

			<Pagination
				pagination
				page={pagination + 1}
				totalPages={count}
				handleOnLeftClick={lastPage}
				handleOnRightClick={nextPage}
			/>
		</Fragment>
	);
}
