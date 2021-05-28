import { getTags, getDetail } from './selectors';

import { 
  AUTH_LOGIN,
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
} from './types';

/**
 * ACTION CREATORS LOGIN:
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
