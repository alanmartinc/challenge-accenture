import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class ErorBundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			messageError: '',
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			messageError: error.message,
		};
	}

	render() {
		if (this.state.hasError) {
			return (
				<Fragment>
					<div className='error-boundary-container'>
						<h2>Error Boundary</h2>

						<h3>Oops, parece que algo salio mal.</h3>

						<img src='assets/code-errors/404.png' alt='error boundary' />

						<button className='button-secondary'>
							<Link to={'/'}>Recargar la página</Link>
						</button>
					</div>
				</Fragment>
			);
		}

		// eslint-disable-next-line react/prop-types
		return this.props.children;
	}
}

export default ErorBundary;
