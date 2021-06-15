import { deleteAuthToken } from '../api/client';
import storage from '../utils/storage';
import { getTags, getDetail } from './selectors';

import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT,
  TAGS_LOAD_SUCCESS,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_FAILURE,
  LISTINGS_LOAD_SUCCESS,
  LISTINGS_LOAD_REQUEST,
  LISTINGS_LOAD_FAILURE,
  DETAIL_LOAD_SUCCESS,
  DETAIL_LOAD_REQUEST,
  DETAIL_LOAD_FAILURE,
  DETAIL_REMOVE_REQUEST,
  DETAIL_REMOVE_FAILURE,
  DETAIL_REMOVE_SUCCESS,
  LISTINGS_CREATE_REQUEST,
  LISTINGS_CREATE_FAILURE,
  LISTINGS_CREATE_SUCCESS,
  UI_RESET_ERROR,
} from './types';

/**
 * ACTION CREATORS LOGIN:
 */
export const authLoginRequest = () => {
  return {
    type: AUTH_LOGIN_REQUEST
  }
}

export const authLoginFailure = error => {
  return {
    type: AUTH_LOGIN_FAILURE,
    error: true,
    payload: error
  }
}

export const authLoginSuccess = () => {
  return {
    type: AUTH_LOGIN_SUCCESS
  }
}

export const authLoginAction = (credentials, remember) => {
  return async function(dispatch, getState, { api, history }) {
    dispatch(authLoginRequest());
    try {
      await api.login(credentials, remember)
      dispatch(authLoginSuccess())
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch(error) {
      dispatch(authLoginFailure(error))
    }
  }
}

/**
 * ACTION CREATORS LOGOUT:
 */
export const authLogout = () => {
  return {
    type: AUTH_LOGOUT
  }
}

export const authLogoutRequest = () => {
  return {
    type: AUTH_LOGOUT_REQUEST
  }
}

export const authLogoutFailure = error => {
  return {
    type: AUTH_LOGOUT_FAILURE,
    error: true,
    payload: error
  }
}

export const authLogoutSuccess = () => {
  return {
    type: AUTH_LOGOUT_SUCCESS
  }
}

export const authLogoutAction = () => {
  return function (dispatch, getState, { api, history }) {
    dispatch(authLogoutRequest());
    try {
        dispatch(authLogoutSuccess())
        deleteAuthToken();
        storage.clear();
        history.push('/')
    } catch(error) {
      dispatch(authLogoutFailure(error))
    }
  }
}

/**
 * ACTION CREATORS TAGS:
 */
export const tagsLoadRequest = () => {
  return {
    type: TAGS_LOAD_REQUEST,
  }
}

export const tagsLoadFailure = error => {
  return {
    type: TAGS_LOAD_FAILURE,
    error: true,
    payload: error
  }
}

export const tagsLoadSuccess = tags => {
  return {
    type: TAGS_LOAD_SUCCESS,
    payload: tags
  }
}

export const tagsLoadAction = () => {
  return async function(dispatch, getState, { api }) {
    /**
     * Use Redux as cache for the tags
     */
    const tags = getTags(getState());
    if (tags.length !== 0) {
      return;
    };

    dispatch(tagsLoadRequest());
    try {
      const tags = await api.getTags();
      dispatch(tagsLoadSuccess(tags))
      return tags
    } catch(error) {
      dispatch(tagsLoadFailure(error))
    }
  }
}

/**
 * ACTION CREATORS LISTINGS:
 */
export const listingsLoadRequest = () => {
  return {
    type: LISTINGS_LOAD_REQUEST,
  }
}

export const listingsLoadFailure = error => {
  return {
    type: LISTINGS_LOAD_FAILURE,
    error: true,
    payload: error
  }
}

export const listingsLoadSuccess = listings => {
  return {
    type: LISTINGS_LOAD_SUCCESS,
    payload: listings
  }
}

export const listingsLoadAction = () => {
  return async function (dispatch, getState, { api }) {
    /**
     * Use Redux as cache for the ads
     */
    // const { data } = getListings(getState());
    // if (data) {
    //   return;
    // };

    dispatch(listingsLoadRequest());
    try {
      const ads = await api.getAds();
      dispatch(listingsLoadSuccess(ads))
      return ads
    } catch (error) {
      dispatch(listingsLoadFailure(error))
    }
  }
}

/**
 * ACTION CREATORS DETAIL_LOAD:
 */
export const detailLoadRequest = () => {
  return {
    type: DETAIL_LOAD_REQUEST,
  }
}

export const detailLoadFailure = error => {
  return {
    type: DETAIL_LOAD_FAILURE,
    error: true,
    payload: error
  }
}

export const detailLoadSuccess = detail => {
  return {
    type: DETAIL_LOAD_SUCCESS,
    payload: detail
  }
}

export const detailLoadAction = listingId => {
  return async function (dispatch, getState, { api }) {
    /**
     * Use Redux as cache for the detail
     */
    const ad = getDetail(getState(), listingId);
    if (ad) {
      return;
    };

    dispatch(detailLoadRequest());
    try {
      const listing = await api.getAdvertDetail(listingId);
      dispatch(detailLoadSuccess(listing));
      return listing;
    } catch (error) {
      dispatch(detailLoadFailure(error))
    }
  }
}

/**
 * ACTION CREATORS DETAIL_REMOVE:
 */
export const detailRemoveRequest = () => {
  return {
    type: DETAIL_REMOVE_REQUEST
  }
}

export const detailRemoveFailure = error => {
  return {
    type: DETAIL_REMOVE_FAILURE,
    error: true,
    payload: error
  }
}

export const detailRemoveSuccess = listingId => {
  return {
    type: DETAIL_REMOVE_SUCCESS,
    payload: listingId
  }
}

export const detailRemoveAction = (listingId, location) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(detailRemoveRequest())
    try {
      await api.deleteListing(listingId);
      dispatch(detailRemoveSuccess(listingId));
      history.push('/')
    } catch (error) {
      dispatch(detailRemoveFailure(error))
    }
  }
}

/**
 * ACTION CREATORS LISTINGS_CREATE:
 */
export const listingsCreateRequest = () => {
  return {
    type: LISTINGS_CREATE_REQUEST
  }
}

export const listingsCreateFailure = error => {
  return {
    type: LISTINGS_CREATE_FAILURE,
    error: true,
    payload: error
  }
}

export const listingsCreateSuccess = newListing => {
  return {
    type: LISTINGS_CREATE_SUCCESS,
    payload: newListing
  }
}

export const listingsCreateAction = (listing) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(listingsCreateRequest())
    try {
      const response = await api.newListing(listing);
      dispatch(listingsCreateSuccess(response));
      history.push(`/advert/${response.id}`)
    } catch (error) {
      dispatch(listingsCreateFailure(error))
    }
  }
}

export const UiResetError = () => {
  return {
    type: UI_RESET_ERROR
  }
}