import { Outlet } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { memo, useCallback } from "react";
import { Hidden } from "@mui/material";
import NavDrawer from "../../components/layout-components/NavDrawer";
import CustomeBreadcrumb from "../../components/layout-components/CustomeBreadcrumb";
import DarkModeSwapper from "../../components/layout-components/DarkModeSwapper";
import DrawerToggle from "../../components/layout-components/DrawerToggle";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import MenuAppbar from "../../components/layout-components/MenuAppbar";
import { toggleDrawer } from "../../store/slices/app/appbar-slice";

const drawerWidth = 240;

const RootLayout = () => {
    const appbar = useAppSelector(state => state.appbar);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = useCallback(() => {
        dispatch(toggleDrawer());
    },[dispatch]);

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
                        <DrawerToggle />
                        <Typography variant="h6" noWrap component="div" sx={{
                            display: { xs: 'flex' },
                            flexGrow: 1
                        }}>
                            Shoes House
                        </Typography>
                        <DarkModeSwapper />
                        <MenuAppbar />
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* <Hidden smUp implementation="js"> */}
                        <Drawer
                            variant="temporary"
                            open={appbar.mobileOpen}
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
                    {/* </Hidden> */}
                    {/* <Hidden xsDown implementation="js"> */}
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
                    {/* </Hidden> */}
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