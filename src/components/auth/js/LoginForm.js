import React from 'react';
import Button from '../../shared/Button';
import FormField from './FormField';

import '../css/LoginForm.css'

function LoginForm({ onSubmit }) {

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
            <h1 className="form-title">Log In</h1>
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
                    disabled={!credentials.email || !credentials.password}
                >Submit</Button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;