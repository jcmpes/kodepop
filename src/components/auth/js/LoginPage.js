import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Container from './Container';
import { login } from '../../../api/auth';

import '../css/LoginPage.css';

function LoginPage({ onLogin }) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const handleSubmit = async (credentials, remember) => {
        try {
            setLoading(true)
            await login(credentials, remember);
            setLoading(false);
            onLogin(credentials.email);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return (
        <div className="login-page">
            {error && <div className="login-error" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error.message}</div>}
            <Container className='login-container'>
                <LoginForm onSubmit={handleSubmit} loading={loading}></LoginForm>
            </Container>
        </div>
    )
}

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginPage;