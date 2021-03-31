import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Container from './Container';
import { login } from '../../../api/auth';

import '../css/LoginPage.css';

function LoginPage({ onLogin }) {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })
    const [remember, setRemember] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const loggedRef = React.useRef(false)

    React.useEffect(() => {
        if(loggedRef.current === true) {
            onLogin(credentials.email);
        }
    }, [onLogin, loggedRef.current, credentials.email])

    const handleSubmit = async (credentials, remember) => {
        try {
            setLoading(true)
            await login(credentials, remember);
            loggedRef.current = true;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-page">
            {error && <div className="login-error" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error.message}</div>}
            <Container className='login-container'>
                <LoginForm onSubmit={handleSubmit} loading={loading} credentials={credentials} setCredentials={setCredentials} remember={remember} setRemember={setRemember}></LoginForm>
            </Container>
        </div>
    )
}

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginPage;