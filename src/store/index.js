import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import * as api from '../api';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'

const configureStore = ({ preloadedState, history }) => {
  const middleware = [
    routerMiddleware(history),
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