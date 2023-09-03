import { Box } from "@mui/material"
import { useGetUsersQuery } from "../../store/slices/users/user-api-slice"
import { memo } from "react"

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
                    }}
                >
                    No users rather than you!
                </Box>
            }
            {
                
            }
        </Box>
    )
}

export default memo(Users)