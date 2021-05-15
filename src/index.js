import React from 'react';
import ReactDOM from 'react-dom';
import storage from './utils/storage'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureClient } from './api/client';

import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';

// Log user initially
const accessToken = storage.get('auth');
if(accessToken) {
  configureClient({ accessToken })
} 

const store = configureStore({ preloadedState: { auth: !!accessToken } })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
