import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';
import FormField from './FormField';
import { Spinner } from '../../shared';

import '../css/LoginForm.css'

function LoginForm({ onSubmit, loading, credentials, setCredentials, remember, setRemember }) {

    const handleInputChange = e => {
        setCredentials(oldCredentials => {
            return {
            ...oldCredentials,
            [e.target.name]: e.target.value
            }
        })
    }

    const handleCheckboxChange = e => {
        setRemember(e.target.checked);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(credentials, remember);
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
                            placeholder="Email"
                            type="text"
                            className="login-form-field"
                            value={credentials.email}
                            onChange={handleInputChange}
                        />
                        <FormField 
                            name="password"
                            placeholder="Password"
                            type="password"
                            className="login-form-field"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                        <FormField
                            name="remember"
                            id="remember"
                            label="Remember Me"
                            type="checkbox"
                            checked={remember}
                            onChange={handleCheckboxChange}
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