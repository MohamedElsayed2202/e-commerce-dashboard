import { Box, Button } from "@mui/material"
import { useGetUsersQuery } from "../../store/slices/users/user-api-slice"
import { memo } from "react"
import MyModal from "../../components/modals/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleFormModalOpen } from "../../store/slices/app/forms-slice";

const Users = () => {
    const { data } = useGetUsersQuery();

    const {isOpen} = useAppSelector(state => state.modalForm);

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
                    {/* <h3>No users rather than you!</h3> */}
                    <Button variant="contained">Add User</Button>
                </Box>
            }
                <Button variant="contained" onClick={() => {
                    dispatch(toggleFormModalOpen())
                }}>Add User</Button>
                
                <MyModal/>
            
        </Box>
    )
}

export default memo(Users)