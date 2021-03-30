import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
    response => response.data
)

const setAuthToken = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Save in axios' client the auth token when user is logged
export const configureClient = ({ accessToken }) => {
    if (accessToken) {
        setAuthToken(accessToken)
    }
}

export default client