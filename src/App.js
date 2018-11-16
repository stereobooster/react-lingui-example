import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { i18n, defaultLocale, supportedLocale } from "./i18n";
import Home from "./Home";
import NotFound from "./NotFound";
import { basePath } from "./config";
import I18nLoader from "./I18nLoader";
import { HelmetProvider } from 'react-helmet-async';

const I18nRoutes = ({ match }) => {
  let { locale } = match.params;

  if (!supportedLocale(locale)) {
    return (
      <I18nLoader locale={i18n.locale || defaultLocale}>
        <Route component={NotFound} />
      </I18nLoader>
    );
  }

  return (
    <I18nLoader locale={locale}>
      <Switch>
        <Route path={`${match.path}/`} component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </I18nLoader>
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
      <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path={`${basePath}/`} component={RootRedirect} exact />
          <Route path={`${basePath}/:locale`} component={I18nRoutes} />
        </Switch>
      </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
