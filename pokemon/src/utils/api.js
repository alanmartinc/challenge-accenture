export const searchPokemon = async pokemon => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (e) {
		console.log(e);
	}
};

export const getPokemon = async (limit = 20, offset = 0) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (e) {
		console.log(e);
	}
};

export const getPokemonData = async url => {
	try {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (e) {
		console.log(e);
	}
};
