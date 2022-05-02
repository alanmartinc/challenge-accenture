import { Fragment } from 'react';

export default function CardPokemon(props) {
	const [pokemons] = props;

	return (
		<Fragment>
			<div>
				<div>
					<img src={pokemons.sprites.front_default} alt={pokemons.name} />
				</div>

				<div>
					<h3>{pokemons.name}</h3>
					<div>#{pokemons.id}</div>
				</div>

				<div>
					<div>
						{pokemons.types.map((type, i) => {
							return <div key={i}>{type.name}</div>;
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
