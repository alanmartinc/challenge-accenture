import { useState } from 'react';
import { searchPokemon } from '../../utils/api';
import './index.css';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const [pokemon, setPokemon] = useState();

	const handleOnChange = e => {
		setSearch(e.target.value);
	};

	const handleOnClick = async e => {
		const data = await searchPokemon(search);
		console.log(data);
		setPokemon(data);
	};

	return (
		<div className='search-box-container'>
			<h2 className='search-box-title'>Buscador</h2>

			<label>
				<input
					className='search-box-input'
					placeholder='Ingrese un pokemon'
					onChange={handleOnChange}
				/>
			</label>

			<button onClick={handleOnClick}>Buscar</button>

			{pokemon && (
				<div>
					<p>Nombre: {pokemon.name}</p>
					<p>Peso: {pokemon.weight}</p>
					<img src={pokemon.sprites.front_default} alt='pokemons' />
				</div>
			)}
		</div>
	);
}
