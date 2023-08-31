import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Form, Link, useActionData, useNavigation } from "react-router-dom"
import classes from '../pages/login/login.module.css'
import { memo, useEffect, useState } from "react";
import { LoginInputError } from "../interfaces/interfaces";
import {LoadingButton} from "@mui/lab";
const LoginForm = () => {
    const data:any = useActionData();
    const {state} = useNavigation();
    const [emailError, setEmailError] = useState<LoginInputError>({
        error: false,
        message: ""
    });
    const [passwordError, setPasswordError] = useState<LoginInputError>({
        error: false,
        message: ""
    });
    useEffect(()=>{
        console.log(typeof data);
        
        if(data && 'data' in data){
            console.log(data);
            const errors = data.data.errors;
            if('email' in errors){
                setEmailError({
                    error: true,
                    message: errors.email
                })
            }
            if('password' in errors){
                setPasswordError({
                    error: true,
                    message: errors.password
                })
            }
        }
    },[data]);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        if(name === 'email'){
            setEmailError({
                error: false,
                message: ""
            })
        }
        if(name === 'password'){
            setPasswordError({
                error: false,
                message: ""
            })
        }
    }
    
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper elevation={24}
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                }}

            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Form method="post">
                    <TextField
                        error={emailError.error}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText= {emailError.message}
                        onInput={inputChange}
                    />
                    <TextField
                        error={passwordError.error}

                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText = {passwordError.message}
                        onInput={inputChange}
                    />
                    <Grid container sx={{
                        mt: 1
                    }}>
                        <Grid item xs>
                            <Link to={"register"} className={classes.navlink}>
                                Forget password?
                            </Link>
                        </Grid>
                    </Grid>
                    <LoadingButton 
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    loading = {state === 'submitting' ? true : false}
                    >
                        <span>Login</span>
                    </LoadingButton>
                </Form>
            </Paper>
        </Box>
    )
}

export default memo(LoginForm);