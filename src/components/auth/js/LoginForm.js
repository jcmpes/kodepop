import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';
import FormField from './FormField';
import { Spinner } from '../../shared';

import '../css/LoginForm.css'

function LoginForm({ onSubmit, loading }) {

    // Create a state to handle credentials submit and view
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        setCredentials(oldCredentials => {
            return {
            ...oldCredentials,
            [e.target.name]: e.target.value
            }
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(credentials)
    }

    return (
        <React.Fragment>
            <h1 className="form-title">
                {loading ? 'Logging in...' : 'Log In' }
            </h1>
            <div>
                {loading ? <Spinner /> : 
                    <form className="login-form" onSubmit={handleSubmit}>
                        <FormField 
                            name="email"
                            label="Email"
                            type="text"
                            className="login-form-field"
                            value={credentials.email}
                            onChange={handleInputChange}
                        />
                        <FormField 
                            name="password"
                            label="Password"
                            type="password"
                            className="login-form-field"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                        <Button
                            type="submit"
                            variant="highlight"
                            className="login-form-submit"
                            style={{ fontSize: '1.2rem' }}
                            disabled={!credentials.email || !credentials.password || loading}
                        >Submit</Button>
                    </form>
                }
            </div>
        </React.Fragment>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default LoginForm;