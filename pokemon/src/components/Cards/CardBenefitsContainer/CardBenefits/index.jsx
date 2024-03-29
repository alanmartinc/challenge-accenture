import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

export default function ItemBenefits() {
	const [t] = useTranslation('landing');

	return (
		<Fragment>
			<div className='benefits-container'>
				<h3>
					{t('card-benefits.title')} <span className='blue-highlight'>;)</span>
				</h3>

				<div className='benefits-items'>
					<ul className='one'>
						<img src='assets/benefits/Ic_Hour.svg' alt='hour' />
						<li>Flexibilidad Horaria</li>
					</ul>

					<ul className='two'>
						<img src='assets/benefits/Ic_HomeOffice.svg' alt='home office' />
						<li>Home Office</li>
					</ul>

					<ul className='three'>
						<img src='assets/benefits/Ic_Workshops.svg' alt='workshops' />
						<li>Capacitaciones y workshops</li>
					</ul>

					<ul className='four'>
						<img src='assets/benefits/Ic_DrinkSnacks.svg' alt='drink snacks' />
						<li>Snacks, frutas y bebidas gratis</li>
					</ul>

					<ul className='five'>
						<img src='assets/benefits/Ic_laptop.svg' alt='laptop' />
						<li>Semana Remota</li>
					</ul>

					<ul className='six'>
						<img src='assets/benefits/Ic_brain.svg' alt='brain' />
						<li>Trabajar en ultimas tecnologías</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}
