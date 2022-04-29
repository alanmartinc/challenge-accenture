import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEs from './translations/es/global.json'
import landingEs from './translations/es/landing.json'
import globalEn from './translations/en/global.json'
import landingEn from './translations/en/landing.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: globalEs,
      landing: landingEs
    },
    en: {
      global: globalEn,
      landing: landingEn
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
