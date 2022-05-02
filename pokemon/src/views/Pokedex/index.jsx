import { Fragment, useEffect, useState } from 'react';
import ErorBundary from '.././../components/ErrorBoundary';
import CardPokemonContainer from '../../components/Cards/CardPokemonContainer';
import { getPokemon } from '../../utils/api';
import './index.css';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);

	const fetchPokemon = async () => {
		try {
			const data = await getPokemon();
			setPokemons(data.results);
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
