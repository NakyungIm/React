import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore } from "redux";
import rootReducer from "./store/modules";

// devTools == 크롬 extension, 리덕스의 상태, 상태변화 등에 대한 로그를 쉽게 확인할 수 있는 툴
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
