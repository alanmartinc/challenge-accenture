import CardBenefits from './CardBenefits';
import ErorBundary from '../../ErrorBoundary';

export default function CardBenefitsContainer() {
	return (
		<ErorBundary>
			<CardBenefits />
		</ErorBundary>
	);
}
