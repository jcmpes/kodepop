import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import * as api from '../api';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'

// I build my own thunk
// function thunk(store) {
//   return function(next) {
//     return function(action) {
//       if (typeof action === 'function') {
//         return action(store.dispatch, store.getState);
//       }
//       return next(action);
//     }
//   }
// }


const configureStore = ({ preloadedState, history }) => {
  const middleware = [
    routerMiddleware(history),
    thunk.withExtraArgument({ api, history })
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