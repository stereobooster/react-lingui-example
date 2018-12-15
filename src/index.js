import React, { Suspense } from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const ConcurrentMode = React.unstable_ConcurrentMode;
const RootApp = (
  <ConcurrentMode>
    <Suspense fallback={<div>Loading...</div>} maxDuration={5000}>
      <App />
    </Suspense>
  </ConcurrentMode>
);

const rootElement = document.getElementById("root");
const root = ReactDom.unstable_createRoot(rootElement, { hydrate: true });
root.render(RootApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
