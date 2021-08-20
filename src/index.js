import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestAlgoApp from './TestAlgoApp';
import TestListCheckboxApp from './TestListCheckboxApp';
import TestSearchGithubApp from './TestSearchGithubApp';
import reportWebVitals from './reportWebVitals';

//1  - Algo
//2 - react level 1
//3 - react level 3

const DEMO_APP_TEST = 3

ReactDOM.render(
  <React.StrictMode>
    {DEMO_APP_TEST === 1 &&  <TestAlgoApp />}
    {DEMO_APP_TEST === 2 &&  <TestListCheckboxApp />}
    {DEMO_APP_TEST === 3 &&  <TestSearchGithubApp />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
