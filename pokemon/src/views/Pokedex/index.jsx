import { Fragment, useEffect, useState } from 'react';
import ErorBundary from '.././../components/ErrorBoundary';
import CardPokemonContainer from '../../components/Cards/CardPokemonContainer';
import { getPokemon, getPokemonData } from '../../utils/api';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);
	const [pagination, setPagination] = useState(0);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

	const fetchPokemon = async () => {
		try {
			setLoading(true);
			const data = await getPokemon(20, 20 * pagination);
			const promises = data.results.map(async pokemon => {
				return await getPokemonData(pokemon.url);
			});
			const results = await Promise.all(promises);
			setPokemons(results);
			setLoading(false);
			setCount(Math.ceil(data.count / 20));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchPokemon();
	}, [pagination]);

	return (
		<Fragment>
			<ErorBundary>
				<CardPokemonContainer
					loading={loading}
					pokemons={pokemons}
					pagination={pagination}
					setPagination={setPagination}
					count={count}
				/>
			</ErorBundary>
		</Fragment>
	);
}
