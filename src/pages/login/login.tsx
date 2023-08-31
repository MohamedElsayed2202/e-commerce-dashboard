import { Container } from '@mui/material'
import LoginForm from "../../components/LoginForm";

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

