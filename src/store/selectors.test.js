import { getDetail, getListings } from './selectors';

describe('getListings', () => {
  it('should return listings', () => {
    const data = [
      { id: 1 },
      { id: 2 }
    ];
    const state = { listings: { data }}
    const result = getListings(state)
    expect(result).toHaveLength(state.listings.data.length)
  })
})

describe('getDetail', () => {
  it('should return listing detail', () => {
    const listingId = 2
    const data = [
      { id: 1 },
      { id: 2 }
    ];
    const state = { listings: { data } }
    const result = getDetail(state, listingId)
    expect(result).toEqual(data[1])
  })
})