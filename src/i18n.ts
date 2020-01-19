import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'es'],
    whitelist: ['es', 'en'],
    load: 'languageOnly',
    debug: true,
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;