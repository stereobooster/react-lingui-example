import React, { Component } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n, defaultLocale, locales } from "./i18n";
import Home from "./Home";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <Home locales={locales} />
      </I18nProvider>
    );
  }
}

export default App;
