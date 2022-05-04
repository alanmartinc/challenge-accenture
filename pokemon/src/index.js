import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import globalEs from './translations/es/global.json';
import landingEs from './translations/es/landing.json';
import loginEs from './translations/es/login.json';
import pokedexEs from './translations/es/pokedex.json';
import globalEn from './translations/en/global.json';
import landingEn from './translations/en/landing.json';
import loginEn from './translations/en/login.json';
import pokedexEn from './translations/en/pokedex.json';
import './styles.css';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'es',
	resources: {
		es: {
			global: globalEs,
			landing: landingEs,
			login: loginEs,
			pokedex: pokedexEs,
		},
		en: {
			global: globalEn,
			landing: landingEn,
			login: loginEn,
			pokedex: pokedexEn,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<Router />
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
