import React from 'react';

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
				<div>
					<h1>Ooops... parece que algo salio mal. {this.state.messageError}</h1>
					<button onClick={() => (window.location.href = '/')}>
						Recargar la página{' '}
					</button>
				</div>
			);
		}

		// eslint-disable-next-line react/prop-types
		return this.props.children;
	}
}

export default ErorBundary;
