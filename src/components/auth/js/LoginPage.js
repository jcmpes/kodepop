import LoginForm from './LoginForm';
import Container from './Container';
import { login } from '../../../api/auth'

import '../css/LoginPage.css'

function LoginPage() {

    return (
        <div className="login-page">
            <Container className='login-container'>
                <LoginForm onSubmit={login}></LoginForm>
            </Container>
        </div>
    )
}

export default LoginPage;