import { Fragment, useContext } from 'react';
import PokebolaContext from '../../../../contexts/pokebolaContext';

export default function CardPokemon(props) {
	const { pokemon } = props;
	const { updatePokebola } = useContext(PokebolaContext);

	const handleClickPokebola = e => {
		e.preventDefault();
		updatePokebola(pokemon.name);
	};

	return (
		<Fragment>
			<div>
				<div>
					<h3>{pokemon.name}</h3>
					<div>#{pokemon.id}</div>
				</div>

				<div>
					<div>
						{pokemon.types.map((type, i) => {
							return <div key={i}>{type.type.name}</div>;
						})}
					</div>

					<button onClick={handleClickPokebola}>
						<img src='assets/pokebola.png' alt='pokebola' />
					</button>
				</div>

				<div>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				</div>
			</div>
		</Fragment>
	);
}
