# create-react-app + Lingui v3 tutorial

Based on original [Lingui tutorial](https://lingui.js.org/tutorials/setup-cra.html) and tips from [#350](https://github.com/lingui/js-lingui/issues/350).

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
  "format": "lingui",
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

## Use

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
