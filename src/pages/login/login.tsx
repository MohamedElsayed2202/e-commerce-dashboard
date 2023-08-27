
import { IconButton, Switch, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Container} from '@mui/material'
import LoginForm from "../../components/LoginForm";

const Login = () => {
    const themeContext = useContext(ThemeContext);
    const theme = useTheme()
    return(
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