import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux"; // 수정
import rootReducer from "./store/modules";

import { createLogger } from "redux-logger"; // 추가

const reduxLogger = createLogger(); // 추가

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const store = createStore(rootReducer, applyMiddleware(reduxLogger)); // 수정

// console.log(store.getState() + "스토어");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
