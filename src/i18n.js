import { setupI18n } from "@lingui/core";

export const locales = {
  en: "English",
  cs: "Česky"
};
export const defaultLocale = "en";

function loadCatalog(locale) {
  return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  `./locales/${locale}/messages.js`);
}

export const i18n = setupI18n();
i18n.willActivate(loadCatalog);
