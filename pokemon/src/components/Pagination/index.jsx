import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Pagination(props) {
	const { page, totalPages, handleOnLeftClick, handleOnRightClick } = props;
	const [t] = useTranslation('pokedex');

	return (
		<div className='pagination-container'>
			<button className='button-secondary' onClick={handleOnLeftClick}>
				<Link to={'#'}>{t('pokedex.button-previus')}</Link>
			</button>
			<div className='pagination-align'>
				{page} de {totalPages}
			</div>
			<button className='button-secondary' onClick={handleOnRightClick}>
				<Link to={'#'}>{t('pokedex.button-next')}</Link>
			</button>
		</div>
	);
}
