import { getTags } from './selectors';
import { 
  AUTH_LOGIN,
  AUTH_LOGOUT,
  TAGS_LOAD_SUCCESS,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_FAILURE,
  LISTINGS_LOAD_SUCCESS,
  LISTINGS_LOAD_REQUEST,
  LISTINGS_LOAD_FAILURE
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
    // const { data } = getTags(getState());
    // if (data) {
    //   return;
    // };

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
