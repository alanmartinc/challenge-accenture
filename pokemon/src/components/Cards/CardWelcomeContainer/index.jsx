import CardWelcome from './CardWelcome';
import ErorBundary from '../../ErrorBoundary';

export default function CardWelcomeContainer() {
	return (
		<ErorBundary>
			<CardWelcome />
		</ErorBundary>
	);
}
