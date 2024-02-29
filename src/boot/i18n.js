import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';
import { LocalStorage } from 'quasar';

let currentLocale = LocalStorage.getItem('locale') || 'ru';

const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
