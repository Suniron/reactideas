import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./projects";

import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { config } from "store";

export const overmind = createOvermind(config, {
  devtools: true,
  hotReloading: true
});

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
