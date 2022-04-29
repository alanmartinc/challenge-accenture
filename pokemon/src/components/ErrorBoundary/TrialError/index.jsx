import { useState } from 'react';

export default function TrialError() {
	const [counter, setCounter] = useState(0);

	if (counter === 3) throw new Error('Código 43');

	return (
		<div>
			<h1>Contador: {counter}</h1>

			<button onClick={() => setCounter(counter + 1)}>Click</button>
		</div>
	);
}
