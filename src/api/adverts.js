import client from './client'

export const getAds = async () => {
    const url = 'api/v1/adverts/'
    const response = await client.get(url)
    const data = response.data
    return data;
};