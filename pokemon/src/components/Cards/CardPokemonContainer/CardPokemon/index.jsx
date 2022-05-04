import { Fragment, useContext } from 'react';
import PokebolaContext from '../../../../contexts/pokebolaContext';
import './styles.css';

export default function CardPokemon(props) {
	const { pokemon } = props;
	const { updatePokebola } = useContext(PokebolaContext);

	const handleClickPokebola = e => {
		e.preventDefault();
		updatePokebola(pokemon.name);
	};

	return (
		<Fragment>
			<div className='pokemon-container'>
				<div className='pokemon-body'>
					<div className='pokemon-name'>
						<p>{pokemon.name}</p>

						<button onClick={handleClickPokebola}>
							<img src='assets/navbar/pokebola.png' alt='pokebola' />
						</button>
					</div>

					<img src={pokemon.sprites.front_default} alt={pokemon.name} />

					<div className='pokemon-details'>
						<p>Detalles: </p>
						{pokemon.types.map((type, i) => {
							return <div key={i}>{type.type.name}</div>;
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
