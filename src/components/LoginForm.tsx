import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Form, Link } from "react-router-dom"
import classes from '../pages/login/login.module.css'
const LoginForm = () => {
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
                <Form>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Grid container >
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

export default LoginForm