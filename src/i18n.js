import { setupI18n } from "@lingui/core";

export const locales = {
  en: "English",
  cs: "Česky"
};
export const defaultLocale = "en";

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const loadCatalog = async locale => {
  if (
    navigator.userAgent !== "ReactSnap" &&
    process.env.NODE_ENV !== "development"
  ) {
    console.log("start");
    // intentionally slow translations to simmulate bigger JS bundle
    await pause(500);
    console.log("finish");
  }
  return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  `./locales/${locale}/messages.js`);
};

export const i18n = setupI18n();
i18n.willActivate(loadCatalog);

export const supportedLocale = locale => !!locales[locale];
