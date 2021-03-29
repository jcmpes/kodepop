import LoginForm from './LoginForm'
import Container from './Container'

import '../css/LoginPage.css'

function LoginPage() {
    return (
        <div className="login-page">
            <Container className='login-container'>
                <LoginForm ></LoginForm>
            </Container>
        </div>
    )
}

export default LoginPage;