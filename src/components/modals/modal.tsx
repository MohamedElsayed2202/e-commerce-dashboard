import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Form, useFetcher, useSubmit } from "react-router-dom"
import { useRef } from 'react'

const MyModal = () => {



    const handelChange = () => {

    }

    return (
        <Dialog
            fullWidth
            // maxWidth ={'xs'}
            open={true}
        >
            <DialogTitle>Add user</DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <Form action="add" method="POST" noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="name"
                            type="text"
                            id="name"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="email"
                            type="email"
                            id="email"
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            id="password"
                        />

                        <FormControl fullWidth sx={{
                            mt: 2,
                            mb: 1
                        }}>
                            <InputLabel htmlFor="role">Role</InputLabel>
                            <Select
                                label="role"
                                required
                                name="role"
                                id="role"
                                value="admin"
                            >
                                <MenuItem value="owner">Owner</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="user">User</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="phone"
                            type="tel"
                            id="phone"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => {
                                console.log(55555);
                            }}
                        >
                            Add
                        </Button>
                    </Form>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => {

                }}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MyModal