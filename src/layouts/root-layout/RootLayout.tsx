import { Outlet } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { memo, useCallback, useState } from "react";
import { Avatar, Hidden, Menu, MenuItem, Tooltip, } from "@mui/material";
import NavDrawer from "../../components/NavDrawer";
import CustomeBreadcrumb from "../../components/CustomeBreadcrumb";
import DarkModeSwapper from "../../components/DarkModeSwapper";
import DrawerToggle from "../../components/DrawerToggle";
import { useAppSelector } from "../../hooks/hooks";

const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const RootLayout = () => {
    const user = useAppSelector(state => state.auth);
    console.log(user);
    
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    console.log('666666666666', anchorElUser);
    
    const handleDrawerToggle = useCallback(() => {
        setMobileOpen(prev => !prev);
    },[]);

    const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    },[]);

    const handleCloseMenu = useCallback(() => {
        setAnchorElUser(null);
    },[]);

    return (
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{
                        ml: { sm: `${drawerWidth}px` },
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                >
                    <Toolbar >
                        <DrawerToggle handleDrawerToggle={handleDrawerToggle} isOpen={mobileOpen} />
                        <Typography variant="h6" noWrap component="div" sx={{
                            display: { xs: 'flex' },
                            flexGrow: 1
                        }}>
                            Shoes House
                        </Typography>
                        <DarkModeSwapper />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Hidden smUp implementation="js">
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            <NavDrawer />
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="js">
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            <NavDrawer />
                        </Drawer>
                    </Hidden>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <CustomeBreadcrumb />
                    <Outlet />
                </Box>
            </Box>
    );
}

export default memo(RootLayout);