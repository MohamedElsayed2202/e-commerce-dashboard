
import { IconButton, Switch, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Container } from '@mui/material'
import LoginForm from "../../components/LoginForm";
import { Params } from "react-router-dom";
import axiosInstance from "../../axios/instance";

const Login = () => {
    const themeContext = useContext(ThemeContext);
    const theme = useTheme()
    return (
        <>
            {/* <Switch  onChange={themeContext.toggleColorMode}/> */}
            <IconButton sx={{ ml: 1 }} onClick={themeContext.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
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
        console.log(error.response);

    }

}