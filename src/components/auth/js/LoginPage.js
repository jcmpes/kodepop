import LoginForm from './LoginForm';
import Container from './Container';
import { login } from '../../../api/auth'

import '../css/LoginPage.css'

function LoginPage({ onLogin }) {

    const handleSubmit = async credentials => {
        await login(credentials)
        onLogin(credentials.email)
    }

    return (
        <div className="login-page">
            <Container className='login-container'>
                <LoginForm onSubmit={handleSubmit}></LoginForm>
            </Container>
        </div>
    )
}

export default LoginPage;