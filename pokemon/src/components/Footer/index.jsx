import { Link } from 'react-router-dom';
import CardMoreInfoContainer from '../Cards/CardMoreInfoContainer';
import './index.css';

export default function Footer() {
	return (
		<div className='footer'>
			<CardMoreInfoContainer />

			<Link to={'/'}>
				<img src='assets/Ic_Wolox_Footer.svg' alt='wolox-footer' />
			</Link>
		</div>
	);
}
