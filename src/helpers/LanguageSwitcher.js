import React from "react";
import { NavLink, Route } from "react-router-dom";
import s from "./LanguageSwitcher.module.css";

export default ({ locales }) => (
  <Route
    children={({ match }) =>
      Object.keys(locales).map(locale => {
        const url = match.url.replace(
          new RegExp(`^/${match.params.locale}`),
          `/${locale}`
        );
        return (
          <NavLink
            key={locale}
            to={url}
            activeClassName={s.selected}
            className={s.link}
          >
            {locales[locale]}
          </NavLink>
        );
      })
    }
  />
);
