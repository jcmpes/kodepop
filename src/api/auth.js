import client, { configureClient } from './client'

export const login = credentials => {
    return client
        .post('/api/auth/login', credentials)
        .then(data => configureClient(data))
}