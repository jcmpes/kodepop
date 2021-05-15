import {
  AUTH_LOGIN,
  AUTH_LOGOUT
} from './types';

const initialState = {
  auth: false,
}

export function auth(state=initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}