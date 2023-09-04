import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { memo, useCallback, useState } from "react"
import { useAppSelector } from "../../hooks/hooks";
import { useSubmit } from "react-router-dom";
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MenuAppbar = () => {
    const user = useAppSelector(state => state.auth.user);
    const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null)
    const submit = useSubmit()
    const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }, []);

    const handleCloseMenu = useCallback(() => {
        setAnchorElUser(null);
    }, []);
    
    const logout = useCallback(() =>{
        submit(null, {action: 'auth/logout', method:'POST'});
    } ,[submit])

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.name} src={user?.profile.image.url} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseMenu}
            >
                {settings.map((setting, index) => (
                    <MenuItem key={setting} onClick={setting === 'Logout' ? logout: handleCloseMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default memo(MenuAppbar);
