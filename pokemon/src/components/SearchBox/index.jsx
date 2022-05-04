import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../../utils/api';
import './styles.css';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const [pokemon, setPokemon] = useState();
	const [t] = useTranslation('pokedex');

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
			<h2 className='search-box-title'>{t('pokedex.title')}</h2>

			<div className='search-box-input-group'>
				<input
					type='text'
					id='pokemons'
					name='pokemons'
					placeholder={t('pokedex.place-holder')}
					onChange={handleOnChange}
					required
				/>
			</div>

			<div className='search-box-button'>
				<button className='button-primary' onClick={handleOnClick}>
					<Link to={'#'}>{t('pokedex.button')}</Link>
				</button>
			</div>

			{pokemon && (
				<div className='search-box-pokemon'>
					<p>Nombre: {pokemon.name}</p>
					<img src={pokemon.sprites.front_default} alt='pokemons' />
				</div>
			)}
		</div>
	);
}
