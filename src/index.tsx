import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./projects";

import { Provider } from "overmind-react";
import { overmind } from "store";
/*
import { config } from "./store";


const store = createOvermind(config, {
  devtools: true,
  logProxies: true,
  hotReloading: true
});
*/

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
