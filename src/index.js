import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const root = ReactDom.unstable_createRoot(rootElement);
root.render(<App />);

// no support for hydrate
// if (rootElement.hasChildNodes()) {
//   root.hydrate(<App />);
// } else {
//   root.render(<App />);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
