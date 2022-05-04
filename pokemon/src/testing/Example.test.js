import { render, screen } from '@testing-library/react';
import Example from './Example';

test('example title', () => {
	render(<Example />);
	expect(screen.getByText(/hola/i)).toBeInTheDocument();
});

test('example class', () => {
	const { container } = render(<Example />);
	expect(container.getElementsByClassName('example').length).toBe(1);
});
