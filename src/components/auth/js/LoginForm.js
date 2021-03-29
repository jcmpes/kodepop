import React from 'react';
import Button from '../../shared/Button';
import FormField from './FormField';

import '../css/LoginForm.css'

function LoginForm() {

    // Create a state to handle credentials submit and view
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: ''
    })

    const handleUsernameChange = e => {
        console.log(e)
    }

    return (
        <React.Fragment>
            <h1 className="form-title">Log In</h1>
            <form className="login-form">
                <FormField 
                    name="username"
                    label="Username or email"
                    type="text"
                    className="login-form-field"
                    value={credentials.usename}
                />
                <FormField 
                    name="password"
                    label="Password"
                    type="password"
                    className="login-form-field"
                    value={credentials.password}
                />
                <Button
                    type="submit"
                    variant="highlight"
                    className="login-form-submit"
                >Submit</Button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;