import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemWelcome() {
	const [t] = useTranslation('landing');

	return (
		<div className='welcome-container'>
			<div className='welcome-title'>
				<h2>
					{t('card-welcome.title-initial')}{' '}
					<b className='black-highlight'>{t('card-welcome.bold')}</b>{' '}
					{t('card-welcome.title-end')}{' '}
					<span className='green-highlight'>Wolox</span>
				</h2>
			</div>
			<div className='welcome-image'>
				<img src='assets/header/Ic_ilustra_Hero@3x.png' alt='hero' />
			</div>
		</div>
	);
}
