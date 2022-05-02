import './index.css';

export default function Pagination(props) {
	const { page, totalPages, handleOnLeftClick, handleOnRightClick } = props;
	return (
		<div className='pagination-container'>
			<button onClick={handleOnLeftClick}>Left</button>
			<div>
				{page} de {totalPages}
			</div>
			<button onClick={handleOnRightClick}>Right</button>
		</div>
	);
}
