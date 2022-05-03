import { useTranslation } from 'react-i18next';
import './index.css';

export default function Pagination(props) {
	const { page, totalPages, handleOnLeftClick, handleOnRightClick } = props;
	const [t] = useTranslation('pokedex');

	return (
		<div className='pagination-container'>
			<button onClick={handleOnLeftClick}>{t('pokedex.button-previus')}</button>
			<div>
				{page} de {totalPages}
			</div>
			<button onClick={handleOnRightClick}>{t('pokedex.button-next')}</button>
		</div>
	);
}
