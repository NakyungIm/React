import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // 추가
import { composeWithDevTools } from 'redux-devtools-extension'; // 추가
import { Provider } from 'react-redux'; // 추가
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules'; // 추가

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'));

reportWebVitals();
