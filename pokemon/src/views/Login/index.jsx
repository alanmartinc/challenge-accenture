import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import './styles.css';

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
			<ErrorBoundary>
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
					<div className='login-design'>
						<div className='login-data'>
							<div className='login-wolox'>
								<Link to={'/'}>
									<img
										src='assets/navbar/logo_full_color.svg'
										alt='wolox-login'
									/>
								</Link>
							</div>

							<div className='login-portada'>
								<img src='assets/login/portada.png' alt='portada' />
							</div>

							{isLogin ? (
								<h2>
									{t('login.title-end')} {user}
								</h2>
							) : (
								<h2>{t('login.title-initial')}</h2>
							)}

							<div className='container-alert-error'>
								{alertError && (
									<span className='alert-error'>{t('login.alert-error')}</span>
								)}
							</div>

							<form action='#' className='login-form'>
								<div className='input-group'>
									<label htmlFor='user' className='input-fill'>
										{t('login.label-user')}
									</label>
									<input
										type='text'
										id='user'
										name='user'
										placeholder={t('login.placeholder-user')}
										onChange={e =>
											handleOnChange(e.target.name, e.target.value)
										}
										required
									/>
								</div>

								<div className='input-group'>
									<label htmlFor='password'>{t('login.label-password')}</label>
									<input
										type='password'
										id='password'
										name='password'
										placeholder={t('login.placeholder-password')}
										onChange={e =>
											handleOnChange(e.target.name, e.target.value)
										}
										required
									/>

									<div className='container-helper-error'>
										{helperError && (
											<label className='helper-error'>
												<img
													src='assets/login/warning-red.png'
													alt='warning-red'
												/>
												{t('login.helper-error')}
											</label>
										)}
									</div>
								</div>

								<button className='button-primary' onClick={handleOnClick}>
									<Link to={'#'}>{t('login.button')}</Link>
								</button>
							</form>
						</div>
					</div>
				</div>
			</ErrorBoundary>
		</Fragment>
	);
}
