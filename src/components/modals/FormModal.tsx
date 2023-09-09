import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, InputLabel, MenuItem, Select, Slide, TextField } from "@mui/material"

import { forwardRef, memo } from 'react';
import UserForm from "../forms/UserForm";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { closeModal, openModal } from "../../store/slices/app/forms-slice";
import { TransitionProps } from "@mui/material/transitions";


const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MyModal = () => {

    const { isOpen, data } = useAppSelector(state => state.modalForm);
    console.log(data);
    const dispatch = useAppDispatch();

    return (
        <Dialog
            fullWidth
            open={isOpen}
            onClose={() => {
                dispatch(closeModal())
            }}
            TransitionComponent={Transition}
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
                    <UserForm />
                </Box>

            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={() => {

                }}>Save</Button>
                <Button variant="contained" color="error" onClick={() => {
                    if (data) {

                    } else {
                        dispatch(closeModal())
                    }
                }}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(MyModal)