import { createI18n } from 'vue-i18n';

const messages = {
  en: {
  },
  ru: {
  },
  kk: {}
};

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages,
});

export default i18n;
