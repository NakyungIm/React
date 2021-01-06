import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function tick(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
// 일정한 시간 간격으로 작업 수행하는 함수