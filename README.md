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
