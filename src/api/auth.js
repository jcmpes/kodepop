import client, { configureClient } from './client'

export const login = credentials => {
    return client
        .post('/api/auth/login', credentials)
        .then(data => {
            configureClient(data);
            localStorage.setItem('auth',  data.accessToken);
            localStorage.setItem('user',  credentials.email);
        })
}

export const logout = () => {
    configureClient();
    localStorage.clear();
}