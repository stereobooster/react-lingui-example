# create-react-app + Lingui v3 tutorial

Based on original [Lingui tutorial](https://lingui.js.org/tutorials/setup-cra.html) and tips from [#350](https://github.com/lingui/js-lingui/issues/350).

<!-- toc -->

- [Install](#install)
- [Basic usage](#basic-usage)
- [Advanced usage](#advanced-usage)
  * [Language switcher](#language-switcher)
  * [Translate text without `Trans` macro](#translate-text-without-trans-macro)
  * [`Plural`](#plural)
  * [`DateFormat`](#dateformat)
  * [`NumberFormat`](#numberformat)
- [Usage with React Router](#usage-with-react-router)
  * [Redirect from root path to localised page](#redirect-from-root-path-to-localised-page)
  * [Reimplement `LanguageSwitcher` for React Router](#reimplement-languageswitcher-for-react-router)
- [Add meta tags with the help of React Helmet](#add-meta-tags-with-the-help-of-react-helmet)
- [Add prerendering with the help of react-snap](#add-prerendering-with-the-help-of-react-snap)

<!-- tocstop -->

## Install

(I'm using node v10.10, but maybe will work with different version)

Follow [Create React App](https://github.com/facebook/create-react-app) documentation for more info. Boostrap your project with following commands:

```shell
npx create-react-app react-lingui-example
cd react-lingui-example
```

Install `@lingui/cli`, `@lingui/macro` and Babel core packages as a development dependencies and `@lingui/react` as a runtime dependency.

```shell
npm install --save-dev @lingui/cli@next @lingui/macro@next @babel/core babel-core@bridge
npm install --save @lingui/react@next

# or using Yarn
yarn add --dev @lingui/cli@next @lingui/macro@next @babel/core babel-core@bridge
yarn add @lingui/react@next
```

Create `.linguirc` file with LinguiJS configuration in root of your project (next to `package.json`):

```js
{
  "localeDir": "src/locales/",
  "srcPathDirs": ["src/"],
  "format": "po",
  "fallbackLocale": "en"
}
```

This configuration will extract messages from source files inside `src` directory and write them into message catalogs in `src/locales`.

Add following scripts to your `package.json`:

```js
{
  "scripts": {
    "start": "lingui compile && react-scripts start",
    "build": "lingui compile && react-scripts build",
    "add-locale": "lingui add-locale",
    "extract": "lingui extract",
    "compile": "lingui compile"
  }
}
```

Run `npm run add-locale` (or `yarn add-locale`) with [locale codes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) you would like to use in your app:

```shell
npm run add-locale en

# or using Yarn
yarn add-locale en
```

Check the installation by running `npm run extract` (or `yarn extract`):

```
npm run extract

# or using Yarn
yarn extract
```

There should be no error and you should see output similar following:

```shell
yarn extract
Catalog statistics:
┌──────────┬─────────────┬─────────┐
│ Language │ Total count │ Missing │
├──────────┼─────────────┼─────────┤
│ en       │      0      │    0    │
└──────────┴─────────────┴─────────┘

(use "lingui add-locale <language>" to add more locales)
(use "lingui extract" to update catalogs with new messages)
(use "lingui compile" to compile catalogs for production)
```

Congratulations! You’ve sucessfully set up project with LinguiJS.

## Basic usage

(based on [example project](https://github.com/lingui/js-lingui/tree/next/examples/react/src))

Create `src/i18n.js`:

```js
import { setupI18n } from "@lingui/core";

export const locales = {
  en: "English",
  cs: "Česky"
};
export const defaultLocale = "en";

function loadCatalog(locale) {
  return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  `./locales/${locale}/messages.js`);
}

export const i18n = setupI18n();
i18n.willActivate(loadCatalog);
```

Add `src/locales/*/*.js` to `.gitignore`.

Add `<I18nProvider>` to the `App`:

```js
import { I18nProvider } from "@lingui/react";
import { i18n, defaultLocale } from "./i18n";

i18n.activate(defaultLocale);

class App extends Component {
  render() {
    return <I18nProvider i18n={i18n}>{/* ... */}</I18nProvider>;
  }
}
```

Use `<Trans>` macro to mark text for tanslation:

```js
import { Trans } from "@lingui/macro";

// ...

<Trans>Learn React</Trans>;
```

Run `npm run extract` (or `yarn extract`):

```shell
yarn extract
Catalog statistics:
┌──────────┬─────────────┬─────────┐
│ Language │ Total count │ Missing │
├──────────┼─────────────┼─────────┤
│ en       │      2      │    2    │
└──────────┴─────────────┴─────────┘
```

Now you can start your development environment with `npm run start` (or `yarn start`).

You can edit `src/locales/*/messages.json` to change translations or upload those files to translation service.

## Advanced usage

### Language switcher

Simplest language switcher can be implemented this way:

```js
import * as React from "react";
import { withI18n } from "@lingui/react";

const Navigation = ({ i18n, locales }) => (
  <select selected={i18n.locale}>
    {Object.keys(locales).map(locale => (
      <option key={locale} onClick={() => i18n.activate(locale)} value={locale}>
        {locales[locale]}
      </option>
    ))}
  </select>
);

export default withI18n(Navigation);
```

`withI18n` is a HOC, which provides `i18n` object. The same one which we pass to `<I18nProvider i18n={i18n}>`.

`i18n.locale` provides current locale.

`i18n.activate` changes current locale.

### Translate text without `Trans` macro

```js
import { I18n } from "@lingui/react";
import { t } from "@lingui/macro";

// ...

<I18n>
  {({ i18n }) => (
    <button onClick={() => alert(i18n._(t`You're looking good!`))}>
      <Trans>Show motto of the day</Trans>
    </button>
  )}
</I18n>;
```

`I18n` is a "Render Prop" component, which provides `i18n` object. The same one which we pass to `<I18nProvider i18n={i18n}>`.

`i18n._` is a translation function, which will actually do the translation.

`t` is a macro which is used by `extract` command.

To provide default value for translation use comment:

```js
i18n._(/* i18n: Default value for Hello {name} */ t`World`);
```

### `Plural`

Use `Plural` macro if you need to deal with numbers.

```js
import { Plural } from "@lingui/macro";

// ...

<Plural
  value={count}
  _0="There're no books"
  one="There's one book"
  other="There're # books"
/>;
```

### `DateFormat`

Use `DateFormat` to format dates.

```js
import { DateFormat } from "@lingui/macro";

// ...

<Trans>
  Today is <DateFormat value={new Date()} />
</Trans>;
```

### `NumberFormat`

Use `NumberFormat` to format numbers.

```js
import { NumberFormat } from "@lingui/macro";

// ...

<NumberFormat value={2000} format={{ style: "currency", currency: "USD" }} />
<NumberFormat value={0.2} format={{ style: "percent" }} />
```

## Usage with React Router

```shell
npm install --save react-router react-router-dom

# or using Yarn
yarn add react-router react-router-dom
```

Add `BrowserRouter`, `Switch`, `Route`.

```js
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ...

<BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
</BrowserRouter>;
```

Add `NotFound` page.

```js
<Switch>
  <Route path="/" component={Home} exact />
  <Route component={NotFound} />
</Switch>
```

Add `I18nRoutes`:

```js
const I18nRoutes = ({ match }) => { /* ... */ }

// ...

<Switch>
  <Route path="/:locale" component={I18nRoutes} />
  <Route component={NotFound} />
</Switch>
```

It will pick `locale` from path:

```js
const I18nRoutes = ({ match }) => {
  let { locale } = match.params;
  //...
};
```

It will check if it is supported `locale`, if not it will return `NotFound` page:

```js
if (!supportedLocale(locale)) {
  i18n.activate(defaultLocale);
  return <NotFound />;
}
```

it is supported `locale` it will activate given `locale` and return [nested routes](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes):

```js
i18n.activate(locale);
return (
  <Switch>
    <Route path={`${match.path}/`} component={Home} exact />
    <Route component={NotFound} />
  </Switch>
);
```

### Redirect from root path to localised page

Add redirect from root path to localised page based on the browser preferences:

```js
const RootRedirect = () => {
  let [locale] = (
    navigator.language ||
    navigator.browserLanguage ||
    defaultLocale
  ).split("-");
  if (!supportedLocale(locale)) locale = defaultLocale;
  return <Redirect to={`/${locale}`} />;
};

// ...

<Switch>
  <Route path="/" component={RootRedirect} exact />
  <Route path="/:locale" component={I18nRoutes} />
</Switch>;
```

### Reimplement `LanguageSwitcher` for React Router

The simplest `LanguageSwitcher` can be implemented with `NavLink`:

```js
import { NavLink } from "react-router-dom";

export default ({ locales }) =>
  Object.keys(locales).map(locale => {
    const url = `/${locale}`;
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
  });
```

This implementation will always redirect to the root of localized pages, for example from `/en/some/subpage` to `/cz`.

If we want to change the locale, but preserve path we need to use `Route`:

```js
import { NavLink, Route } from "react-router-dom";

export default ({ locales }) => (
  <Route
    children={({ match }) =>
      Object.keys(locales).map(locale => {
        const url = match.url.replace(
          new RegExp(`^/${match.params.locale}`),
          `/${locale}`
        );
        // ...
      })
    }
  />
);
```

## Add meta tags with the help of React Helmet

```shell
npm install --save react-helmet

# or using Yarn
yarn add react-helmet
```

The code is very similar to the one we used in "Reimplement `LanguageSwitcher` for React Router":

```js
import React from "react";
import { Route } from "react-router-dom";
import Helmet from "react-helmet";

export default ({ locales }) => (
  <Route
    children={({ match }) => (
      <Helmet
        htmlAttributes={{ lang: match.params.locale }}
        link={Object.keys(locales).map(locale => {
          const url = match.url.replace(
            new RegExp(`^/${match.params.locale}`),
            `/${locale}`
          );
          return { rel: "alternate", href: url, hreflang: locale };
        })}
      />
    )}
  />
);
```

Add it to `Home` component:

```js
import Meta from "./Meta";

export default function Home() {
  return (
    <div style={{ padding: "20px 50px" }}>
      <Meta locales={locales} />
      {/* ... */}
    </div>
  );
}
```

## Add prerendering with the help of react-snap

```shell
npm install --save react-snap

# or using Yarn
yarn add react-snap
```

Add `postbuild` hook to the `package.json`:

```json
"scripts": {
  "postbuild": "react-snap"
}
```

And you done!
