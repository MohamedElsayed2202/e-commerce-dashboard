import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material"

import { ReactElement, forwardRef, memo, useCallback } from 'react';
import UserForm from "../forms/UserForm";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { closeModal } from "../../store/slices/app/forms-slice";
import { TransitionProps } from "@mui/material/transitions";
import BrandForm from "../forms/BrandForm";
import { useSubmit } from "react-router-dom";


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
    const submit = useSubmit();
    const { isOpen, data, isValid, type } = useAppSelector(state => state.modalForm);
    const dispatch = useAppDispatch();
    let form
    if (type) {
        form = getForm(type);
    }

    const add = useCallback(()=>{    
        submit(data, { method: 'POST'});
    }, [data, submit])

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
                    onClick={add}>
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