import { Container } from '@mui/material'
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
    return (
        <>
            <Container component="main" maxWidth="sm">
                <LoginForm />
            </Container>
        </>
    )
}

export default Login;

