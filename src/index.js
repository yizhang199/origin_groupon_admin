import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from "./reducers";
import thunk from "redux-thunk";

import App from "./components/App.jsx";

ReactDOM.render(
  <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
