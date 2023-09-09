import { Box, Button, Typography } from "@mui/material"
import { useGetUsersQuery } from "../../store/slices/users/user-api-slice"
import { memo } from "react"
import MyModal from "../../components/modals/FormModal";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { openModal } from "../../store/slices/app/forms-slice";
import { type } from "os";

const Users = () => {
    const { data } = useGetUsersQuery();

    const { data: user } = useAppSelector(state => state.modalForm);

    const dispatch = useAppDispatch();

    return (
        <Box
            component="section"
            sx={{
                m: 2,

            }}
        >

            {data && data.length === 0 &&
                <Box
                    component="h3"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h3">
                        No users created yet!
                    </Typography>
                    <Button variant="contained">Add User</Button>
                </Box>
            }
            {
                user ? <Button variant="contained" onClick={() => {
                    dispatch(openModal({type: 'user', isEditing: true}))
                }}>Edite</Button> : <Button variant="contained" onClick={() => {
                    dispatch(openModal({type: 'brand', isEditing: false}))
                }}>Add User</Button>
            }


            <MyModal />

        </Box>
    )
}

export default memo(Users)