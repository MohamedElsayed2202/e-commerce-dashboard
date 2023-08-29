import { Container } from '@mui/material'
import LoginForm from "../../components/LoginForm";
import { Params } from "react-router-dom";
import axiosInstance from "../../axios/instance";

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

export async function loginEventAction({ request, params }: { request: Request, params: Params }) {
    try {
        const data = await request.formData();
        const eventData = {
            email: data.get('email'),
            password: data.get('password')
        }
        const res = await axiosInstance.post('/auth/login', eventData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res);
    } catch (error: any) {
        // console.log(error.response);
        return error.response
    }

}