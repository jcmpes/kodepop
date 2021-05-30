import { listings, initialState } from './reducers';
import { DETAIL_LOAD_SUCCESS, LISTINGS_LOAD_SUCCESS } from './types';

describe('listings', () => {
  it('should manage ANY action', () => {
    const state = initialState.listings
    const action = { type: 'ANY' }
    const response = listings(state, action)
    expect(response).toBe(state)
  })

  it('should manage LISTINGS_LOAD_SUCCESS action', () => {
    const state = initialState.listings
    const listingsData = []
    const action = { type: LISTINGS_LOAD_SUCCESS, payload: listingsData }
    const expectedState = { 
      ...initialState.listings,
      loaded: true,
      data: listingsData
    }
    const result = listings(state, action)
    expect(result).toEqual(expectedState)
  })

  it('should manage DETAIL_LOAD_SUCCESS action', () => {
    const state = initialState.listings
    const action = { type: DETAIL_LOAD_SUCCESS, payload: ['foo'] }
    const expectedState = { 
      ...initialState.listings,
      loaded: true,
      data: [...initialState.listings.data, action.payload]
    }
    const result = listings(state, action)
    expect(result).toEqual(expectedState)
  })
})