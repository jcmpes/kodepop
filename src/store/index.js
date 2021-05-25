import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import * as api from '../api';
import thunk from 'redux-thunk';

const configureStore = ({ preloadedState }) => {
  const middleware = [
    thunk.withExtraArgument({ api })
  ];

  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return store;
}

console.log(configureStore)

export default configureStore;