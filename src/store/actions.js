import { AUTH_LOGIN, AUTH_LOGOUT } from './types';

/**
 * ACTION CREATORS:
 */
export const authLogin = () => {
  return {
    type: AUTH_LOGIN
  }
}

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT
  }
}