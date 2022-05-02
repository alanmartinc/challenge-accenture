import { Fragment, useEffect, useState } from 'react';
import ErorBundary from '.././../components/ErrorBoundary';
import CardPokemonContainer from '../../components/Cards/CardPokemonContainer';
import { getPokemon, getPokemonData } from '../../utils/api';
import './index.css';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);

	const fetchPokemon = async () => {
		try {
			const data = await getPokemon();
			const promises = data.results.map(async pokemon => {
				return await getPokemonData(pokemon.url);
			});
			const results = await Promise.all(promises);
			setPokemons(results);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchPokemon();
	}, []);

	return (
		<Fragment>
			<ErorBundary>
				<CardPokemonContainer pokemons={pokemons} />
			</ErorBundary>
		</Fragment>
	);
}
