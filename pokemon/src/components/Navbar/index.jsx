import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.css';

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

				<button className='button-secondary'>
					<Link to={'/login'}>{t('navbar.login')}</Link>
				</button>

				<button onClick={() => i18n.changeLanguage('es')}>ES</button>
				<button onClick={() => i18n.changeLanguage('en')}>EN</button>

				<Link to={'/pokebola'}>
					<img src='assets/pokebola.png' alt='pokebola' />
				</Link>
			</div>
		</nav>
	);
}
