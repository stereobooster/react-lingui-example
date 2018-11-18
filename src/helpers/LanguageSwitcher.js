import * as React from "react";
import { withI18n } from "@lingui/react";

const Navigation = ({ i18n, locales }) => (
  <select selected={i18n.locale}>
    {Object.keys(locales).map(locale => (
      <option key={locale} onClick={() => i18n.activate(locale)} value={locale}>
        {locales[locale]}
      </option>
    ))}
  </select>
);

export default withI18n(Navigation);
