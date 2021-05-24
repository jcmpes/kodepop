import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  TAGS_LOAD_FAILURE,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_SUCCESS,
  LISTINGS_LOAD_FAILURE,
  LISTINGS_LOAD_REQUEST,
  LISTINGS_LOAD_SUCCESS
} from './types';

const initialState = {
  auth: false,
  tags: {
    data: [],
    loaded: false
  },
  listings: {
    data: [],
    loaded: false
  }
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

export function tags(state=initialState.tags, action) {
  switch (action.type) {
    case TAGS_LOAD_SUCCESS:
      return { ...state, loaded: true, data: action.payload }
    default:
      return state
  }
}

export function listings(state=initialState.listings, action) {
  switch (action.type) {
    case LISTINGS_LOAD_SUCCESS:
      return { ...state, loaded: true, data: action.payload }
    default:
      return state;
  }
}