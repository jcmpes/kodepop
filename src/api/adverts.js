import client from './client'


export const getAds = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.get(url);
}

export const getDetail = async id => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/${id}`;
    return client.get(url);
}

export const newListing = async details => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.post(url, details)
}

export const getTags = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/tags`;
    return client.get(url)
}
