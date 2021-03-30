import axios from 'axios';
import storage from '../utils/storage';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
    response => response.data,
    error => {
        // Don't even get a response (i.e. Network Error)
        if(!error.response) {
            return new Promise((resolve, reject) => {
                reject({ message: error.message })
            })
        }
        // Return an object with the error response message plus the rest of the response data
        return new Promise((resolve, reject) => {
            reject({
                message: error.response.statusText,
                ...error.response.data
            });
        })
    }
);

const setAuthToken = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const deleteAuthToken = () => {
    delete client.defaults.headers.common['Authorization']
}

// Save in axios' client the auth token when user is logged
export const configureClient = ({ accessToken }) => {
    if (accessToken) {
        setAuthToken(accessToken)
    }
}

export const clearSession = () => {
    storage.remove('auth');
    storage.remove('user');
}

export default client