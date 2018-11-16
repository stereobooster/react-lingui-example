import React from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "./i18n";

const cache = {};
export default ({ locale, children }) => {
  const SuspendChildren =
    cache[locale] ||
    React.lazy(() =>
      i18n.activate(locale).then(() => ({
        __esModule: true,
        default: ({ children }) => (
          <I18nProvider i18n={i18n}>{children}</I18nProvider>
        )
      }))
    );
  cache[locale] = SuspendChildren;
  return <SuspendChildren>{children}</SuspendChildren>;
};
