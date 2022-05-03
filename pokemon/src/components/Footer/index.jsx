import { Link } from 'react-router-dom';
import CardMoreInfoContainer from '../Cards/CardMoreInfoContainer';
import './index.css';

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-align'>
				<CardMoreInfoContainer />

				<div className='footer-logo'>
					<Link to={'/'}>
						<img src='assets/footer/Ic_Wolox_Footer.svg' alt='wolox-footer' />
					</Link>
				</div>
			</div>
		</div>
	);
}
