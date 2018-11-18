import React, { Component } from "react";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import { i18n, defaultLocale, locales } from "./i18n";
import LanguageSwitcher from "./helpers/LanguageSwitcher";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <div style={{ padding: "20px 50px" }}>
          <p>
            <Trans>Select language:</Trans>{" "}
            <LanguageSwitcher locales={locales} />
          </p>

          <h1>
            <Trans>LinguiJS example</Trans>
          </h1>
        </div>
      </I18nProvider>
    );
  }
}

export default App;
