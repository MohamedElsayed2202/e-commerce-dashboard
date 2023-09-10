import { Box, Button, Typography } from "@mui/material"
import { useGetUsersQuery } from "../../store/slices/users/user-api-slice"
import { memo } from "react"
import MyModal from "../../components/modals/FormModal";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { openModal } from "../../store/slices/app/forms-slice";

const Users = () => {
    const { data } = useGetUsersQuery();
    console.log(data);

    // const { data: user } = useAppSelector(state => state.modalForm);

    const dispatch = useAppDispatch();

    return (
        <Box
            component="section"
            sx={{
                m: 2,

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {data && data.length === 0 ?
                    <><Typography variant="h3">
                        No users created yet!
                    </Typography><Button variant="contained"
                        sx={{
                            mt: 1
                        }}
                        onClick={() => {
                            dispatch(openModal({ type: 'user', isEditing: false }));
                        }}
                    >
                            Add User
                        </Button></>
                    : <Box>
                        <Typography>
                            {JSON.stringify(data)}
                        </Typography>

                        <Button variant="contained" onClick={() => {
                            dispatch(openModal({ type: 'user', isEditing: false }))
                        }}>Add User</Button>
                    </Box>}
            </Box>

            <MyModal />

        </Box>
    )
}

export default memo(Users)