import { Box, Button } from "@mui/material"
import { useGetUsersQuery } from "../../store/slices/users/user-api-slice"
import { memo } from "react"
import MyModal from "../../components/modals/modal";

const Users = () => {
    const { data } = useGetUsersQuery();
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
            {
                <MyModal/>
            }
        </Box>
    )
}

export default memo(Users)