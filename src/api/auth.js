import client, { configureClient } from './client';
import storage from '../utils/storage';

export const login = (credentials, remember) => {
    return client
        .post('/api/auth/login', credentials)
        .then(data => {
            configureClient(data)
            storage.set('auth', data.accessToken, remember);
            storage.set('user', credentials.email, remember);
        })
}

export const logout = () => {
    configureClient();
    storage.clear();
}