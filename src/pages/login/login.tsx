import { Container } from '@mui/material'
import LoginForm from "../../components/LoginForm";
import { Params } from "react-router-dom";
import axiosInstance from "../../axios/instance";
import { store } from '../../store/store';
import { authApiSlice } from '../../store/slices/auth/auth-api-slice';
import { LoginRequest } from '../../interfaces/interfaces';

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

    try{
        const formData = await request.formData();
        // const data = Object.fromEntries(formData);
        const eventData: LoginRequest = {
            email: formData.get('email')?.toString()!,
            password: formData.get('password')?.toString()!
        }
        const res = await store
        .dispatch(authApiSlice.endpoints.login.initiate(eventData))
        .unwrap();
        console.log(res);
        
        return res
    }catch(error){
        return error
    }
    

}