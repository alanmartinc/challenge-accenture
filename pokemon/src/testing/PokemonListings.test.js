import { render, screen } from '@testing-library/react';
import Example from './Example';

test('PokemonListings', () => {
	render(<Example />);
	expect(screen.getByText(/hola/i)).toBeInTheDocument();
});
