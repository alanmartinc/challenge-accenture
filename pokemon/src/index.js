import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import landing_es from "./translations/es/landing.json";
import global_en from "./translations/en/global.json";
import landing_en from "./translations/en/landing.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
      landing: landing_es
    },
    en: {
      global: global_en,
      landing: landing_en
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);