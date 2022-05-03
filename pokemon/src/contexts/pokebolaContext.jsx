import React from 'react';

const PokebolaContext = React.createContext({
	pokebolaPokemons: [],
	updatePokebola: id => null,
});

export const PokebolaProvider = PokebolaContext.Provider;

export default PokebolaContext;
