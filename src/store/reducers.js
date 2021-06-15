import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  TAGS_LOAD_FAILURE,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_SUCCESS,
  LISTINGS_LOAD_FAILURE,
  LISTINGS_LOAD_REQUEST,
  LISTINGS_LOAD_SUCCESS,
  DETAIL_LOAD_SUCCESS,
  DETAIL_LOAD_REQUEST,
  DETAIL_REMOVE_SUCCESS,
  LISTINGS_CREATE_SUCCESS,
  UI_RESET_ERROR
} from './types';

export const initialState = {
  auth: false,
  tags: {
    data: [],
    loaded: false
  },
  listings: {
    data: [],
    loaded: false
  },
  ui: {
    loading: false,
    error: null
  }
}

export function auth(state=initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT_SUCCESS:
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
    case DETAIL_LOAD_SUCCESS:
      return { ...state, loaded: true, data: [...state.data, action.payload] }
    case DETAIL_REMOVE_SUCCESS:
      const listingsAfterRemoval = state.data.filter(item => item.id !== action.payload)
      return { ...state, loaded: true, data: listingsAfterRemoval }
    case LISTINGS_CREATE_SUCCESS:
      return { ...state, loaded: true, data: [...state.data, action.payload] }
    default:
      return state;
  }
}

export function ui(state=initialState.ui, action) {
  if (action.error) {
    return { ...state, loading: false, error: action.payload };
  }
  switch (action.type) {
    case DETAIL_LOAD_REQUEST:
      return { ...state, loading: true };
    case DETAIL_LOAD_SUCCESS:
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false };
    case UI_RESET_ERROR:
      return { ...state, error: null }
    default:
      return state;
  }
}
