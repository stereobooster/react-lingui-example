import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { i18n, defaultLocale } from "./i18n";
import Home from "./Home";
import NotFound from "./NotFound";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </I18nProvider>
    );
  }
}

export default App;
