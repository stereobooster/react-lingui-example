import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { i18n, defaultLocale, supportedLocale } from "./i18n";
import Home from "./Home";
import NotFound from "./NotFound";

i18n.activate(defaultLocale);

const I18nRoutes = ({ match }) => {
  let { locale } = match.params;

  if (!supportedLocale(locale)) {
    i18n.activate(i18n.locale || defaultLocale);
    return <Route component={NotFound} />;
  }

  i18n.activate(locale);
  return (
    <Switch>
      <Route path={`${match.path}/`} component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

class App extends Component {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            <Route path="/:locale" component={I18nRoutes} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </I18nProvider>
    );
  }
}

export default App;
