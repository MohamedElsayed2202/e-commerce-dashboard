import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Form, Link, useActionData } from "react-router-dom"
import classes from '../pages/login/login.module.css'
import { memo } from "react";
const LoginForm = () => {
    const data:any = useActionData();
    console.log((data && 'password' in data.data.errors));
    
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
                }}

            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Form method="post">
                    <TextField
                        error={data && 'email' in data.data.errors}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText = {data && data.data.errors.email}
                    />
                    <TextField
                        error={data && 'password' in data.data.errors}

                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText = {data && data.data.errors.password}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }} >
                        Login
                    </Button>
                </Form>
            </Paper>
        </Box>
    )
}

export default memo(LoginForm);