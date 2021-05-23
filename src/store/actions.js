// import { getTags } from './selectors';
import { 
  AUTH_LOGIN,
  AUTH_LOGOUT,
  TAGS_LOAD_SUCCESS,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_FAILURE
} from './types';

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
     * Use Redux as cache
     */
    // const tagsLoaded = getTags(getState());
    // if (tagsLoaded) {
    //   return;
    // };

    dispatch(tagsLoadRequest());
    try {
      const tags = await api.getTags();
      console.log('tags loaded: ', tags)
      dispatch(tagsLoadSuccess(tags))
      return tags
    } catch(error) {
      dispatch(tagsLoadFailure(error))
    }
  }
}