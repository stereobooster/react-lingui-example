import React, { Component } from "react";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import { i18n, defaultLocale } from "./i18n";
import logo from "./logo.svg";
import "./App.css";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <Trans>
                Edit <code>src/App.js</code> and save to reload.
              </Trans>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans>Learn React</Trans>
            </a>
          </header>
        </div>
      </I18nProvider>
    );
  }
}

export default App;
