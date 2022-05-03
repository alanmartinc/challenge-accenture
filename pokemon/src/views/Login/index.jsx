import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
	const [t] = useTranslation('login');

	return (
		<Fragment>
			<h1>{t('login.title')}</h1>
		</Fragment>
	);
}
