import { useTranslation } from 'react-i18next';

export default function Error404() {
	const [t] = useTranslation('global');

	return <h1>{t('errors.404')}</h1>;
}
