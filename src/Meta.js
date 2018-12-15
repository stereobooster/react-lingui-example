import React from "react";
import { Route } from "react-router-dom";
import Helmet from 'react-helmet-async';

export default ({ locales }) => (
  <Route
    children={({ match }) => (
      <Helmet
        htmlAttributes={{ lang: match.params.locale }}
        link={Object.keys(locales).map(locale => {
          const url = match.url.replace(
            new RegExp(`/${match.params.locale}($|/)`),
            `/${locale}`
          );
          return { rel: "alternate", href: url, hreflang: locale };
        })}
      />
    )}
  />
);
