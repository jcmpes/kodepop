import client from './client';


export const getTags = () => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/adverts/tags`
  return client.get(url)
}
