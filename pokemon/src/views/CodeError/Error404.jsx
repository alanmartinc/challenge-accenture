import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Error404() {
	const [t] = useTranslation('global');

	return (
		<Fragment>
			<div className='error-404-container'>
				<h2>
					Error <span className='blue-highlight'>404</span>
				</h2>

				<h3>{t('code-errors.404')}</h3>

				<img src='assets/code-errors/404.png' alt='404' />

				<button className='button-secondary'>
					<Link to={'/'}>{t('code-errors.button')}</Link>
				</button>
			</div>
		</Fragment>
	);
}
