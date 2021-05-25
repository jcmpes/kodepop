import client from './client'


export const getAds = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.get(url);
}

export const getAdvertDetail = async id => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/${id}`;
    return client.get(url);
}

export const newListing = async details => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts`;
    return client.post(url, details)
}

export const deleteListing = async id => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/${id}`;
    return client.delete(url)
}
