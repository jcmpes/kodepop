import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureClient } from './api/client';

import './index.css';

const accessToken = localStorage.getItem('auth');
if(accessToken) {
  configureClient({ accessToken })
}

ReactDOM.render(
  <React.StrictMode>
    <App existingToken={!!accessToken}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
