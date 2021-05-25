export const getIsLogged = state => state.auth;

export const getTags = state => state.tags.data;

export const getListings = state => state.listings.data;

export const getDetail = (state, listingId) => {
  return state.listings.data
  // .find(item => item.id === Number(listingId))
}