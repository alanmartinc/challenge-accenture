import { Fragment } from 'react';

export default function CardPokemon(props) {
	const { pokemon } = props;

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

					<button>
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
