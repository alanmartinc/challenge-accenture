import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function Login() {
	const [t] = useTranslation('login');
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [helperError, setHelperError] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [alertError, setAlertError] = useState(false);

	function handleOnChange(name, value) {
		if (name === 'user') {
			setUser(value);
		} else {
			if (value.length < 6) {
				setHelperError(true);
			} else {
				setPassword(value);
				setHelperError(false);
			}
		}
	}

	function ifMath(param) {
		if (param.user.length > 0 && param.password.length > 0) {
			if (param.user === 'acabot' && param.password === '123456') {
				const { user, password } = param;
				const information = { user, password };
				const account = JSON.stringify(information);
				localStorage.setItem('account', account);
				setIsLogin(true);
				setAlertError(false);
			} else {
				setIsLogin(false);
				setAlertError(true);
			}
		} else {
			setIsLogin(false);
			setAlertError(true);
		}
	}

	function handleOnClick() {
		const account = { user, password };

		if (account) {
			ifMath(account);
		}
	}

	return (
		<Fragment>
			<div className='burbujas'>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
				<div className='burbuja'></div>
			</div>

			<div className='login-container'>
				{isLogin ? <h1>{t('Bienvenido!')}</h1> : <h1>{t('login.title')}</h1>}

				{alertError && (
					<span className='alert-error'>
						Su contraseña es inválida o incompleta
					</span>
				)}

				<label htmlFor='user'>Usuario</label>
				<input
					type='text'
					id='user'
					name='user'
					placeholder='Ingrese el usuario'
					onChange={e => handleOnChange(e.target.name, e.target.value)}
					required
				/>

				<label htmlFor='password'>Contraseña</label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Ingrese su contraseña'
					onChange={e => handleOnChange(e.target.name, e.target.value)}
					required
				/>

				{helperError && (
					<label className='helper-error'>
						Su contraseña debe tener 6 carácteres
					</label>
				)}

				<button onClick={handleOnClick}>Ingresar</button>
			</div>
		</Fragment>
	);
}
