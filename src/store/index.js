import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import * as api from '../api';
// import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'

// I build my own thunk
// const thunk = withExtraArgument => (store) => (next) => (action) => {
//       if (typeof action === 'function') {
//         return action(store.dispatch, store.getState, withExtraArgument);
//       }
//       return next(action);
// }
const createThunkMiddleware = extraArgument => 
  ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  }
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;


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