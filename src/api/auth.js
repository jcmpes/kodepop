import client from './client'

export const login = credentials => {
    return client.post('/api/auth/login', credentials)
}