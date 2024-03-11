import enTranslate from './locales/en.json';
import cnTranslate from './locales/cn.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: enTranslate,
    cn: cnTranslate,
  }
}));