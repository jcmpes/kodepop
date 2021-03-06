export const getIsLogged = state => state.auth;

export const getTags = state => state.tags.data;

export const getListings = state => state.listings.data;

export const getDetail = (state, listingId) => {
  return state.listings.data.find(item => item.id === listingId);
}

export const getUiLoading = state => state.ui.loading;

export const getUiError = state => state.ui.error;
