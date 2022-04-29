import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemMoreInfo() {
	const [t] = useTranslation('global');

	return (
		<Fragment>
			<h2>
				{t('footer.title')}{' '}
				<span className='blue-highlight'>{t('footer.span')}</span>
			</h2>
			<h3>{t('footer.subtitle')}</h3>

			<button className='button-primary'>{t('footer.button')}</button>
		</Fragment>
	);
}
