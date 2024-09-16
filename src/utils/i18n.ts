import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslations from '../locales/en/translation.json';
import jaTranslations from '../locales/jpn/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ja: {
        translation: jaTranslations,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
