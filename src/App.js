import React, { Component } from "react";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import { i18n, defaultLocale } from "./i18n";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <Trans>Learn React</Trans>
      </I18nProvider>
    );
  }
}

export default App;
