import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "src/i18n";
import { LocalStorage } from "quasar";

Vue.use(VueI18n);

let localeSaved = "";
LocalStorage.getItem("locale")
  ? (localeSaved = LocalStorage.getItem("locale"))
  : (localeSaved = "en-us");

console.log("localeSaved ", localeSaved)

const i18n = new VueI18n({
  locale: localeSaved,
  fallbackLocale: localeSaved,
  messages
});

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
};

export { i18n };
