import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Container from './Container';

import '../css/LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginAction, UiResetError } from '../../../store/actions';
import { getUiError } from '../../../store/selectors';

function LoginPage({ routerProps }) {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })
    const [remember, setRemember] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    // const [error, setError] = React.useState(null)
    const error = useSelector(getUiError)
    const loggedRef = React.useRef(false)

    const dispatch = useDispatch();
    const onLogin = () => dispatch(authLoginAction());

    React.useEffect(() => {
      dispatch(UiResetError())
        if(loggedRef.current === true) {
            onLogin()        
        }
    }, [loggedRef.current])

    const handleSubmit = () => {
       dispatch(authLoginAction(credentials, remember))
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