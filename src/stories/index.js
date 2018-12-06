import React from "react";
import { MemoryRouter } from "react-router";
import { I18nProvider } from "@lingui/react";

import { storiesOf } from "@storybook/react";

import Home from "../Home";
import { i18n, defaultLocale } from "../i18n";
i18n.activate(defaultLocale);

storiesOf("Home", module).add("default", () => (
  <MemoryRouter>
    <I18nProvider i18n={i18n}>
      <Home />
    </I18nProvider>
  </MemoryRouter>
));
