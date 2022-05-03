import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function Login() {
	const [t] = useTranslation('login');

	return (
		<Fragment>
			<h1>{t('login.title')}</h1>

			<div className='burbujas'>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
			</div>
		</Fragment>
	);
}
