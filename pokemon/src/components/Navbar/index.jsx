import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import PokebolaContext from '../../contexts/pokebolaContext';
import './index.css';

export default function Navbar() {
	const [t, i18n] = useTranslation('global');
	const { pokebolaPokemons } = useContext(PokebolaContext);

	return (
		<nav className='nav-container'>
			<div className='nav-logo'>
				<Link to={'/'}>
					<img src='assets/navbar/logo_full_color.svg' alt='wolox-navbar' />
				</Link>
			</div>

			<div className='nav-list'>
				<Link to={'/'}>{t('navbar.home')}</Link>

				<Link to={'/'}>{t('navbar.benefits')}</Link>

				<button className='button-secondary'>
					<Link to={'/login'}>{t('navbar.login')}</Link>
				</button>

				<Link to={'/pokedex'}>
					<div className='nav-pokebola'>
						<img src='assets/navbar/pokebola.png' alt='pokebola' />{' '}
						<div>{pokebolaPokemons.length}</div>
					</div>
				</Link>

				<div className='nav-translation'>
					<button onClick={() => i18n.changeLanguage('es')}>
						<img src='assets/navbar/spanish.png' alt='spanish' />
					</button>
					<button onClick={() => i18n.changeLanguage('en')}>
						<img src='assets/navbar/english.png' alt='english' />
					</button>
				</div>
			</div>
		</nav>
	);
}
