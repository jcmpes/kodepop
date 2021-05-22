import client, { configureClient, deleteAuthToken } from './client';
import storage from '../utils/storage';

export const login = (credentials, remember) => {
    return client
        .post('/api/auth/login', credentials)
        .then(data => {
            configureClient(data)
            if (remember) {
              storage.set('auth', data.accessToken, remember);
            }
        })
}

export const logout = () => {
    return Promise.resolve().then(() => {
      deleteAuthToken();
      storage.clear();
    })
}