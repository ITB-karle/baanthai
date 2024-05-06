import enTranslate from './locales/en.json';
import cnTranslate from './locales/cn.json';
import thTranslate from './locales/th.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: enTranslate,
    cn: cnTranslate,
    th: thTranslate,
  }
}));