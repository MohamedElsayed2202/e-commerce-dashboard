import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, InputLabel, MenuItem, Select, Slide, TextField } from "@mui/material"

import { ReactElement, forwardRef, memo } from 'react';
import UserForm from "../forms/UserForm";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { closeModal, openModal } from "../../store/slices/app/forms-slice";
import { TransitionProps } from "@mui/material/transitions";
import BrandForm from "../forms/BrandForm";
import { JsxElement } from "typescript";


const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const formsList = [
    { name: 'user', form: <UserForm /> },
    { name: 'brand', form: <BrandForm /> }
]

const getForm = (type: string): ReactElement => {
    const form = formsList.filter(form => form.name === type)
    return form[0].form
}

const MyModal = () => {

    const { isOpen, data, isValid, type } = useAppSelector(state => state.modalForm);
    console.log(data);
    console.log(type);
    const dispatch = useAppDispatch();
    let form
    if (type) {
        form = getForm(type);
    }


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
                    // sx={{
                    //     display: 'flex',
                    //     flexDirection: 'column',
                    //     m: 'auto',
                    //     width: 'fit-content',
                    // }}
                >
                    {form}
                </Box>

            </DialogContent>
            <DialogActions>
                <Button
                    disabled={isValid ? false : true}
                    variant="contained"
                    onClick={() => {

                    }}>
                    Save
                </Button>
                <Button
                    variant="text"
                    color="error"
                    onClick={() => {
                        if (data) {

                        } else {
                            dispatch(closeModal())
                        }
                    }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(MyModal)