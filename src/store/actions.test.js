import { authLoginAction, authLoginFailure, authLoginSuccess, tagsLoadFailure, tagsLoadSuccess } from './actions'
import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_REQUEST, TAGS_LOAD_FAILURE, TAGS_LOAD_SUCCESS } from './types';

/**
 * Testing syncronous action creators
 */
describe('authLoginSuccess', () => {
  it('should return an object', () => {
    const result =  authLoginSuccess();
    expect(typeof result).toBe('object')
  })
  it('should return an action of type AUTH_LOGIN_SUCCESS', () => {
    const result =  authLoginSuccess();
    expect(result.type).toBe(AUTH_LOGIN_SUCCESS);
  })
})

describe('authLoginFailure', () => {
  it('should return an object', () => {
    const result = authLoginFailure();
    expect(typeof result).toBe('object')
  })
  it('should return an action of type AUTH_LOGIN_FAILURE', () => {
    const result = authLoginFailure();
    expect(result.type).toBe(AUTH_LOGIN_FAILURE);
  })
})

describe('tagsLoadSuccess', () => {
  it('should return an object', () => {
    const result = tagsLoadSuccess();
    expect(typeof result).toBe('object')
  })
  it('should return a TAGS_LOAD_SUCCESS action', () => {
    const tags = ['foo', 'bar'];
    const expectedResult = { type: TAGS_LOAD_SUCCESS, payload: tags }
    const result = tagsLoadSuccess(tags);
    expect(result).toEqual(expectedResult)
  })
})

describe('tagsLoadFailure', () => {
  it('should return an object', () => {
    const result = tagsLoadFailure();
    expect(typeof result).toBe('object')
  })
  it('should return a TAGS_LOAD_FAILURE action', () => {
    const error = 'Error';
    const expectedResult = { type: TAGS_LOAD_FAILURE, error: true, payload: error }
    const result = tagsLoadFailure(error);
    expect(result).toEqual(expectedResult)
  })
})

/**
 * Testing asyncronous action creators 
 */
describe('authLoginAction', () => {
  describe('when login method in api resolves', () => {
    const credentials = 'credentials'
    const remember = true
    const thunkAction = authLoginAction(credentials, remember)
    const dispatch = jest.fn();
    const getState = () => {};
    const api = {
      login: jest.fn().mockResolvedValue()
    }
    const history = {
      location: {},
      replace: jest.fn()
    };
    
    it('should dispatch an AUTH_LOGIN_REQUEST action', () => {
      thunkAction(dispatch, getState, { api, history })
      expect(dispatch).toHaveBeenCalledWith({ type: AUTH_LOGIN_REQUEST });
    })

    it('should call api.login', () => {
      thunkAction(dispatch, getState, { api, history })
      expect(api.login).toHaveBeenCalledWith(credentials, remember);
    })

    it('should dispatch an AUTH_LOGIN_SUCCESS action', async () => {
      await thunkAction(dispatch, getState, { api, history })
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: AUTH_LOGIN_SUCCESS });
    })
  })
  describe('when login method in api throws error', () => {

  })
})