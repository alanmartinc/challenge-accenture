import { Link } from 'react-router-dom';
import './index.css';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const [t, i18n] = useTranslation('global');

	return (
		<nav className='nav-container'>
			<div className='nav-logo'>
				<Link to={'/'}>
					<img src='assets/logo_full_color.svg' alt='wolox-navbar' />
				</Link>
			</div>

			<div className='nav-list'>
				<Link to={'/'}>{t('navbar.home')}</Link>

				<Link to={'/'}>{t('navbar.benefits')}</Link>

				<Link to={'/login'}>
					<button className='button-secondary'>{t('navbar.login')}</button>
				</Link>

				<button onClick={() => i18n.changeLanguage('es')}>ES</button>
				<button onClick={() => i18n.changeLanguage('en')}>EN</button>
			</div>
		</nav>
	);
}
