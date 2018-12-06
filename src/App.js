import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { i18n, defaultLocale, supportedLocale } from "./i18n";
import Home from "./Home";
import NotFound from "./NotFound";
import { basePath } from "./config";

const I18nRoutes = ({ match }) => {
  let { locale } = match.params;

  if (!supportedLocale(locale)) {
    i18n.activate(i18n.locale || defaultLocale);
    return (
      <I18nProvider i18n={i18n}>
        <Route component={NotFound} />
      </I18nProvider>
    );
  }

  i18n.activate(locale);
  return (
    <I18nProvider i18n={i18n}>
      <Switch>
        <Route path={`${match.path}/`} component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </I18nProvider>
  );
};

const RootRedirect = () => {
  let [locale] = (
    navigator.language ||
    navigator.browserLanguage ||
    defaultLocale
  ).split("-");
  if (!supportedLocale(locale)) locale = defaultLocale;
  return <Redirect to={`${basePath}/${locale}`} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={`${basePath}/`} component={RootRedirect} exact />
          <Route path={`${basePath}/:locale`} component={I18nRoutes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
