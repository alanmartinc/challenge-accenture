import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemBenefits() {
	const [t] = useTranslation('landing');

	return (
		<Fragment>
			<div className='benefits-container'>
				<h3>
					{t('card-benefits.title')} <span className='blue-highlight'>;)</span>
				</h3>

				<div className='benefits-items'>
					<ul>
						<img src='assets/Ic_Hour.svg' alt='hour' />
						<li>Flexibilidad Horaria</li>
					</ul>

					<ul>
						<img src='assets/Ic_HomeOffice.svg' alt='home office' />
						<li>Home Office</li>
					</ul>

					<ul>
						<img src='assets/Ic_Workshops.svg' alt='workshops' />
						<li>Capacitaciones y workshops</li>
					</ul>

					<ul>
						<img src='assets/Ic_DrinkSnacks.svg' alt='drink snacks' />
						<li>Snacks, frutas y bebidas gratis</li>
					</ul>

					<ul>
						<img src='assets/Ic_laptop.svg' alt='laptop' />
						<li>Semana Remota</li>
					</ul>

					<ul>
						<img src='assets/Ic_brain.svg' alt='brain' />
						<li>Trabajar en ultimas tecnologías</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}
