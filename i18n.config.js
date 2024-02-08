import enTranslate from './locales/en.json';
import cnTranslate from './locales/cn.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'cn',
  messages: {
    en: enTranslate,
    cn: cnTranslate,
  }
}));