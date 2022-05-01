import { Fragment, useEffect } from 'react';
import ErorBundary from '.././../components/ErrorBoundary';
import Pokemon from '../../components/Pokemon';

export default function Pokedex() {
	useEffect(() => {
		console.log('Inside useEffects');
	}, []);
	return (
		<Fragment>
			<ErorBundary>
				<Pokemon />
			</ErorBundary>
		</Fragment>
	);
}
