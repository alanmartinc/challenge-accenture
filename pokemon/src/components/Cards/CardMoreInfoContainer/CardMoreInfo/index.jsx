import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemMoreInfo() {
	const [t] = useTranslation('global');

	return (
		<Fragment>
			<h2>
				{t('footer.title')}{' '}
				<span className='more-info-blue'>{t('footer.span')}</span>
			</h2>
			<h3>{t('footer.subtitle')}</h3>

			<button className='button-primary'>
				<a href='https://www.wolox.com.ar/' target='_blank' rel='noreferrer'>
					{t('footer.button')}
				</a>
			</button>
		</Fragment>
	);
}
