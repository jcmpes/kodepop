import React from 'react';
import ReactDOM from 'react-dom';
import storage from './utils/storage'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureClient } from './api/client';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';


// Log user initially
const accessToken = storage.get('auth');
if(accessToken) {
  configureClient({ accessToken })
} 

/**
 * Create history to inject to redux store to use in thunk middleware
 * So the history in redux == history in react router
 * And this history will be avalable in all my redux actions
 */
const history = createBrowserHistory();
const store = configureStore({ 
  preloadedState: { auth: !!accessToken },
  history

})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
