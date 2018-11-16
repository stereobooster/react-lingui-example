import React from "react";
import { I18nProvider } from "@lingui/react";

export class I18nLoader extends React.Component {
  state = {
    catalogs: {},
    SuspendChildren: null
  };

  loadCatalog = language => {
    if (this.state.catalogs[language]) return;

    // $FlowFixMe - this is some kind of webpack dark magic
    const catalogPromise = import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `./locales/${language}/messages.js`);

    const SuspendChildren = React.lazy(() =>
      catalogPromise.then(() => ({
        __esModule: true,
        default: () => {
          const { children, language } = this.props;
          const { catalogs } = this.state;
          return (
            <I18nProvider language={language} catalogs={catalogs}>
              {children}
            </I18nProvider>
          );
        }
      }))
    );
    this.setState({ SuspendChildren });

    catalogPromise.then(catalog => {
      this.setState(state => ({
        catalogs: {
          ...state.catalogs,
          [language]: catalog
        }
      }));
    }); // What if file is missing?
  };

  componentDidMount() {
    this.loadCatalog(this.props.language);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { language } = nextProps;
    const { catalogs } = nextState;

    if (language !== this.props.language && !catalogs[language]) {
      this.loadCatalog(language);
      return false;
    }

    return true;
  }

  render() {
    const { SuspendChildren } = this.state;
    if (SuspendChildren === null) return null;
    return <SuspendChildren />;
  }
}
