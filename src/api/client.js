import axios from 'axios';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
    response => response.data,
    error => {
        // Don't even get a response (i.e. Network Error)
        if(!error.response) {
            return Promise.reject({ message: error.message })
        }
        // Return an object with the error response message plus the rest of the response data
        return Promise.reject({
            message: error.response.statusText,
            ...error.response.data
        });
    }
);

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